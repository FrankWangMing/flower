import type { MinimalGLTF } from '../types';
import { getNumComponents, getComponentSize, getTypedArrayCtor, readComponent } from './utils';

/**
 * 从 BIN chunk 中读取 accessor 对应的数据，返回 TypedArray。
 * 目前只支持 BIN 内置 buffer（GLB 常见场景）。如果 uri 外链 buffer，这里会报错。
 */
export function readAccessor(
    gltf: MinimalGLTF,
    bin: ArrayBuffer,
    accessorIndex: number,
): Float32Array | Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array {
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

    const numComponents = getNumComponents(accessor.type);
    const componentSize = getComponentSize(accessor.componentType);
    const elementSize = componentSize * numComponents;
    const count = accessor.count;

    const viewByteOffset = bufferView.byteOffset ?? 0;
    const accessorByteOffset = accessor.byteOffset ?? 0;
    const byteOffset = viewByteOffset + accessorByteOffset;
    const byteStride = bufferView.byteStride ?? elementSize;

    const ArrayCtor = getTypedArrayCtor(accessor.componentType);
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
            out[i * numComponents + c] = readComponent(dv, componentByteOffset, accessor.componentType);
        }
    }
    return out;
}

/**
 * 读取 accessor 数据为 Float32Array
 */
export function readAccessorAsFloat32(gltf: MinimalGLTF, bin: ArrayBuffer, accessorIndex: number): Float32Array {
    const arr = readAccessor(gltf, bin, accessorIndex);
    if (arr instanceof Float32Array) return arr;
    // 尽量容错：如果 POSITION 不是 float32，转成 float32
    return new Float32Array(Array.from(arr as any));
}

/**
 * 读取 accessor 数据为 Uint16Array
 */
export function readAccessorAsUint16(gltf: MinimalGLTF, bin: ArrayBuffer, accessorIndex: number): Uint16Array {
    const accessor = gltf.accessors?.[accessorIndex];
    if (!accessor) throw new Error(`glTF 中不存在 accessors[${accessorIndex}]`);

    const arr = readAccessor(gltf, bin, accessorIndex);
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
