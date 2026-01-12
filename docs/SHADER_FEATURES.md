# Shader 功能扩展指南

## 概述

Flower 的 Shader 系统现在支持模块化的功能扩展，可以通过配置启用/禁用不同的渲染功能。

## 功能列表

### 基础功能（总是启用）
- ✅ MVP 矩阵变换
- ✅ 基础光照（Blinn-Phong）
- ✅ 材质颜色

### 可选功能

| 功能 | 配置选项 | 说明 |
|------|---------|------|
| **纹理** | `useTexture: true` | 2D 纹理采样 |
| **法线贴图** | `useNormalMap: true` | 法线贴图支持 |
| **环境贴图** | `useEnvironmentMap: true` | 天空盒/环境反射 |
| **顶点颜色** | `useVertexColor: true` | 使用顶点颜色（默认启用） |
| **顶点法线** | `useVertexNormal: true` | 使用顶点法线（默认启用） |
| **雾效** | `useFog: true` | 距离雾效 |
| **时间动画** | `useTimeAnimation: true` | 基于时间的动画效果 |

---

## 使用方法

### 方式 1: 使用 ExtendedMaterial（推荐）

```typescript
import { ExtendedMaterial } from 'flower';

// 创建支持纹理的材质
const material = new ExtendedMaterial({
    useTexture: true,
    useFog: true,
});

// 设置纹理（需要先加载纹理）
// material.texture.texture = loadedTexture;
// material.textureMix.mix = 0.8; // 80% 纹理，20% 材质颜色
```

### 方式 2: 直接配置 ShaderSet

```typescript
import { Material } from 'flower';
import { ShaderSet } from 'flower';

const material = new Material();
material.shader = new ShaderSet({
    useTexture: true,
    useNormalMap: true,
    useFog: true,
});

// 手动添加对应的 Uniform
import { TextureUniform, TextureMixUniform } from 'flower';
material.uniform.add(new TextureUniform());
material.uniform.add(new TextureMixUniform(0.8));
```

---

## 功能详解

### 1. 纹理支持

**启用**:
```typescript
const material = new ExtendedMaterial({
    useTexture: true,
});
```

**需要的 Uniform**:
- `uTexture` (sampler2D) - 纹理
- `uTextureMix` (float) - 纹理混合系数 (0.0-1.0)

**使用**:
```typescript
// 加载纹理后设置
material.texture.texture = texture;
material.textureMix.mix = 1.0; // 完全使用纹理
```

**Shader 行为**:
- 如果启用纹理，Fragment Shader 会采样纹理
- 通过 `uTextureMix` 控制纹理和材质颜色的混合比例

---

### 2. 法线贴图

**启用**:
```typescript
const material = new ExtendedMaterial({
    useNormalMap: true,
});
```

**需要的 Uniform**:
- `uNormalMap` (sampler2D) - 法线贴图
- `uNormalMapStrength` (float) - 法线贴图强度

**使用**:
```typescript
material.normalMap.texture = normalMapTexture;
material.normalMapStrength.strength = 1.0;
```

**注意**: 当前实现是简化版本，完整的法线贴图需要 TBN 矩阵计算。

---

### 3. 环境贴图（天空盒）

**启用**:
```typescript
const material = new ExtendedMaterial({
    useEnvironmentMap: true,
});
```

**需要的 Uniform**:
- `uEnvironmentMap` (samplerCube) - 立方体贴图
- `uEnvironmentMapStrength` (float) - 环境贴图强度

**使用**:
```typescript
material.environmentMap.texture = cubeMapTexture;
material.environmentMapStrength.strength = 0.5;
```

**效果**: 根据视角和法线计算反射，实现环境反射效果。

---

### 4. 雾效

**启用**:
```typescript
const material = new ExtendedMaterial({
    useFog: true,
});
```

**需要的 Uniform**:
- `uFogColor` (vec3) - 雾的颜色
- `uFogDensity` (float) - 雾的密度
- `uFogStart` (float) - 雾开始的距离
- `uFogEnd` (float) - 雾结束的距离

**使用**:
```typescript
import { vec3 } from 'gl-matrix-esm';

material.fogColor.color = vec3.fromValues(0.5, 0.5, 0.5); // 灰色雾
material.fogDensity.density = 0.02;
material.fogStart.start = 0.0;
material.fogEnd.end = 50.0;
```

**效果**: 根据距离混合雾颜色，实现距离雾效果。

---

### 5. 时间动画

**启用**:
```typescript
const material = new ExtendedMaterial({
    useTimeAnimation: true,
});
```

**需要的 Uniform**:
- `uTime` (float) - 当前时间
- `uAnimationSpeed` (float) - 动画速度

**使用**:
```typescript
// 在渲染循环中更新
function render() {
    const time = Date.now() / 1000; // 转换为秒
    material.updateTime(time);
    scene.render();
    requestAnimationFrame(render);
}
```

**效果**: 基于时间的变化效果（如颜色变化、波浪等）。

---

## 组合使用

可以同时启用多个功能：

```typescript
const material = new ExtendedMaterial({
    useTexture: true,
    useNormalMap: true,
    useFog: true,
    useTimeAnimation: true,
});

// 配置各项功能
material.textureMix.mix = 0.8;
material.normalMapStrength.strength = 0.5;
material.fogDensity.density = 0.01;
material.animationSpeed.speed = 2.0;
```

---

## 完整示例

### 示例 1: 带纹理和雾效的材质

```typescript
import { ExtendedMaterial } from 'flower';
import { vec3 } from 'gl-matrix-esm';

const material = new ExtendedMaterial({
    useTexture: true,
    useFog: true,
});

// 设置纹理（假设已加载）
// material.texture.texture = texture;
material.textureMix.mix = 1.0;

// 设置雾效
material.fogColor.color = vec3.fromValues(0.7, 0.8, 0.9); // 淡蓝色雾
material.fogDensity.density = 0.015;
material.fogStart.start = 10.0;
material.fogEnd.end = 100.0;
```

### 示例 2: 带时间动画的材质

```typescript
import { ExtendedMaterial } from 'flower';

const material = new ExtendedMaterial({
    useTimeAnimation: true,
});

material.animationSpeed.speed = 1.5;

// 在渲染循环中
let startTime = Date.now();
function render() {
    const time = (Date.now() - startTime) / 1000;
    material.updateTime(time);
    scene.render();
    requestAnimationFrame(render);
}
```

---

## 性能考虑

### 功能对性能的影响

| 功能 | 性能影响 | 说明 |
|------|---------|------|
| 纹理 | 低 | 纹理采样开销较小 |
| 法线贴图 | 中 | 额外的纹理采样和计算 |
| 环境贴图 | 中-高 | 立方体贴图采样 |
| 雾效 | 低 | 简单的距离计算 |
| 时间动画 | 极低 | 只是传递时间值 |

### 优化建议

1. **按需启用**: 只启用需要的功能
2. **纹理优化**: 使用合适分辨率的纹理
3. **批处理**: 相同配置的材质可以合并绘制

---

## 扩展新功能

### 步骤 1: 在 ShaderFeature 中添加功能标志

```typescript
export enum ShaderFeature {
    // ... 现有功能
    MY_NEW_FEATURE = 'MY_NEW_FEATURE',
}
```

### 步骤 2: 在 ShaderBuilder 中添加代码生成逻辑

```typescript
// 在 buildVertexShader() 或 buildFragmentShader() 中添加
if (this.config.useMyNewFeature) {
    parts.push('// 新功能的代码');
}
```

### 步骤 3: 创建对应的 Uniform 类

```typescript
export class MyNewFeatureUniform extends Uniform {
    name = "uMyNewFeature"
    // ... 实现
}
```

### 步骤 4: 在 ExtendedMaterial 中添加支持

```typescript
if (config.useMyNewFeature) {
    this.myNewFeature = new MyNewFeatureUniform();
    this.uniform.add(this.myNewFeature);
}
```

---

## 注意事项

1. **纹理单元冲突**: 确保不同纹理使用不同的纹理单元
   - 主纹理: TEXTURE0
   - 法线贴图: TEXTURE1
   - 环境贴图: TEXTURE2

2. **向后兼容**: 不传配置时使用默认 Shader（保持向后兼容）

3. **Uniform 顺序**: Uniform 的添加顺序不影响功能，但建议按功能分组

4. **错误处理**: 如果 Shader 编译失败，检查控制台错误信息

---

## 相关文档

- [Shader 设计文档](./SHADER_DESIGN.md) - 了解基础 Shader 设计
- [自定义 Shader 指南](./CUSTOM_SHADER_GUIDE.md) - 了解如何创建完全自定义的 Shader
- [Material API](../api/material.md) - 了解 Material 的使用方法
