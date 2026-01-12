import { Uniform } from "./Uniform";

/**
 * 点大小 Uniform（用于 POINTS 渲染模式）
 */
export class PointSize extends Uniform {
    name = "uPointSize"
    size: number = 0.0 // 0.0 表示不使用点大小（默认）

    constructor(size: number = 0.0) {
        super()
        this.size = size
    }

    tie(gl: WebGLRenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniform1f(this.location, this.size)
    }
}
