import { Uniform } from "./Uniform";

/**
 * 材质光泽度 Uniform（用于镜面反射）
 */
export class MaterialShininess extends Uniform {
    name = "uMaterialShininess"
    shininess: number = 32.0 // 默认光泽度

    constructor(shininess: number = 32.0) {
        super()
        this.shininess = shininess
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniform1f(this.location, this.shininess)
    }
}
