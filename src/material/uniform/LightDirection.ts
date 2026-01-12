import { vec3, Vec3Like } from "gl-matrix-esm";
import { Uniform } from "./Uniform";

/**
 * 光照方向 Uniform
 */
export class LightDirection extends Uniform {
    name = "uLightDirection"
    direction: Vec3Like = vec3.fromValues(0.5, 1.0, 0.5) // 默认光照方向

    constructor(direction?: Vec3Like) {
        super()
        if (direction) {
            this.direction = vec3.clone(direction)
        }
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniform3fv(this.location, this.direction)
    }
}
