import { IAttributeInfo, Program } from "../../context/program";
import { Tiny } from "../../context/co/tiny";

export type VertexType = "aVertexPosition" | "aIndex"
export class IndexBufferObject extends Tiny {
    name: VertexType = 'aVertexPosition'
    id: WebGLBuffer
    data: Uint16Array
    constructor(data: Uint16Array) {
        super()
        this.data = data
    }
    create(gl: WebGL2RenderingContext) {
        this.id = gl.createBuffer()
    }

    bind(gl: WebGL2RenderingContext) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.id)

    }

    tie(gl: WebGL2RenderingContext) {
        this.create(gl)
        this.bind(gl)
        this.bufferData(gl)
    }


    bufferData(gl: WebGL2RenderingContext) {
        gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER,
            this.data,
            gl.STATIC_DRAW
        );
    }

    doLoad(gl: WebGL2RenderingContext, location: GLint) {
        gl.enableVertexAttribArray(location);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.id);
        gl.vertexAttribPointer(
            location,
            3,
            gl.FLOAT,
            false,
            0,
            0,
        );
    }


}

