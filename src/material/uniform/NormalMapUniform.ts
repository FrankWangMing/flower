import { Uniform } from "./Uniform";

/**
 * 法线贴图 Uniform
 */
export class NormalMapUniform extends Uniform {
    name = "uNormalMap"
    texture: WebGLTexture | null = null
    textureUnit: number = 1
    strength: number = 1.0

    constructor(texture?: WebGLTexture, textureUnit: number = 1, strength: number = 1.0) {
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

        // 激活纹理单元
        gl.activeTexture(gl.TEXTURE0 + this.textureUnit)
        gl.bindTexture(gl.TEXTURE_2D, this.texture)

        // 设置 uniform 为纹理单元索引
        gl.uniform1i(this.location, this.textureUnit)
    }
}

/**
 * 法线贴图强度 Uniform
 */
export class NormalMapStrengthUniform extends Uniform {
    name = "uNormalMapStrength"
    strength: number = 1.0

    constructor(strength: number = 1.0) {
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
