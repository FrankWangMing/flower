# Cell API

`Cell` 代表场景中的一个 3D 对象，包含几何体（Geometry）和材质（Material）。

[← 返回 API 索引](/api) | [Scene API →](/api/scene)

## 导入

```tsx
import { Cell } from 'flower';
```

## 构造函数

```tsx
const cell = new Cell({
  geometry: Geometry,
  material: Material,
});
```

**参数：**
- `geometry` - 几何体对象，定义 3D 对象的形状
- `material` - 材质对象，定义 3D 对象的外观

## 属性

### `geometry: Geometry`

3D 对象的几何体，只读。

### `material: Material`

3D 对象的材质，只读。

## 使用示例

### 基础使用

```tsx
import { Cell } from 'flower';
import { Buffer, Geometry } from 'flower';
import { Material } from 'flower';

// 创建几何体
const buffer = new Buffer({
  vertices: [/* ... */],
  indices: [/* ... */],
});
const geometry = new Geometry(buffer);

// 创建材质
const material = new Material();

// 创建 Cell
const cell = new Cell({
  geometry,
  material,
});

// 添加到场景
scene.add(cell);
```

### 多个 Cell

```tsx
// 创建多个 Cell，可以共享几何体或材质
const geometry1 = new Geometry(buffer1);
const geometry2 = new Geometry(buffer2);
const material1 = new Material();
const material2 = new Material();

const cell1 = new Cell({ geometry: geometry1, material: material1 });
const cell2 = new Cell({ geometry: geometry2, material: material2 });
const cell3 = new Cell({ geometry: geometry1, material: material2 }); // 共享几何体

scene.add(cell1);
scene.add(cell2);
scene.add(cell3);
```

### 从 GLB 模型创建

```tsx
import { Loader } from 'flower';

// 加载 GLB 模型
const result = await Loader.GLBLoader('/model.glb');

// 创建 Buffer
const buffer = new Buffer({
  vertices: result.vertices,
  indices: result.indices,
});

// 创建 Geometry 和 Material
const geometry = new Geometry(buffer);
const material = new Material();

// 创建 Cell
const cell = new Cell({ geometry, material });

scene.add(cell);
```

## 注意事项

- ⚠️ Cell 必须在添加到场景后调用 `scene.build()` 才能渲染
- 💡 多个 Cell 可以共享同一个 Geometry 或 Material 实例
- 💡 每个 Cell 代表场景中的一个独立对象

## 相关文档

- [Scene API](/api/scene) - 了解如何将 Cell 添加到场景
- [Geometry API](/api/geometry) - 了解如何创建几何体
- [Material API](/api/material) - 了解如何创建材质
- [模型加载指南](/guides/model-loading) - 了解如何加载 3D 模型
