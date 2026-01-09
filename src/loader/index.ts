type GLBChunkType = 'JSON' | 'BIN';

type GLBParseResult = {
    gltf: any;
    bin: ArrayBuffer | null;
    chunks: Array<{ type: GLBChunkType | string; byteLength: number }>;
};

type GltfMeshPrimitive = {
    attributes: Record<string, number>;
    indices?: number;
};

type GltfMesh = {
    primitives: GltfMeshPrimitive[];
};

type GltfBufferView = {
    buffer: number;
    byteOffset?: number;
    byteLength: number;
    byteStride?: number;
};

type GltfAccessor = {
    bufferView?: number;
    byteOffset?: number;
    componentType: number;
    count: number;
    type: 'SCALAR' | 'VEC2' | 'VEC3' | 'VEC4' | 'MAT2' | 'MAT3' | 'MAT4';
};

type MinimalGLTF = {
    buffers?: Array<{ byteLength: number; uri?: string }>;
    bufferViews?: GltfBufferView[];
    accessors?: GltfAccessor[];
    meshes?: GltfMesh[];
};

export type GLBLoadInput = string | ArrayBuffer;

export type GLBToGeometryResult = {
    gltf: MinimalGLTF;
    bin: ArrayBuffer;
    vertices: number[];
    indices: number[];
    meshIndex: number;
    primitiveIndex: number;
};

export class Loader {
    /**
     * 加载并解析 GLB（glTF 2.0 binary），并提取 mesh primitive 的 POSITION + indices
     * 以便直接喂给你现有的 Buffer/Geometry（vertices:number[], indices:number[]）。
     *
     * - input: URL 或 ArrayBuffer
     * - options.meshIndex / primitiveIndex: 选择第几个 mesh/primitive（默认 0/0）
     */
    static async GLBLoader(
        input: GLBLoadInput,
        options?: { meshIndex?: number; primitiveIndex?: number },
    ): Promise<GLBToGeometryResult> {
        const meshIndex = options?.meshIndex ?? 0;
        const primitiveIndex = options?.primitiveIndex ?? 0;

        const arrayBuffer = typeof input === 'string' ? await this.fetchArrayBuffer(input) : input;
        const parsed = this.parseGLB(arrayBuffer);
        const gltf = parsed.gltf as MinimalGLTF;

        if (!parsed.bin) {
            throw new Error('GLB 解析成功，但未找到 BIN chunk（无法读取 buffer 数据）');
        }
        const bin = parsed.bin;

        const mesh = gltf.meshes?.[meshIndex];
        if (!mesh) throw new Error(`glTF 中不存在 meshes[${meshIndex}]`);
        const primitive = mesh.primitives?.[primitiveIndex];
        if (!primitive) throw new Error(`glTF 中不存在 meshes[${meshIndex}].primitives[${primitiveIndex}]`);

        const posAccessorIndex = primitive.attributes?.POSITION;
        if (posAccessorIndex === undefined || posAccessorIndex === null) {
            throw new Error('primitive.attributes.POSITION 不存在（当前 Loader 仅支持提取 POSITION）');
        }

        const positions = this.readAccessorAsFloat32(gltf, bin, posAccessorIndex);
        const vertexCount = Math.floor(positions.length / 3);

        let indices: Uint16Array;
        if (primitive.indices !== undefined && primitive.indices !== null) {
            indices = this.readAccessorAsUint16(gltf, bin, primitive.indices);
        } else {
            // 无 indices 时生成顺序索引，配合现有 DrawElements 逻辑
            if (vertexCount > 65535) {
                throw new Error(
                    `primitive 未提供 indices，且顶点数 ${vertexCount} > 65535（现有管线只支持 UNSIGNED_SHORT）`,
                );
            }
            indices = new Uint16Array(vertexCount);
            for (let i = 0; i < vertexCount; i++) indices[i] = i;
        }

        return {
            gltf,
            bin,
            vertices: Array.from(positions),
            indices: Array.from(indices),
            meshIndex,
            primitiveIndex,
        };
    }

    static async fetchArrayBuffer(url: string): Promise<ArrayBuffer> {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`GLB 下载失败: ${res.status} ${res.statusText}`);
        }
        return await res.arrayBuffer();
    }

    /**
     * 解析 GLB v2：
     * - Header: magic 'glTF' (0x46546C67), version=2, length
     * - Chunks: [chunkLength:uint32][chunkType:uint32][chunkData...]
     *   chunkType: JSON=0x4E4F534A, BIN=0x004E4942
     */
    static parseGLB(buffer: ArrayBuffer): GLBParseResult {
        const dv = new DataView(buffer);
        const magic = dv.getUint32(0, true);
        // 'glTF' little-endian
        if (magic !== 0x46546c67) {
            throw new Error('不是有效的 GLB：magic 不匹配');
        }
        const version = dv.getUint32(4, true);
        if (version !== 2) {
            throw new Error(`不支持的 GLB 版本: ${version}（当前仅支持 v2）`);
        }
        const length = dv.getUint32(8, true);
        if (length !== buffer.byteLength) {
            // 容错：有些文件 length 字段可能与实际不一致，但通常不该发生
            // 这里不直接 throw，避免过严导致无法加载
        }

        let offset = 12;
        let gltf: any = null;
        let bin: ArrayBuffer | null = null;
        const chunks: Array<{ type: string; byteLength: number }> = [];
        const td = new TextDecoder('utf-8');

        while (offset + 8 <= buffer.byteLength) {
            const chunkLength = dv.getUint32(offset, true);
            const chunkType = dv.getUint32(offset + 4, true);
            offset += 8;

            const chunkData = buffer.slice(offset, offset + chunkLength);
            offset += chunkLength;

            const typeStr =
                chunkType === 0x4e4f534a ? 'JSON' : chunkType === 0x004e4942 ? 'BIN' : `0x${chunkType.toString(16)}`;
            chunks.push({ type: typeStr, byteLength: chunkLength });

            if (typeStr === 'JSON') {
                const jsonText = td.decode(new Uint8Array(chunkData));
                gltf = JSON.parse(jsonText);
            } else if (typeStr === 'BIN') {
                bin = chunkData;
            }
        }

        if (!gltf) throw new Error('GLB 中缺少 JSON chunk');
        return { gltf, bin, chunks };
    }

    static readAccessorAsFloat32(gltf: MinimalGLTF, bin: ArrayBuffer, accessorIndex: number): Float32Array {
        const arr = this.readAccessor(gltf, bin, accessorIndex);
        if (arr instanceof Float32Array) return arr;
        // 尽量容错：如果 POSITION 不是 float32，转成 float32
        return new Float32Array(Array.from(arr as any));
    }

    static readAccessorAsUint16(gltf: MinimalGLTF, bin: ArrayBuffer, accessorIndex: number): Uint16Array {
        const accessor = gltf.accessors?.[accessorIndex];
        if (!accessor) throw new Error(`glTF 中不存在 accessors[${accessorIndex}]`);

        const arr = this.readAccessor(gltf, bin, accessorIndex);
        if (arr instanceof Uint16Array) return arr;
        if (arr instanceof Uint8Array) return new Uint16Array(arr);
        if (arr instanceof Uint32Array) {
            // 现有管线 DrawElements 使用 UNSIGNED_SHORT
            const max = arr.reduce((m, v) => (v > m ? v : m), 0);
            if (max > 65535) {
                throw new Error(`indices 使用 UNSIGNED_INT 且存在值 ${max} > 65535（现有管线不支持）`);
            }
            return new Uint16Array(arr);
        }
        // 其它情况：兜底转
        return new Uint16Array(Array.from(arr as any));
    }

    /**
     * 从 BIN chunk 中读取 accessor 对应的数据，返回 TypedArray。
     * 目前只支持 BIN 内置 buffer（GLB 常见场景）。如果 uri 外链 buffer，这里会报错。
     */
    static readAccessor(gltf: MinimalGLTF, bin: ArrayBuffer, accessorIndex: number):
        | Float32Array
        | Uint8Array
        | Uint16Array
        | Uint32Array
        | Int8Array
        | Int16Array
        | Int32Array {
        const accessor = gltf.accessors?.[accessorIndex];
        if (!accessor) throw new Error(`glTF 中不存在 accessors[${accessorIndex}]`);
        if (accessor.bufferView === undefined || accessor.bufferView === null) {
            throw new Error(`accessors[${accessorIndex}] 没有 bufferView（当前 Loader 不支持稀疏 accessor）`);
        }

        const bufferView = gltf.bufferViews?.[accessor.bufferView];
        if (!bufferView) throw new Error(`glTF 中不存在 bufferViews[${accessor.bufferView}]`);
        if (bufferView.buffer !== 0) {
            // GLB 通常 buffer=0 指向 BIN chunk
            throw new Error(`bufferViews[${accessor.bufferView}].buffer=${bufferView.buffer}（当前仅支持 GLB 内置 buffer=0）`);
        }

        const numComponents = this.getNumComponents(accessor.type);
        const componentSize = this.getComponentSize(accessor.componentType);
        const elementSize = componentSize * numComponents;
        const count = accessor.count;

        const viewByteOffset = bufferView.byteOffset ?? 0;
        const accessorByteOffset = accessor.byteOffset ?? 0;
        const byteOffset = viewByteOffset + accessorByteOffset;
        const byteStride = bufferView.byteStride ?? elementSize;

        const ArrayCtor = this.getTypedArrayCtor(accessor.componentType);
        const totalComponents = count * numComponents;

        // 非交错（紧密排列）可直接 view
        if (byteStride === elementSize) {
            return new ArrayCtor(bin, byteOffset, totalComponents) as any;
        }

        // 交错数据：拷贝出来
        const out = new ArrayCtor(totalComponents) as any;
        const dv = new DataView(bin);
        for (let i = 0; i < count; i++) {
            const base = byteOffset + i * byteStride;
            for (let c = 0; c < numComponents; c++) {
                const componentByteOffset = base + c * componentSize;
                out[i * numComponents + c] = this.readComponent(dv, componentByteOffset, accessor.componentType);
            }
        }
        return out;
    }

    static getNumComponents(type: GltfAccessor['type']): number {
        switch (type) {
            case 'SCALAR':
                return 1;
            case 'VEC2':
                return 2;
            case 'VEC3':
                return 3;
            case 'VEC4':
                return 4;
            case 'MAT2':
                return 4;
            case 'MAT3':
                return 9;
            case 'MAT4':
                return 16;
        }
    }

    static getComponentSize(componentType: number): number {
        // glTF 2.0 componentType
        switch (componentType) {
            case 5120: // BYTE
            case 5121: // UNSIGNED_BYTE
                return 1;
            case 5122: // SHORT
            case 5123: // UNSIGNED_SHORT
                return 2;
            case 5125: // UNSIGNED_INT
            case 5126: // FLOAT
                return 4;
            default:
                throw new Error(`不支持的 accessor.componentType: ${componentType}`);
        }
    }

    static getTypedArrayCtor(componentType: number):
        | Int8ArrayConstructor
        | Uint8ArrayConstructor
        | Int16ArrayConstructor
        | Uint16ArrayConstructor
        | Uint32ArrayConstructor
        | Float32ArrayConstructor {
        switch (componentType) {
            case 5120:
                return Int8Array;
            case 5121:
                return Uint8Array;
            case 5122:
                return Int16Array;
            case 5123:
                return Uint16Array;
            case 5125:
                return Uint32Array;
            case 5126:
                return Float32Array;
            default:
                throw new Error(`不支持的 accessor.componentType: ${componentType}`);
        }
    }

    static readComponent(dv: DataView, byteOffset: number, componentType: number): number {
        switch (componentType) {
            case 5120:
                return dv.getInt8(byteOffset);
            case 5121:
                return dv.getUint8(byteOffset);
            case 5122:
                return dv.getInt16(byteOffset, true);
            case 5123:
                return dv.getUint16(byteOffset, true);
            case 5125:
                return dv.getUint32(byteOffset, true);
            case 5126:
                return dv.getFloat32(byteOffset, true);
            default:
                throw new Error(`不支持的 accessor.componentType: ${componentType}`);
        }
    }
}
