import {BasicShader, FragmentShader, VertexShader} from "../context/FragmentShader";

export class ShaderSet extends Set<BasicShader>{
    vertexShader:VertexShader
    fragmentShader:FragmentShader
    constructor(){
        super()
        this.vertexShader = new VertexShader(
            `#version 300 es
            in vec4 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;
            void main() {
                gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;
            }
            `
        )
        this.fragmentShader = new FragmentShader(
            `#version 300 es
            precision highp float;
            out vec4 outColor;
            void main() {
                outColor = vec4(1.0, 0.0, 0.0, 1.0);
            }
            `
        )
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }




}
