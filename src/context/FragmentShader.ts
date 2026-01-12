import { Tiny } from "./co/tiny";

export enum shaderType {
    vertex, fragment
}

export class BasicShader extends Tiny {
    source: string
    shader: WebGLShader
    type: shaderType;
    constructor(source: string, type: shaderType) {
        super()
        this.type = type
        this.source = source
    }
    tie(gl: WebGL2RenderingContext): void {
        this.create(gl)
        this.shaderSource(gl, this.source)
        this.compile(gl)
        if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(this.shader));
        }
    }
    create(gl: WebGL2RenderingContext): void {
        this.shader = gl.createShader({
            [shaderType.vertex]: gl.VERTEX_SHADER,
            [shaderType.fragment]: gl.FRAGMENT_SHADER
        }[this.type]) as WebGLShader
    }
    shaderSource(gl: WebGL2RenderingContext, fsSource: string) {
        gl.shaderSource(this.shader, fsSource);
    }
    compile(gl: WebGL2RenderingContext,) {
        gl.compileShader(this.shader);
    }
}

export class FragmentShader extends BasicShader {
    constructor(source: string) {
        super(source, shaderType.fragment)
    }
}

export class VertexShader extends BasicShader {
    constructor(source: string) {
        super(source, shaderType.vertex)
    }
}



