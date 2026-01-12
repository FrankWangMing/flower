import { Uniform } from "./Uniform";

/**
 * 环境贴图（天空盒）Uniform
 */
export class EnvironmentMapUniform extends Uniform {
    name = "uEnvironmentMap"
    texture: WebGLTexture | null = null
    textureUnit: number = 2
    strength: number = 0.5

    constructor(texture?: WebGLTexture, textureUnit: number = 2, strength: number = 0.5) {
        super()
        if (texture) {
            this.texture = texture
        }
        this.textureUnit = textureUnit
        this.strength = strength
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo || !this.texture) return

        this.location = uniformInfo.location

        // 激活纹理单元（立方体贴图）
        gl.activeTexture(gl.TEXTURE0 + this.textureUnit)
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture)

        // 设置 uniform 为纹理单元索引
        gl.uniform1i(this.location, this.textureUnit)
    }
}

/**
 * 环境贴图强度 Uniform
 */
export class EnvironmentMapStrengthUniform extends Uniform {
    name = "uEnvironmentMapStrength"
    strength: number = 0.5

    constructor(strength: number = 0.5) {
        super()
        this.strength = strength
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.strength)
    }
}
