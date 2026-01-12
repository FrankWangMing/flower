# Shader 设计文档

## 概述

本项目的 shader 系统支持基础光照、材质属性和可扩展的顶点属性。

## Vertex Shader 特性

### 支持的输入属性

- `aVertexPosition` (vec3) - **必需**：顶点位置
- `aNormal` (vec3) - **可选**：顶点法线（用于光照计算）
- `aColor` (vec3) - **可选**：顶点颜色
- `aTexCoord` (vec2) - **可选**：纹理坐标（为未来扩展预留）

### Uniform 变量

- `uModelMatrix` (mat4) - 模型变换矩阵
- `uViewMatrix` (mat4) - 视图变换矩阵
- `uProjectionMatrix` (mat4) - 投影变换矩阵
- `uNormalMatrix` (mat3) - 法线变换矩阵（模型矩阵的逆矩阵转置）

### 输出变量

- `vWorldPosition` (vec3) - 世界空间位置
- `vNormal` (vec3) - 世界空间法线
- `vColor` (vec3) - 顶点颜色
- `vTexCoord` (vec2) - 纹理坐标

## Fragment Shader 特性

### 输入变量（从 Vertex Shader）

- `vWorldPosition` (vec3) - 世界空间位置
- `vNormal` (vec3) - 世界空间法线
- `vColor` (vec3) - 顶点颜色
- `vTexCoord` (vec2) - 纹理坐标

### Uniform 变量

#### 材质属性
- `uMaterialColor` (vec3) - 材质基础颜色（默认：浅灰色 0.8, 0.8, 0.8）
- `uMaterialShininess` (float) - 材质光泽度（默认：32.0）

#### 光照属性
- `uLightDirection` (vec3) - 光照方向（默认：0.5, 1.0, 0.5）
- `uLightColor` (vec3) - 光照颜色（默认：白色 1.0, 1.0, 1.0）
- `uAmbientColor` (vec3) - 环境光颜色（默认：暗灰色 0.2, 0.2, 0.2）
- `uCameraPosition` (vec3) - 相机位置（默认：0, 5, 5）

### 光照模型

Fragment Shader 使用 **Blinn-Phong 光照模型**，包含三个组件：

1. **环境光（Ambient）**：基础照明，确保物体不会完全黑暗
   ```
   ambient = uAmbientColor * baseColor
   ```

2. **漫反射（Diffuse）**：Lambert 漫反射，基于法线和光照方向的夹角
   ```
   diff = max(dot(normal, lightDir), 0.0)
   diffuse = diff * uLightColor * baseColor
   ```

3. **镜面反射（Specular）**：Blinn-Phong 高光，基于视角和半角向量
   ```
   halfDir = normalize(lightDir + viewDir)
   spec = pow(max(dot(normal, halfDir), 0.0), uMaterialShininess)
   specular = spec * uLightColor
   ```

最终颜色 = 环境光 + 漫反射 + 镜面反射

## 使用示例

### 基础使用

```typescript
import { Material } from './src/material';
import { vec3 } from 'gl-matrix-esm';

// 创建材质（自动包含所有默认的 uniform）
const material = new Material();

// 自定义材质颜色
material.materialColor.color = vec3.fromValues(1.0, 0.0, 0.0); // 红色

// 调整光泽度
material.materialShininess.shininess = 64.0;

// 调整光照方向
material.lightDirection.direction = vec3.fromValues(0.0, 1.0, 0.0); // 从上往下

// 调整光照颜色
material.lightColor.color = vec3.fromValues(1.0, 1.0, 0.9); // 暖白色

// 调整环境光
material.ambientColor.color = vec3.fromValues(0.3, 0.3, 0.3); // 更亮的环境光
```

### 使用顶点颜色

如果几何体提供了顶点颜色（通过 `aColor` 属性），shader 会自动使用顶点颜色。如果没有提供顶点颜色，则使用材质颜色。

### 使用法线（光照）

如果几何体提供了法线（通过 `aNormal` 属性），shader 会使用这些法线进行光照计算。如果没有提供法线，会使用默认法线（0, 0, 1）。

## 扩展性

### 添加新的顶点属性

1. 在 Vertex Shader 中添加新的 `in` 变量
2. 在 Vertex Shader 中将其传递到 Fragment Shader（通过 `out` 变量）
3. 在 Fragment Shader 中添加对应的 `in` 变量
4. 在 `VertexBufferObject` 中添加支持（如果需要）

### 添加纹理支持

1. 在 Vertex Shader 中已经有 `aTexCoord` 和 `vTexCoord`
2. 在 Fragment Shader 中添加 `uniform sampler2D uTexture`
3. 在 Fragment Shader 中使用 `texture(uTexture, vTexCoord)` 采样纹理
4. 创建 `TextureUniform` 类来管理纹理 uniform

## Uniform 类说明

### 已实现的 Uniform 类

- `NormalMatrix` - 法线矩阵（自动从 ModelMatrix 计算）
- `MaterialColor` - 材质颜色
- `MaterialShininess` - 材质光泽度
- `LightDirection` - 光照方向
- `LightColor` - 光照颜色
- `AmbientColor` - 环境光颜色
- `CameraPosition` - 相机位置

所有 Uniform 类都继承自 `Uniform` 基类，并实现 `tie()` 方法来设置 uniform 值。

## 注意事项

1. **WebGL 2.0**：Shader 使用 `#version 300 es`，需要 WebGL 2.0 支持
2. **可选属性**：如果几何体没有提供法线或颜色，shader 会使用默认值
3. **法线矩阵**：NormalMatrix 会在每次渲染时自动从 ModelMatrix 计算
4. **性能**：光照计算在 Fragment Shader 中进行，对于复杂场景可能需要优化

## 未来改进方向

1. **纹理支持**：添加完整的纹理采样支持
2. **多光源**：支持多个点光源、聚光灯等
3. **阴影**：添加阴影贴图支持
4. **PBR**：实现基于物理的渲染（PBR）
5. **后处理**：添加后处理效果支持
