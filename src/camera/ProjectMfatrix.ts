import {mat4, vec3} from "gl-matrix-esm";
import {Tiny} from "../context/co/tiny.ts";
import {IUniformInfo, Program} from "../context/program.ts";
import {Uniform} from "../material/uniform";

export class ProjectMatrix extends Uniform {

    constructor() {
        super()
        // 设定透视矩阵

    }
    name="uProjectionMatrix"
    tie(gl:WebGLRenderingContext) {
        const fov = (45 * Math.PI) / 180; // 视角为 45 度
        const aspect = gl.canvas.width / gl.canvas.height;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();
        mat4.perspectiveNO(projectionMatrix, fov, aspect, zNear, zFar);
        this.matrix = projectionMatrix
        this.location = this.findUniformInfo().location
        this.update()
    }

}
