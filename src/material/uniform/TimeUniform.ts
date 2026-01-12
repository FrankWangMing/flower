import { Uniform } from "./Uniform";

/**
 * 时间 Uniform（用于动画效果）
 */
export class TimeUniform extends Uniform {
    name = "uTime"
    time: number = 0.0

    constructor(time: number = 0.0) {
        super()
        this.time = time
    }

    updateTime(time: number) {
        this.time = time
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.time)
    }
}

/**
 * 动画速度 Uniform
 */
export class AnimationSpeedUniform extends Uniform {
    name = "uAnimationSpeed"
    speed: number = 1.0

    constructor(speed: number = 1.0) {
        super()
        this.speed = speed
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.speed)
    }
}
