/**
 * 从三角形索引生成线框索引
 * 每个三角形生成 3 条边（6 个索引）
 */
export function generateWireframeIndices(triangleIndices: Uint16Array): Uint16Array {
    const triangleCount = triangleIndices.length / 3;
    const wireframeIndices: number[] = [];

    for (let i = 0; i < triangleCount; i++) {
        const i0 = triangleIndices[i * 3];
        const i1 = triangleIndices[i * 3 + 1];
        const i2 = triangleIndices[i * 3 + 2];

        // 添加三条边（每条边需要 2 个索引）
        wireframeIndices.push(i0, i1); // 边 0-1
        wireframeIndices.push(i1, i2); // 边 1-2
        wireframeIndices.push(i2, i0); // 边 2-0
    }

    return new Uint16Array(wireframeIndices);
}

/**
 * 从三角形索引生成点云索引（每个顶点一个索引）
 */
export function generatePointIndices(triangleIndices: Uint16Array): Uint16Array {
    // 使用 Set 去重，获取所有唯一的顶点索引
    const uniqueIndices = new Set<number>();
    for (let i = 0; i < triangleIndices.length; i++) {
        uniqueIndices.add(triangleIndices[i]);
    }
    return new Uint16Array(Array.from(uniqueIndices).sort((a, b) => a - b));
}
