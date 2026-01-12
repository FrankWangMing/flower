# Shader 功能扩展总结

## 🎉 新增功能

### 1. **ShaderBuilder - 动态 Shader 生成器**

根据配置自动生成 Shader 代码，支持模块化功能组合。

**位置**: `src/shader/ShaderBuilder.ts`

**功能**:
- 根据配置生成 Vertex Shader
- 根据配置生成 Fragment Shader
- 支持功能组合

### 2. **ShaderFeature - 功能配置系统**

定义可用的 Shader 功能和配置选项。

**位置**: `src/shader/ShaderFeature.ts`

**支持的功能**:
- ✅ TEXTURE - 纹理支持
- ✅ NORMAL_MAP - 法线贴图
- ✅ ENVIRONMENT_MAP - 环境贴图
- ✅ VERTEX_COLOR - 顶点颜色
- ✅ VERTEX_NORMAL - 顶点法线
- ✅ FOG - 雾效
- ✅ TIME_ANIMATION - 时间动画

### 3. **ExtendedMaterial - 扩展材质类**

支持所有扩展功能的 Material 类。

**位置**: `src/material/ExtendedMaterial.ts`

**特性**:
- 自动根据配置创建对应的 Shader
- 自动创建所需的 Uniform
- 提供便捷的属性访问

### 4. **新增 Uniform 类**

#### 纹理相关
- `TextureUniform` - 2D 纹理
- `TextureMixUniform` - 纹理混合系数

#### 法线贴图相关
- `NormalMapUniform` - 法线贴图
- `NormalMapStrengthUniform` - 法线贴图强度

#### 环境贴图相关
- `EnvironmentMapUniform` - 立方体贴图
- `EnvironmentMapStrengthUniform` - 环境贴图强度

#### 雾效相关
- `FogColorUniform` - 雾颜色
- `FogDensityUniform` - 雾密度
- `FogStartUniform` - 雾起始距离
- `FogEndUniform` - 雾结束距离

#### 时间动画相关
- `TimeUniform` - 当前时间
- `AnimationSpeedUniform` - 动画速度

---

## 📖 使用方式

### 快速开始

```typescript
import { ExtendedMaterial } from 'flower';

// 创建支持雾效的材质
const material = new ExtendedMaterial({
    useFog: true,
});

// 配置雾效
material.fogColor!.color = vec3.fromValues(0.7, 0.8, 0.9);
material.fogDensity!.density = 0.02;
```

### 组合多个功能

```typescript
const material = new ExtendedMaterial({
    useTexture: true,
    useFog: true,
    useTimeAnimation: true,
});
```

### 直接使用 ShaderSet

```typescript
import { Material } from 'flower';
import { ShaderSet } from 'flower';

const material = new Material();
material.shader = new ShaderSet({
    useTexture: true,
    useFog: true,
});
```

---

## 🔧 架构改进

### 之前
```typescript
// 固定的 Shader，难以扩展
class ShaderSet {
    constructor() {
        // 硬编码的 Shader 代码
    }
}
```

### 现在
```typescript
// 可配置的 Shader，易于扩展
class ShaderSet {
    constructor(config?: ShaderFeatureConfig) {
        if (config) {
            // 使用 ShaderBuilder 动态生成
        } else {
            // 使用默认 Shader（向后兼容）
        }
    }
}
```

---

## 📊 功能对比

| 功能 | 默认 Material | ExtendedMaterial |
|------|--------------|------------------|
| 基础光照 | ✅ | ✅ |
| 材质颜色 | ✅ | ✅ |
| 纹理 | ❌ | ✅ |
| 法线贴图 | ❌ | ✅ |
| 环境贴图 | ❌ | ✅ |
| 雾效 | ❌ | ✅ |
| 时间动画 | ❌ | ✅ |

---

## 🎯 扩展点

### 添加新功能

1. **在 ShaderFeature 中添加标志**
   ```typescript
   export enum ShaderFeature {
       MY_FEATURE = 'MY_FEATURE',
   }
   ```

2. **在 ShaderBuilder 中添加代码生成**
   ```typescript
   if (this.config.useMyFeature) {
       parts.push('// 新功能代码');
   }
   ```

3. **创建对应的 Uniform**
   ```typescript
   export class MyFeatureUniform extends Uniform {
       name = "uMyFeature"
       // ...
   }
   ```

4. **在 ExtendedMaterial 中集成**
   ```typescript
   if (config.useMyFeature) {
       this.myFeature = new MyFeatureUniform();
       this.uniform.add(this.myFeature);
   }
   ```

---

## 📝 示例代码

### 示例 1: 雾效材质

```typescript
const material = new ExtendedMaterial({
    useFog: true,
});

material.fogColor!.color = vec3.fromValues(0.5, 0.5, 0.5);
material.fogDensity!.density = 0.02;
material.fogStart!.start = 0.0;
material.fogEnd!.end = 50.0;
```

### 示例 2: 带时间动画的材质

```typescript
const material = new ExtendedMaterial({
    useTimeAnimation: true,
});

material.animationSpeed!.speed = 2.0;

// 在渲染循环中
function render() {
    const time = Date.now() / 1000;
    material.updateTime(time);
    scene.render();
    requestAnimationFrame(render);
}
```

### 示例 3: 纹理材质

```typescript
const material = new ExtendedMaterial({
    useTexture: true,
});

// 加载纹理后
material.texture!.texture = loadedTexture;
material.textureMix!.mix = 0.8; // 80% 纹理
```

---

## ✅ 向后兼容

- ✅ 不传配置时使用默认 Shader
- ✅ 现有的 Material 代码无需修改
- ✅ 新功能通过 ExtendedMaterial 提供

---

## 📚 相关文档

- [Shader 功能扩展指南](./SHADER_FEATURES.md) - 详细的功能说明
- [自定义 Shader 指南](./CUSTOM_SHADER_GUIDE.md) - 完全自定义 Shader
- [Shader 设计文档](./SHADER_DESIGN.md) - 基础 Shader 设计
