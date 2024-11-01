import {mat4, vec3} from "gl-matrix-esm";
import {IUniformInfo, Program} from "../context/program.ts";
import {Uniform} from "../material/uniform";

export class ModelMatrix extends Uniform {

    constructor() {
        super()
        const modelViewMatrix = this.matrix;
        mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -5.0]);
        this.matrix = modelViewMatrix
    }
    name="uModelViewMatrix"

    tie(gl:WebGLRenderingContext) {
        // 设定模型视图矩阵
        const Uniform = this.findUniformInfo()
        this.location = Uniform.location
        this.update()
    }

}
