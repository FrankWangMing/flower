import {VertexBufferObject, VertexBufferObjectSet} from "./vertexBufferObject";

export class Buffer {
    vertex:Float32Array
    constructor(
        {
            vertex
        }:{
        vertex:number[]
    }) {
        this.vertex = new Float32Array(vertex)
    }

}

export class Geometry{
    vbos:VertexBufferObjectSet = new VertexBufferObjectSet()
    constructor(buffer: Buffer) {
        console.log(buffer.vertex)
        if(buffer.vertex){
            this.add(new VertexBufferObject("aVertexPosition",buffer.vertex))
        }
        // this.vbos.add()
    }
    add(vbo:VertexBufferObject){
        this.vbos.add(vbo)
    }
}
