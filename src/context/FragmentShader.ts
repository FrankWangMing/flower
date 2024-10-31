import {Tiny} from "./co/tiny";

export enum shaderType {
    vertex,fragment
}

export class BasicShader extends Tiny{
    source:string
    shader:WebGLShader
    type:shaderType;
    constructor(source:string,type:shaderType) {
        super()
        this.type = type
        this.source = source
    }
    tie(gl: WebGLRenderingContext): void {
        this.create(gl)
        this.shaderSource(gl,this.source)
        this.compile(gl)
    }
    create(gl: WebGLRenderingContext): void {
        this.shader =  gl.createShader({
            [shaderType.vertex]:gl.VERTEX_SHADER,
            [shaderType.fragment]:gl.FRAGMENT_SHADER
        }[this.type]) as WebGLShader
    }
    shaderSource(gl:WebGLRenderingContext,fsSource:string){
        gl.shaderSource(this.shader, fsSource);
    }
    compile(gl:WebGLRenderingContext,){
        gl.compileShader(this.shader);
    }
}

export class FragmentShader extends BasicShader{
    constructor(source:string) {
        super(source,shaderType.fragment)
    }
}

export class VertexShader extends BasicShader{
    constructor(source:string) {
        super(source,shaderType.vertex)
    }
}



