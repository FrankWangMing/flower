import {BasicShader, FragmentShader, VertexShader} from "../context/FragmentShader";

export class ShaderSet extends Set<BasicShader>{
    vertexShader:VertexShader
    fragmentShader:FragmentShader
    constructor(){
        super()
        this.vertexShader = new VertexShader(
            `
            attribute vec4 aVertexPosition;
            void main(void) {
                gl_Position = aVertexPosition;
            }
            `
        )
        this.fragmentShader = new FragmentShader(
            `
            void main(void) {
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            }
            `
        )
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }




}
