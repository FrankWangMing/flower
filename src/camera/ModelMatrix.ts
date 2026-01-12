import { mat4, vec3 } from "gl-matrix-esm";
import { Uniform } from "../material/uniform";

export class ModelMatrix extends Uniform {

    constructor() {
        super()
        const modelViewMatrix = this.matrix;
        mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, 0.0]);
        this.matrix = modelViewMatrix
    }
    name = "uModelMatrix"

    tie(gl: WebGL2RenderingContext) {
        // 设定模型视图矩阵
        const Uniform = this.findUniformInfo()
        this.location = Uniform.location
        this.update()
    }

}
