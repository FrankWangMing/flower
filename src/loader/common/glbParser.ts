import type { GLBParseResult } from '../types';

/**
 * 解析 GLB v2：
 * - Header: magic 'glTF' (0x46546C67), version=2, length
 * - Chunks: [chunkLength:uint32][chunkType:uint32][chunkData...]
 *   chunkType: JSON=0x4E4F534A, BIN=0x004E4942
 */
export function parseGLB(buffer: ArrayBuffer): GLBParseResult {
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
