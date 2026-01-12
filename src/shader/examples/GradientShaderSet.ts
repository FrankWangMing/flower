import { ShaderSet } from "../index";
import { VertexShader, FragmentShader } from "../../context/FragmentShader";

/**
 * 渐变 Shader
 * 基于 Y 坐标的垂直渐变
 *
 * 需要的 Uniform:
 * - uColorTop (vec3): 顶部颜色
 * - uColorBottom (vec3): 底部颜色
 * - uMinHeight (float): 最小高度
 * - uMaxHeight (float): 最大高度
 */
export class GradientShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(
            `#version 300 es
            in vec3 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            out float vHeight;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                vHeight = worldPos.y;
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
            }
            `
        )

        this.fragmentShader = new FragmentShader(
            `#version 300 es
            precision highp float;
            in float vHeight;
            out vec4 outColor;

            uniform vec3 uColorTop;
            uniform vec3 uColorBottom;
            uniform float uMinHeight;
            uniform float uMaxHeight;

            void main() {
                // 归一化高度到 0-1
                float t = (vHeight - uMinHeight) / (uMaxHeight - uMinHeight);
                t = clamp(t, 0.0, 1.0);

                // 混合颜色
                vec3 color = mix(uColorBottom, uColorTop, t);
                outColor = vec4(color, 1.0);
            }
            `
        )

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
