import {BasicShader, FragmentShader, VertexShader} from "../context/FragmentShader";

export class ShaderSet extends Set<BasicShader>{
    vertexShader:VertexShader
    fragmentShader:FragmentShader
    constructor(){
        super()
        this.vertexShader = new VertexShader(
            `
            attribute vec4 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uProjectionMatrix;
            uniform mat4 uViewMatrix;
            void main() {
                gl_Position = uModelMatrix * uProjectionMatrix * uViewMatrix * aVertexPosition;
            }
            `
        )
        this.fragmentShader = new FragmentShader(
            `
                void main() {
                    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
                }
            `
        )
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }




}
