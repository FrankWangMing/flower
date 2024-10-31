import {Tiny} from "./co/tiny.ts";
import {IAttributeInfo, IUniformInfo, Program} from "./program.ts";
import {mat4} from "gl-matrix-esm";

class aVertexPosition extends Tiny{
    constructor() {
        super()
    }
    tie(gl: WebGLRenderingContext) {
        const positionAttributeLocation = gl.getAttribLocation(
            Program.current,
            "aVertexPosition"
        );
        gl.enableVertexAttribArray(positionAttributeLocation);
    }
}


export class uModelViewMatrix extends Tiny{
    constructor() {
        super()
    }

    protected findUniformInfo(name): IUniformInfo {
            const program = Program.current;
            const locations = program.m_uniformLocations;
            return locations[name];
    }
    tie(gl:WebGLRenderingContext) {
        // 设定模型视图矩阵
        const modelViewMatrix = mat4.create();
        mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -5.0]);

        const projectionMatrixUniform = this.findUniformInfo("uModelViewMatrix")
        gl.uniformMatrix4fv(projectionMatrixUniform.location, false, modelViewMatrix);
    }
}

export class uProjectionMatrix extends Tiny{
    gl:any
    constructor(gl) {
        super()
        this.gl = gl
    }
    protected findUniformInfo(name): IUniformInfo {
        const program = Program.current;
        const locations = program.m_uniformLocations;
        return locations[name];
    }
    tie(gl:WebGLRenderingContext) {
        // 设定透视矩阵
        const fov = (45 * Math.PI) / 180; // 视角为 45 度
        const aspect = gl.canvas.width / gl.canvas.height;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();
        mat4.perspectiveNO(projectionMatrix, fov, aspect, zNear, zFar);

        const projectionMatrixUniform = this.findUniformInfo("uProjectionMatrix")
        gl.uniformMatrix4fv(projectionMatrixUniform.location, false, projectionMatrix);
    }
}

