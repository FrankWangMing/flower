/**
 * Shader 功能标志
 * 用于启用/禁用特定的 shader 功能
 */
export enum ShaderFeature {
    /** 基础功能（总是启用） */
    BASIC = 'BASIC',
    /** 纹理支持 */
    TEXTURE = 'TEXTURE',
    /** 法线贴图 */
    NORMAL_MAP = 'NORMAL_MAP',
    /** 环境贴图（天空盒） */
    ENVIRONMENT_MAP = 'ENVIRONMENT_MAP',
    /** 顶点颜色 */
    VERTEX_COLOR = 'VERTEX_COLOR',
    /** 顶点法线 */
    VERTEX_NORMAL = 'VERTEX_NORMAL',
    /** 多光源支持 */
    MULTI_LIGHT = 'MULTI_LIGHT',
    /** 阴影贴图 */
    SHADOW_MAP = 'SHADOW_MAP',
    /** 雾效 */
    FOG = 'FOG',
    /** 时间动画 */
    TIME_ANIMATION = 'TIME_ANIMATION',
}

/**
 * Shader 功能配置
 */
export interface ShaderFeatureConfig {
    /** 启用的功能列表 */
    features?: ShaderFeature[];
    /** 是否启用纹理 */
    useTexture?: boolean;
    /** 是否启用法线贴图 */
    useNormalMap?: boolean;
    /** 是否启用环境贴图 */
    useEnvironmentMap?: boolean;
    /** 是否启用顶点颜色 */
    useVertexColor?: boolean;
    /** 是否启用顶点法线 */
    useVertexNormal?: boolean;
    /** 是否启用雾效 */
    useFog?: boolean;
    /** 是否启用时间动画 */
    useTimeAnimation?: boolean;
}
