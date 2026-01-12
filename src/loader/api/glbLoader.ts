import type { GLBLoadInput, GLBToGeometryResult, MinimalGLTF } from '../types';
import { parseGLB } from '../common/glbParser';
import { readAccessorAsFloat32, readAccessorAsUint16 } from '../common/accessorReader';

/**
 * 从 URL 获取 ArrayBuffer
 */
export async function fetchArrayBuffer(url: string): Promise<ArrayBuffer> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`GLB 下载失败: ${res.status} ${res.statusText}`);
    }
    return await res.arrayBuffer();
}

/**
 * 加载并解析 GLB（glTF 2.0 binary），并提取 mesh primitive 的 POSITION + indices
 * 以便直接喂给你现有的 Buffer/Geometry（vertices:number[], indices:number[]）。
 *
 * - input: URL 或 ArrayBuffer
 * - options.meshIndex / primitiveIndex: 选择第几个 mesh/primitive（默认 0/0）
 */
export async function GLBLoader(
    input: GLBLoadInput,
    options?: { meshIndex?: number; primitiveIndex?: number },
): Promise<GLBToGeometryResult> {
    const meshIndex = options?.meshIndex ?? 0;
    const primitiveIndex = options?.primitiveIndex ?? 0;

    const arrayBuffer = typeof input === 'string' ? await fetchArrayBuffer(input) : input;
    const parsed = parseGLB(arrayBuffer);
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

    const positions = readAccessorAsFloat32(gltf, bin, posAccessorIndex);
    const vertexCount = Math.floor(positions.length / 3);

    let indices: Uint16Array;
    if (primitive.indices !== undefined && primitive.indices !== null) {
        indices = readAccessorAsUint16(gltf, bin, primitive.indices);
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
