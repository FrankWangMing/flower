import { Uniform } from "./Uniform";
import { Program } from "../../context/program";

/**
 * 纹理 Uniform
 * 支持 2D 纹理采样
 */
export class TextureUniform extends Uniform {
    name = "uTexture"
    texture: WebGLTexture | null = null
    textureUnit: number = 0

    constructor(texture?: WebGLTexture, textureUnit: number = 0) {
        super()
        if (texture) {
            this.texture = texture
        }
        this.textureUnit = textureUnit
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
 * 纹理混合系数 Uniform
 */
export class TextureMixUniform extends Uniform {
    name = "uTextureMix"
    mix: number = 1.0 // 0.0 = 只用材质颜色, 1.0 = 只用纹理

    constructor(mix: number = 1.0) {
        super()
        this.mix = mix
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.mix)
    }
}
