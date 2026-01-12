import { mat3, Mat3Like, mat4, Mat4Like } from "gl-matrix-esm";
import { Uniform } from "./Uniform";

/**
 * 法线矩阵 Uniform
 * 用于将法线从模型空间转换到世界空间
 */
export class NormalMatrix extends Uniform {
    name = "uNormalMatrix"
    private normalMatrix: Mat3Like = mat3.create()

    constructor(private modelMatrix: { matrix: Mat4Like }) {
        super()
    }

    update() {
        // 从模型矩阵提取 3x3 部分并计算逆矩阵的转置
        const m = this.modelMatrix.matrix
        const normalMat = mat3.fromMat4(this.normalMatrix, m)
        mat3.invert(normalMat, normalMat)
        mat3.transpose(normalMat, normalMat)
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        this.update()
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniformMatrix3fv(this.location, false, this.normalMatrix)
    }
}
