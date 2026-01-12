import { ShaderSet } from "../index";
import { VertexShader, FragmentShader } from "../../context/FragmentShader";

/**
 * 简单单色 Shader
 * 只显示单一颜色，不计算光照
 *
 * 需要的 Uniform:
 * - uColor (vec3): 颜色值
 */
export class SolidColorShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(
            `#version 300 es
            in vec3 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
            }
            `
        )

        this.fragmentShader = new FragmentShader(
            `#version 300 es
            precision highp float;
            out vec4 outColor;

            uniform vec3 uColor;

            void main() {
                outColor = vec4(uColor, 1.0);
            }
            `
        )

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
