import { get } from "lodash";
import {VertexBufferObject, VertexBufferObjectSet} from "./vertexBufferObject";
import { BasicDraw, DrawElements, DrawerSet } from "../../context/draw";
type BufferOptions = {
    vertices:number[]
    indices:number[]
}
export class Buffer {
    vertices:Float32Array
    indices:Uint32Array
    constructor(json:BufferOptions) {
        if(get(json,'vertices',[])){
            this.vertices = new Float32Array(json.vertices)
        }
        if(get(json,'indices',[])){
            this.indices = new Uint32Array(json.indices)
        }
    }

}

export class Geometry{
    vbos:VertexBufferObjectSet = new VertexBufferObjectSet()
    drawers:DrawerSet = new DrawerSet()
    constructor(buffer: Buffer) {
        console.log(buffer.vertices)
        if(buffer.vertices){
            this.add(new VertexBufferObject("aVertexPosition",buffer.vertices))
        }
        if(buffer.indices){
            this.add(new VertexBufferObject("aIndex",buffer.indices))
        }
        this.drawers.add(
            new DrawElements()
        )
    }
    add(vbo:VertexBufferObject){
        this.vbos.add(vbo)
    }
}
