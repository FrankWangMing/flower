# Material API

`Material` 定义了 3D 对象的外观，包括着色器、材质属性和渲染状态。

[← 返回 API 索引](/api) | [Geometry API →](/api/geometry)

## 导入

```tsx
import { Material } from 'flower';
```

## 构造函数

```tsx
const material = new Material();
```

创建一个新的材质实例。

## 属性

### `shader: ShaderSet`

着色器集合，定义渲染管线。

### `uniform: UniformSet`

Uniform 变量集合，用于向着色器传递数据。

### `state: StateSet`

渲染状态集合，包括深度测试、混合等。

## 使用示例

### 基础使用

```tsx
import { Material } from 'flower';

const material = new Material();
const cell = new Cell({
  geometry,
  material,
});
```

### 多个材质

```tsx
// 创建不同的材质实例
const material1 = new Material();
const material2 = new Material();
const material3 = new Material();

const cell1 = new Cell({ geometry: geo1, material: material1 });
const cell2 = new Cell({ geometry: geo2, material: material2 });
const cell3 = new Cell({ geometry: geo3, material: material3 });
```

### 共享材质

```tsx
// 多个 Cell 可以共享同一个材质
const sharedMaterial = new Material();

const cell1 = new Cell({ geometry: geo1, material: sharedMaterial });
const cell2 = new Cell({ geometry: geo2, material: sharedMaterial });
const cell3 = new Cell({ geometry: geo3, material: sharedMaterial });
```

## 当前限制

> ⚠️ **注意**：当前版本的 Material 系统还在开发中，功能有限：
> - 所有材质都使用相同的默认着色器
> - 颜色、纹理等属性暂不支持自定义
> - 未来版本将支持更多材质属性

## 未来功能

以下功能正在规划中：

- ✅ 自定义颜色
- ✅ 纹理贴图
- ✅ 光照参数
- ✅ 透明度控制
- ✅ 材质预设

## 注意事项

- ⚠️ 当前所有材质使用相同的默认着色器
- 💡 多个 Cell 可以共享同一个 Material 实例
- 💡 Material 的配置在创建后暂不支持修改

## 相关文档

- [Cell API](/api/cell) - 了解如何使用 Material 创建 Cell
- [Scene API](/api/scene) - 了解如何将对象添加到场景
- [材质系统指南](/guides/materials) - 了解材质系统的详细用法（待完善）
