import { IAttributeInfo, Program } from "../../context/program";
import { Tiny } from "../../context/co/tiny";
import { IndexBufferObject } from "./indexBufferObject.ts";
import { Attribute } from "../../material/attribute";

export type VertexType = "aVertexPosition" | "aIndex"
export class VertexBufferObject extends Tiny {
    name: VertexType = 'aVertexPosition'
    id: WebGLBuffer
    data: Float32Array | Uint32Array
    attribute: Attribute
    constructor(name: VertexType, data: Float32Array | Uint32Array) {
        super()
        this.name = name
        this.data = data
    }
    create(gl: WebGL2RenderingContext) {
        this.id = gl.createBuffer()
    }

    protected findAttributeInfo(): IAttributeInfo {
        const program = Program.current;
        const locations = program.m_attributeLocations;
        return locations[this.name];
    }

    bind(gl: WebGL2RenderingContext) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id)
        const info = this.findAttributeInfo();
        const loc = info.location;
        this.doLoad(gl, loc)
    }
    // 整理流程
    tie(gl: WebGL2RenderingContext) {
        this.create(gl)
        this.bind(gl)
        this.bufferData(gl)
    }


    bufferData(gl: WebGL2RenderingContext) {
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW)
    }

    doLoad(gl: WebGL2RenderingContext, location: GLint) {
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


export class VertexBufferObjectSet extends Set<VertexBufferObject | IndexBufferObject> {
    constructor() {
        super();
    }



}
