import { Material } from "./Material";
import { ShaderSet, ShaderFeatureConfig } from "../shader";
import {
    TextureUniform,
    TextureMixUniform,
    NormalMapUniform,
    NormalMapStrengthUniform,
    EnvironmentMapUniform,
    EnvironmentMapStrengthUniform,
    FogColorUniform,
    FogDensityUniform,
    FogStartUniform,
    FogEndUniform,
    TimeUniform,
    AnimationSpeedUniform,
} from "./uniform";

/**
 * 扩展的 Material 类
 * 支持纹理、法线贴图、环境贴图、雾效等高级功能
 */
export class ExtendedMaterial extends Material {
    // 纹理相关
    texture?: TextureUniform
    textureMix?: TextureMixUniform

    // 法线贴图相关
    normalMap?: NormalMapUniform
    normalMapStrength?: NormalMapStrengthUniform

    // 环境贴图相关
    environmentMap?: EnvironmentMapUniform
    environmentMapStrength?: EnvironmentMapStrengthUniform

    // 雾效相关
    fogColor?: FogColorUniform
    fogDensity?: FogDensityUniform
    fogStart?: FogStartUniform
    fogEnd?: FogEndUniform

    // 时间动画相关
    time?: TimeUniform
    animationSpeed?: AnimationSpeedUniform

    constructor(config?: ShaderFeatureConfig) {
        // 使用配置创建 Shader
        const shaderConfig: ShaderFeatureConfig = {
            useVertexColor: true,
            useVertexNormal: true,
            useTexture: config?.useTexture ?? false,
            useNormalMap: config?.useNormalMap ?? false,
            useEnvironmentMap: config?.useEnvironmentMap ?? false,
            useFog: config?.useFog ?? false,
            useTimeAnimation: config?.useTimeAnimation ?? false,
            ...config,
        }

        super()
        
        // 替换为扩展的 Shader
        this.shader = new ShaderSet(shaderConfig)

        // 初始化扩展功能
        this.initExtendedFeatures(shaderConfig)
    }

    private initExtendedFeatures(config: ShaderFeatureConfig) {
        // 纹理
        if (config.useTexture) {
            this.texture = new TextureUniform(undefined, 0)
            this.textureMix = new TextureMixUniform(1.0)
            this.uniform.add(this.texture)
            this.uniform.add(this.textureMix)
        }

        // 法线贴图
        if (config.useNormalMap) {
            this.normalMap = new NormalMapUniform(undefined, 1, 1.0)
            this.normalMapStrength = new NormalMapStrengthUniform(1.0)
            this.uniform.add(this.normalMap)
            this.uniform.add(this.normalMapStrength)
        }

        // 环境贴图
        if (config.useEnvironmentMap) {
            this.environmentMap = new EnvironmentMapUniform(undefined, 2, 0.5)
            this.environmentMapStrength = new EnvironmentMapStrengthUniform(0.5)
            this.uniform.add(this.environmentMap)
            this.uniform.add(this.environmentMapStrength)
        }

        // 雾效
        if (config.useFog) {
            this.fogColor = new FogColorUniform()
            this.fogDensity = new FogDensityUniform(0.02)
            this.fogStart = new FogStartUniform(0.0)
            this.fogEnd = new FogEndUniform(50.0)
            this.uniform.add(this.fogColor)
            this.uniform.add(this.fogDensity)
            this.uniform.add(this.fogStart)
            this.uniform.add(this.fogEnd)
        }

        // 时间动画
        if (config.useTimeAnimation) {
            this.time = new TimeUniform(0.0)
            this.animationSpeed = new AnimationSpeedUniform(1.0)
            this.uniform.add(this.time)
            this.uniform.add(this.animationSpeed)
        }
    }

    /**
     * 更新时间（用于动画）
     */
    updateTime(time: number) {
        if (this.time) {
            this.time.updateTime(time)
        }
    }
}
