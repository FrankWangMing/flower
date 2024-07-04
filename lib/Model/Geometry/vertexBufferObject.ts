import {Tiny} from "../../context/co/tiny";

export type VertexType ="aVertexPosition"
export class VertexBufferObject  extends Tiny {
    name:VertexType = 'aVertexPosition'
    id:WebGLBuffer
    data:Float32Array
    constructor(name:VertexType,data:Float32Array) {
        super()
        this.name = name
        this.data = data
    }
    create(gl:WebGLRenderingContext){
        this.id = gl.createBuffer()
    }
    bind(gl:WebGLRenderingContext){
        switch (this.name){
            case "aVertexPosition":
            gl.bindBuffer(gl.ARRAY_BUFFER,this.id)
        }
    }
    tie(gl: WebGLRenderingContext) {
        this.create(gl)
        this.bind(gl)
        this.bufferData(gl)
    }
    bufferData(gl:WebGLRenderingContext){
        gl.bufferData(gl.ARRAY_BUFFER,this.data,gl.STATIC_DRAW)
    }

    doLoad(gl:WebGLRenderingContext,location){
        gl.enableVertexAttribArray(location);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
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


export class VertexBufferObjectSet extends Set<VertexBufferObject>{
    constructor() {
        super();
    }



}
