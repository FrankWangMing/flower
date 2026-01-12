import { VertexShader, FragmentShader } from "../context/FragmentShader";
import { ShaderFeature, ShaderFeatureConfig } from "./ShaderFeature";

/**
 * Shader 代码构建器
 * 用于根据功能配置动态生成 Shader 代码
 */
export class ShaderBuilder {
    private config: ShaderFeatureConfig;

    constructor(config: ShaderFeatureConfig = {}) {
        this.config = {
            useVertexColor: true,
            useVertexNormal: true,
            useTexture: false,
            useNormalMap: false,
            useEnvironmentMap: false,
            useFog: false,
            useTimeAnimation: false,
            ...config,
        };
    }

    /**
     * 构建 Vertex Shader 代码
     */
    buildVertexShader(): string {
        const parts: string[] = [];

        // 版本声明
        parts.push('#version 300 es');

        // 输入属性
        parts.push('// 输入属性');
        parts.push('in vec3 aVertexPosition;');

        if (this.config.useVertexNormal) {
            parts.push('in vec3 aNormal;');
        }

        if (this.config.useVertexColor) {
            parts.push('in vec3 aColor;');
        }

        if (this.config.useTexture || this.config.useNormalMap) {
            parts.push('in vec2 aTexCoord;');
        }

        // Uniform 变量
        parts.push('');
        parts.push('// 变换矩阵');
        parts.push('uniform mat4 uModelMatrix;');
        parts.push('uniform mat4 uViewMatrix;');
        parts.push('uniform mat4 uProjectionMatrix;');

        if (this.config.useVertexNormal) {
            parts.push('uniform mat3 uNormalMatrix;');
        }

        parts.push('uniform float uPointSize;');

        if (this.config.useTimeAnimation) {
            parts.push('uniform float uTime;');
        }

        // 输出变量
        parts.push('');
        parts.push('// 输出到 Fragment Shader');
        parts.push('out vec3 vWorldPosition;');

        if (this.config.useVertexNormal) {
            parts.push('out vec3 vNormal;');
        }

        if (this.config.useVertexColor) {
            parts.push('out vec3 vColor;');
        }

        if (this.config.useTexture || this.config.useNormalMap) {
            parts.push('out vec2 vTexCoord;');
        }

        if (this.config.useFog) {
            parts.push('out float vFogDepth;');
        }

        if (this.config.useTimeAnimation) {
            parts.push('out float vTime;');
        }

        // main 函数
        parts.push('');
        parts.push('void main() {');
        parts.push('    // 计算世界空间位置');
        parts.push('    vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);');
        parts.push('    vWorldPosition = worldPos.xyz;');
        parts.push('');
        parts.push('    // 计算裁剪空间位置');
        parts.push('    gl_Position = uProjectionMatrix * uViewMatrix * worldPos;');
        parts.push('');

        // 点大小
        parts.push('    // 设置点大小');
        parts.push('    if (uPointSize > 0.0) {');
        parts.push('        gl_PointSize = uPointSize;');
        parts.push('    }');
        parts.push('');

        // 法线处理
        if (this.config.useVertexNormal) {
            parts.push('    // 传递法线');
            parts.push('    float normalLen = length(aNormal);');
            parts.push('    if (normalLen > 0.01 && normalLen < 10.0) {');
            parts.push('        vNormal = normalize(uNormalMatrix * aNormal);');
            parts.push('    } else {');
            parts.push('        vNormal = vec3(0.0, 1.0, 0.0);');
            parts.push('    }');
            parts.push('');
        }

        // 颜色处理
        if (this.config.useVertexColor) {
            parts.push('    // 传递颜色');
            parts.push('    if (length(aColor) > 0.0) {');
            parts.push('        vColor = aColor;');
            parts.push('    } else {');
            parts.push('        vColor = vec3(1.0, 1.0, 1.0);');
            parts.push('    }');
            parts.push('');
        }

        // 纹理坐标
        if (this.config.useTexture || this.config.useNormalMap) {
            parts.push('    // 传递纹理坐标');
            parts.push('    vTexCoord = aTexCoord;');
            parts.push('');
        }

        // 雾效深度
        if (this.config.useFog) {
            parts.push('    // 计算雾效深度');
            parts.push('    vFogDepth = length(vWorldPosition);');
            parts.push('');
        }

        // 时间
        if (this.config.useTimeAnimation) {
            parts.push('    // 传递时间');
            parts.push('    vTime = uTime;');
            parts.push('');
        }

        parts.push('}');

        return parts.join('\n');
    }

    /**
     * 构建 Fragment Shader 代码
     */
    buildFragmentShader(): string {
        const parts: string[] = [];

        // 版本声明
        parts.push('#version 300 es');
        parts.push('precision highp float;');
        parts.push('');

        // 输入变量
        parts.push('// 从 Vertex Shader 输入');
        parts.push('in vec3 vWorldPosition;');

        if (this.config.useVertexNormal) {
            parts.push('in vec3 vNormal;');
        }

        if (this.config.useVertexColor) {
            parts.push('in vec3 vColor;');
        }

        if (this.config.useTexture || this.config.useNormalMap) {
            parts.push('in vec2 vTexCoord;');
        }

        if (this.config.useFog) {
            parts.push('in float vFogDepth;');
        }

        if (this.config.useTimeAnimation) {
            parts.push('in float vTime;');
        }

        // Uniform 变量
        parts.push('');
        parts.push('// 材质属性');
        parts.push('uniform vec3 uMaterialColor;');
        parts.push('uniform float uMaterialShininess;');

        parts.push('');
        parts.push('// 光照属性');
        parts.push('uniform vec3 uLightDirection;');
        parts.push('uniform vec3 uLightColor;');
        parts.push('uniform vec3 uAmbientColor;');
        parts.push('uniform vec3 uCameraPosition;');

        if (this.config.useTexture) {
            parts.push('');
            parts.push('// 纹理');
            parts.push('uniform sampler2D uTexture;');
            parts.push('uniform float uTextureMix; // 纹理混合系数 (0.0 = 只用材质颜色, 1.0 = 只用纹理)');
        }

        if (this.config.useNormalMap) {
            parts.push('');
            parts.push('// 法线贴图');
            parts.push('uniform sampler2D uNormalMap;');
            parts.push('uniform float uNormalMapStrength;');
        }

        if (this.config.useEnvironmentMap) {
            parts.push('');
            parts.push('// 环境贴图');
            parts.push('uniform samplerCube uEnvironmentMap;');
            parts.push('uniform float uEnvironmentMapStrength;');
        }

        if (this.config.useFog) {
            parts.push('');
            parts.push('// 雾效');
            parts.push('uniform vec3 uFogColor;');
            parts.push('uniform float uFogDensity;');
            parts.push('uniform float uFogStart;');
            parts.push('uniform float uFogEnd;');
        }

        if (this.config.useTimeAnimation) {
            parts.push('');
            parts.push('// 时间动画');
            parts.push('uniform float uAnimationSpeed;');
        }

        // 输出
        parts.push('');
        parts.push('// 输出颜色');
        parts.push('out vec4 outColor;');
        parts.push('');

        // main 函数
        parts.push('void main() {');

        // 基础颜色
        parts.push('    // 获取基础颜色');
        if (this.config.useTexture) {
            parts.push('    vec4 texColor = texture(uTexture, vTexCoord);');
            parts.push('    float materialSum = uMaterialColor.r + uMaterialColor.g + uMaterialColor.b;');
            parts.push('    vec3 baseColor = (materialSum < 0.001) ? vColor : uMaterialColor;');
            parts.push('    baseColor = mix(baseColor, texColor.rgb, uTextureMix);');
        } else {
            parts.push('    float materialSum = uMaterialColor.r + uMaterialColor.g + uMaterialColor.b;');
            if (this.config.useVertexColor) {
                parts.push('    vec3 baseColor = (materialSum < 0.001) ? vColor : uMaterialColor;');
            } else {
                parts.push('    vec3 baseColor = uMaterialColor;');
            }
        }

        parts.push('    if (baseColor.r + baseColor.g + baseColor.b < 0.001) {');
        parts.push('        baseColor = vec3(0.8, 0.8, 0.8);');
        parts.push('    }');
        parts.push('');

        // 法线处理
        parts.push('    // 计算法线');
        if (this.config.useNormalMap) {
            parts.push('    vec3 normal = normalize(vNormal);');
            parts.push('    vec3 tangentNormal = texture(uNormalMap, vTexCoord).xyz * 2.0 - 1.0;');
            parts.push('    tangentNormal.xy *= uNormalMapStrength;');
            parts.push('    // TODO: 计算 TBN 矩阵进行正确的法线变换');
            parts.push('    normal = normalize(normal + tangentNormal * uNormalMapStrength);');
        } else if (this.config.useVertexNormal) {
            parts.push('    vec3 normal = normalize(vNormal);');
            parts.push('    if (length(normal) < 0.1) {');
            parts.push('        normal = vec3(0.0, 1.0, 0.0);');
            parts.push('    }');
        } else {
            parts.push('    vec3 normal = vec3(0.0, 1.0, 0.0);');
        }
        parts.push('');

        // 光照计算
        parts.push('    // 光照计算');
        parts.push('    vec3 lightDir = normalize(-uLightDirection);');
        parts.push('    vec3 ambient = max(uAmbientColor, vec3(0.3, 0.3, 0.3)) * baseColor;');
        parts.push('    float diff = max(dot(normal, lightDir), 0.0);');
        parts.push('    vec3 diffuse = diff * uLightColor * baseColor;');
        parts.push('    vec3 viewDir = normalize(uCameraPosition - vWorldPosition);');
        parts.push('    vec3 halfDir = normalize(lightDir + viewDir);');
        parts.push('    float spec = pow(max(dot(normal, halfDir), 0.0), uMaterialShininess);');
        parts.push('    vec3 specular = spec * uLightColor * 0.3;');
        parts.push('');

        // 环境贴图
        if (this.config.useEnvironmentMap) {
            parts.push('    // 环境贴图反射');
            parts.push('    vec3 reflectDir = reflect(-viewDir, normal);');
            parts.push('    vec3 envColor = texture(uEnvironmentMap, reflectDir).rgb;');
            parts.push('    baseColor = mix(baseColor, envColor, uEnvironmentMapStrength);');
            parts.push('');
        }

        // 时间动画
        if (this.config.useTimeAnimation) {
            parts.push('    // 时间动画效果');
            parts.push('    baseColor.r += sin(vTime * uAnimationSpeed) * 0.1;');
            parts.push('    baseColor.g += cos(vTime * uAnimationSpeed) * 0.1;');
            parts.push('');
        }

        // 最终颜色
        parts.push('    // 最终颜色');
        parts.push('    vec3 finalColor = ambient + diffuse + specular;');
        parts.push('    finalColor = max(finalColor, baseColor * 0.3);');
        parts.push('');

        // 雾效
        if (this.config.useFog) {
            parts.push('    // 应用雾效');
            parts.push('    float fogFactor = smoothstep(uFogStart, uFogEnd, vFogDepth);');
            parts.push('    fogFactor = clamp(fogFactor, 0.0, 1.0);');
            parts.push('    finalColor = mix(finalColor, uFogColor, fogFactor * uFogDensity);');
            parts.push('');
        }

        parts.push('    outColor = vec4(finalColor, 1.0);');
        parts.push('}');

        return parts.join('\n');
    }
}
