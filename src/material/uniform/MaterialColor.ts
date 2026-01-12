import { vec3, Vec3Like } from "gl-matrix-esm";
import { Uniform } from "./Uniform";

/**
 * 材质颜色 Uniform
 */
export class MaterialColor extends Uniform {
    name = "uMaterialColor"
    color: Vec3Like = vec3.fromValues(0.8, 0.8, 0.8) // 默认浅灰色

    constructor(color?: Vec3Like) {
        super()
        if (color) {
            this.color = vec3.clone(color)
        }
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniform3fv(this.location, this.color)
    }
}
