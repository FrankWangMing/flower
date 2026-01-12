import { get } from "lodash";
import { VertexBufferObject, VertexBufferObjectSet } from "./vertexBufferObject";
import { BasicDraw, DrawElements, DrawerSet } from "../../context/draw";
import { IndexBufferObject } from "./indexBufferObject.ts";
import { RenderMode } from "../../material/RenderMode";
import { generateWireframeIndices, generatePointIndices } from "./wireframeUtils";

type BufferOptions = {
    vertices: number[]
    indices: number[]
}
export class Buffer {
    vertices: Float32Array
    indices: Uint16Array
    constructor(json: BufferOptions) {
        if (get(json, 'vertices', [])) {
            this.vertices = new Float32Array(json.vertices)
        }
        if (get(json, 'indices', [])) {
            this.indices = new Uint16Array(json.indices)
        }
    }

}

export class Geometry {
    vbos: VertexBufferObjectSet = new VertexBufferObjectSet()
    drawers: DrawerSet = new DrawerSet()
    private originalIndices: Uint16Array | null = null
    private indexBufferObject: IndexBufferObject | null = null

    constructor(buffer: Buffer) {
        if (buffer.vertices) {
            this.add(new VertexBufferObject("aVertexPosition", buffer.vertices))
        }
        if (buffer.indices) {
            this.originalIndices = buffer.indices
            this.indexBufferObject = new IndexBufferObject(buffer.indices)
            this.add(this.indexBufferObject)
            // 默认使用实体模式
            this.updateDrawMode(RenderMode.SOLID)
        }
    }
    add(vbo: VertexBufferObject | IndexBufferObject) {
        this.vbos.add(vbo)
    }

    /**
     * 根据渲染模式更新绘制方式
     */
    updateDrawMode(renderMode: RenderMode) {
        if (!this.originalIndices || !this.indexBufferObject) {
            return
        }

        // 清空现有的 drawers
        this.drawers.clear()

        const gl = WebGLRenderingContext.prototype

        switch (renderMode) {
            case RenderMode.SOLID:
                // 实体模式：使用三角形，恢复原始索引
                this.indexBufferObject.data = this.originalIndices
                this.drawers.add(
                    new DrawElements(this.originalIndices.length, gl.TRIANGLES)
                )
                break

            case RenderMode.WIREFRAME:
                // 线框模式：生成线框索引并使用 LINES
                const wireframeIndices = generateWireframeIndices(this.originalIndices)
                // 更新索引缓冲区
                this.indexBufferObject.data = wireframeIndices
                this.drawers.add(
                    new DrawElements(wireframeIndices.length, gl.LINES)
                )
                break

            case RenderMode.LINES:
                // 线条模式：直接使用 LINES（假设索引已经是线条格式）
                // 恢复原始索引（如果之前被修改过）
                this.indexBufferObject.data = this.originalIndices
                this.drawers.add(
                    new DrawElements(this.originalIndices.length, gl.LINES)
                )
                break

            case RenderMode.POINTS:
                // 点云模式：生成点索引并使用 POINTS
                const pointIndices = generatePointIndices(this.originalIndices)
                // 更新索引缓冲区
                this.indexBufferObject.data = pointIndices
                this.drawers.add(
                    new DrawElements(pointIndices.length, gl.POINTS)
                )
                break
        }
    }
}
