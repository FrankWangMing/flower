import { vec3, Vec3Like } from "gl-matrix-esm";
import { Uniform } from "./Uniform";

/**
 * 光照颜色 Uniform
 */
export class LightColor extends Uniform {
    name = "uLightColor"
    color: Vec3Like = vec3.fromValues(1.0, 1.0, 1.0) // 默认白色光

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
