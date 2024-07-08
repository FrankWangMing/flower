import {Tiny} from "./co/tiny";

export class BasicShader  extends Tiny {
    resource:WebGLShader
    constructor(gl:WebGLRenderingContext,type:number) {
        super()
        this.resource =  gl.createShader(type) as WebGLShader
    }
    onload(gl:WebGLRenderingContext,fsSource:string){
        gl.shaderSource(this.resource, fsSource);
    }
    compile(gl:WebGLRenderingContext,){
        gl.compileShader(this.resource);
    }
    source:any
}

export class FragmentShader extends BasicShader{
    constructor(gl:WebGLRenderingContext) {
        super(gl,gl.FRAGMENT_SHADER)
    }
}

export class VertexShader  extends BasicShader{
    constructor(gl:WebGLRenderingContext) {
        super(gl,gl.VERTEX_SHADER)
    }
}



