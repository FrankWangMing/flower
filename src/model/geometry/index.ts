import { get } from "lodash";
import {VertexBufferObject, VertexBufferObjectSet} from "./vertexBufferObject";
import { BasicDraw, DrawElements, DrawerSet } from "../../context/draw";
import {IndexBufferObject} from "./indexBufferObject.ts";
type BufferOptions = {
    vertices:number[]
    indices:number[]
}
export class Buffer {
    vertices:Float32Array
    indices:Uint16Array
    constructor(json:BufferOptions) {
        if(get(json,'vertices',[])){
            this.vertices = new Float32Array(json.vertices)
        }
        if(get(json,'indices',[])){
            this.indices = new Uint16Array(json.indices)
        }
    }

}

export class Geometry{
    vbos:VertexBufferObjectSet = new VertexBufferObjectSet()
    drawers:DrawerSet = new DrawerSet()
    constructor(buffer: Buffer) {
        if(buffer.vertices){
            this.add(new VertexBufferObject("aVertexPosition",buffer.vertices))
        }
        if(buffer.indices){
            const ibo = new IndexBufferObject(buffer.indices)
            this.add(ibo)
            // 根据索引数量创建 DrawElements
            this.drawers.add(
                new DrawElements(ibo.data.length)
            )
        }
    }
    add(vbo:VertexBufferObject|IndexBufferObject){
        this.vbos.add(vbo)
    }
}
