import { vec3, Vec3Like } from "gl-matrix-esm";
import { Uniform } from "./Uniform";

/**
 * 环境光颜色 Uniform
 */
export class AmbientColor extends Uniform {
    name = "uAmbientColor"
    color: Vec3Like = vec3.fromValues(0.4, 0.4, 0.4) // 默认环境光（提高亮度）

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
