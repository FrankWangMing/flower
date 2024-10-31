import { IAttributeInfo, Program } from "../../context/program";
import {Tiny} from "../../context/co/tiny";

export type VertexType ="aVertexPosition" | "aIndex"
export class VertexBufferObject  extends Tiny {
    name:VertexType = 'aVertexPosition'
    id:WebGLBuffer
    data:Float32Array|Uint32Array
    constructor(name:VertexType,data:Float32Array|Uint32Array) {
        super()
        this.name = name
        this.data = data
    }
    create(gl:WebGLRenderingContext){
        this.id = gl.createBuffer()
    }

    protected findAttributeInfo(): IAttributeInfo {
        const program = Program.current;
        const locations = program.m_attributeLocations;
        return locations[this.name];
    }

    bind(gl:WebGLRenderingContext){
        switch (this.name){
            case "aVertexPosition":
                gl.bindBuffer(gl.ARRAY_BUFFER,this.id)
                break;
            case "aIndex":
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.id)
                break;
        }

        if(this.name == 'aVertexPosition'){
            const info = this.findAttributeInfo();
            console.log(info)
            const loc = info.location;
            console.log(info)
            gl.enableVertexAttribArray(loc);
        }
    }




    tie(gl: WebGLRenderingContext) {
        this.create(gl)
        this.bind(gl)
        this.bufferData(gl)
    }


    bufferData(gl:WebGLRenderingContext){
        switch (this.name){
            case "aVertexPosition":
                gl.bufferData(gl.ARRAY_BUFFER,this.data,gl.STATIC_DRAW)
                break;
            case "aIndex":
                gl.bufferData(
                    gl.ELEMENT_ARRAY_BUFFER,
                    this.data,
                    gl.STATIC_DRAW
                  );
                break;
        }

    }

    doLoad(gl:WebGLRenderingContext,location:GLint){
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
