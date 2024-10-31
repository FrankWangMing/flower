import { FragmentShader, VertexShader } from "./FragmentShader"
import {Tiny} from "./co/tiny";
import {ShaderSet} from "../shader";


export interface IAttributeInfo {
    location: number;
  }

  export interface IUniformInfo {
    location: WebGLUniformLocation;
    type: number;
  }

interface IAttributeLocations {
    [index: string]: IAttributeInfo;
  }

  interface IUniformLocations {
    [index: string]: IUniformInfo;
  }

export class Program extends Tiny {
    static current:Program
    VertexShader:VertexShader
    FragmentShader:FragmentShader
    id!:WebGLProgram
    gl:WebGLRenderingContext
    m_attributeLocations = {} as IAttributeLocations;
    m_uniformLocations = {} as IUniformLocations;
    constructor(gl:WebGLRenderingContext,shader:ShaderSet) {
        super()
        this.gl = gl
        for (let i of shader) {
            i.tie(gl)
            if(i instanceof VertexShader){
                this.VertexShader = i
            }
            if(i instanceof FragmentShader){
                this.FragmentShader = i
            }
        }



    }

    create(gl:WebGLRenderingContext) {
        this.id = gl.createProgram() as WebGLProgram
    }

    tie(gl:WebGLRenderingContext) {
        this.create(gl)
        this.attach()
        this.link()
        this.use()
        const length = gl.getProgramParameter(this.id, gl.ACTIVE_ATTRIBUTES);

        for (let index = 0; index < length; index++) {
          const activeInfo = gl.getActiveAttrib(this.id, index);
          const name = activeInfo.name;
          console.log("name",name)
          const location = gl.getAttribLocation(this.id, name);
          console.log("location",location)
          this.m_attributeLocations[name] = {
            location: location,
          };
        }
    }

    attach(){
        this.gl.attachShader(this.id,this.VertexShader.shader)
        this.gl.attachShader(this.id,this.FragmentShader.shader)
    }

    link(){
        this.gl.linkProgram(this.id);
    }

    use(){
        this.gl.useProgram(this.id);
        Program.current = this;
    }
}
