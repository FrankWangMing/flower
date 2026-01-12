import { vec3, Vec3Like } from "gl-matrix-esm";
import { Uniform } from "./Uniform";

/**
 * 雾效颜色 Uniform
 */
export class FogColorUniform extends Uniform {
    name = "uFogColor"
    color: Vec3Like = vec3.fromValues(0.5, 0.5, 0.5) // 默认灰色雾

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
        gl.uniform3fv(this.location, this.color)
    }
}

/**
 * 雾效密度 Uniform
 */
export class FogDensityUniform extends Uniform {
    name = "uFogDensity"
    density: number = 0.02

    constructor(density: number = 0.02) {
        super()
        this.density = density
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.density)
    }
}

/**
 * 雾效起始距离 Uniform
 */
export class FogStartUniform extends Uniform {
    name = "uFogStart"
    start: number = 0.0

    constructor(start: number = 0.0) {
        super()
        this.start = start
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.start)
    }
}

/**
 * 雾效结束距离 Uniform
 */
export class FogEndUniform extends Uniform {
    name = "uFogEnd"
    end: number = 50.0

    constructor(end: number = 50.0) {
        super()
        this.end = end
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.end)
    }
}
