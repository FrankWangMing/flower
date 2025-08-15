import { IAttributeInfo, Program } from "../../context/program";
import {Tiny} from "../../context/co/tiny";

export type VertexType ="aVertexPosition" | "aIndex"
export class IndexBufferObject  extends Tiny {
    name:VertexType = 'aVertexPosition'
    id:WebGLBuffer
    data:Uint16Array
    constructor(data:Uint16Array) {
        super()
        this.data = data
    }
    create(gl:WebGLRenderingContext){
        this.id = gl.createBuffer()
    }

    bind(gl:WebGLRenderingContext){
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.id)

    }

    tie(gl: WebGLRenderingContext) {
        this.create(gl)
        this.bind(gl)
        this.bufferData(gl)
    }


    bufferData(gl:WebGLRenderingContext){
        gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER,
            this.data,
            gl.STATIC_DRAW
        );
    }

    doLoad(gl:WebGLRenderingContext,location:GLint){
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

