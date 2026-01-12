import { BasicShader, FragmentShader, VertexShader } from "../context/FragmentShader";

export class ShaderSet extends Set<BasicShader> {
    vertexShader: VertexShader
    fragmentShader: FragmentShader
    constructor() {
        super()
        this.vertexShader = new VertexShader(
            `#version 300 es
            // 输入属性
            in vec3 aVertexPosition;

            // 可选属性（如果几何体提供）
            in vec3 aNormal;
            in vec3 aColor;
            in vec2 aTexCoord;

            // 变换矩阵
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            // 法线矩阵（用于将法线从模型空间转换到世界空间）
            uniform mat3 uNormalMatrix;

            // 点大小（用于 POINTS 模式）
            uniform float uPointSize;

            // 输出到 Fragment Shader
            out vec3 vWorldPosition;
            out vec3 vNormal;
            out vec3 vColor;
            out vec2 vTexCoord;

            void main() {
                // 计算世界空间位置
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                vWorldPosition = worldPos.xyz;

                // 计算裁剪空间位置
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;

                // 设置点大小（用于 POINTS 模式）
                if (uPointSize > 0.0) {
                    gl_PointSize = uPointSize;
                }

                // 传递法线（如果存在）
                // 注意：如果几何体没有提供法线，aNormal 可能是未定义的
                // 使用一个简单的检查：如果法线长度接近 0 或非常大，使用默认值
                float normalLen = length(aNormal);
                if (normalLen > 0.01 && normalLen < 10.0) {
                    vNormal = normalize(uNormalMatrix * aNormal);
                } else {
                    // 默认法线向上（Y轴正方向），这样更容易看到
                    vNormal = vec3(0.0, 1.0, 0.0);
                }

                // 传递颜色（如果存在）
                if (length(aColor) > 0.0) {
                    vColor = aColor;
                } else {
                    vColor = vec3(1.0, 1.0, 1.0); // 默认白色
                }

                // 传递纹理坐标（如果存在）
                vTexCoord = aTexCoord;
            }
            `
        )
        this.fragmentShader = new FragmentShader(
            `#version 300 es
            precision highp float;

            // 从 Vertex Shader 输入
            in vec3 vWorldPosition;
            in vec3 vNormal;
            in vec3 vColor;
            in vec2 vTexCoord;

            // 材质属性
            uniform vec3 uMaterialColor;
            uniform float uMaterialShininess;

            // 光照属性
            uniform vec3 uLightDirection;
            uniform vec3 uLightColor;
            uniform vec3 uAmbientColor;
            uniform vec3 uCameraPosition;

            // 输出颜色
            out vec4 outColor;

            void main() {
                // 使用材质颜色或顶点颜色
                // 如果材质颜色的总和接近0，则使用顶点颜色；否则使用材质颜色
                float materialSum = uMaterialColor.r + uMaterialColor.g + uMaterialColor.b;
                vec3 baseColor = (materialSum < 0.001) ? vColor : uMaterialColor;

                // 如果 baseColor 也是黑色，使用默认颜色
                if (baseColor.r + baseColor.g + baseColor.b < 0.001) {
                    baseColor = vec3(0.8, 0.8, 0.8); // 默认浅灰色
                }

                // 归一化法线（确保法线有效）
                vec3 normal = normalize(vNormal);

                // 如果法线无效（长度接近0），使用默认向上法线
                if (length(normal) < 0.1) {
                    normal = vec3(0.0, 1.0, 0.0);
                }

                // 计算光照方向（归一化）
                vec3 lightDir = normalize(-uLightDirection);

                // 环境光（确保基础可见度，至少 0.3 的亮度）
                vec3 ambient = max(uAmbientColor, vec3(0.3, 0.3, 0.3)) * baseColor;

                // 漫反射（Lambert）
                float diff = max(dot(normal, lightDir), 0.0);
                vec3 diffuse = diff * uLightColor * baseColor;

                // 镜面反射（Blinn-Phong）
                vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
                vec3 halfDir = normalize(lightDir + viewDir);
                float spec = pow(max(dot(normal, halfDir), 0.0), uMaterialShininess);
                vec3 specular = spec * uLightColor * 0.3; // 降低镜面反射强度

                // 最终颜色 = 环境光 + 漫反射 + 镜面反射
                vec3 finalColor = ambient + diffuse + specular;

                // 确保最终颜色至少有一定亮度，避免全黑
                finalColor = max(finalColor, baseColor * 0.3);

                outColor = vec4(finalColor, 1.0);
            }
            `
        )
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }




}
