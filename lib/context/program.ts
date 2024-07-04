import { FragmentShader, VertexShader } from "./FragmentShader"
import {Tiny} from "./co/tiny";
import {ShaderSet} from "../shader";
import {forEach} from "lodash-es";

export class Program extends Tiny {
    VertexShader:VertexShader
    FragmentShader:FragmentShader
    id!:WebGLProgram
    gl:WebGLRenderingContext
    constructor(gl:WebGLRenderingContext,shader:ShaderSet) {
        super()
        this.gl = gl
        console.log(shader)
        forEach(shader,(i)=>{
            console.log(i)
        })
        this.VertexShader = new VertexShader(gl)
        this.FragmentShader =   new FragmentShader(gl)
    }

    create(gl:WebGLRenderingContext) {
        this.id = gl.createProgram() as WebGLProgram
    }

    tie(gl:WebGLRenderingContext) {
        this.create(gl)
        gl.useProgram(this.id)
    }

    attachF(){
        this.gl.attachShader(this.id,this.VertexShader.resource)
        this.gl.attachShader(this.id,this.FragmentShader.resource)
    }

    link(){
        this.gl.linkProgram(this.id);
    }
}
