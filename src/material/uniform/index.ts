// 导出基类
export { Uniform, UniformSet } from "./Uniform";

// 导出光照和材质相关的 Uniform
export { NormalMatrix } from "./NormalMatrix";
export { MaterialColor } from "./MaterialColor";
export { MaterialShininess } from "./MaterialShininess";
export { LightDirection } from "./LightDirection";
export { LightColor } from "./LightColor";
export { AmbientColor } from "./AmbientColor";
export { PointSize } from "./PointSize";

// 导出纹理相关的 Uniform
export { TextureUniform, TextureMixUniform } from "./TextureUniform";
export { NormalMapUniform, NormalMapStrengthUniform } from "./NormalMapUniform";
export { EnvironmentMapUniform, EnvironmentMapStrengthUniform } from "./EnvironmentMapUniform";

// 导出雾效相关的 Uniform
export { FogColorUniform, FogDensityUniform, FogStartUniform, FogEndUniform } from "./FogUniform";

// 导出时间动画相关的 Uniform
export { TimeUniform, AnimationSpeedUniform } from "./TimeUniform";
