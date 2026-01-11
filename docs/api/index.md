# API 参考

Flower 提供了简洁易用的 API 来创建和管理 3D 场景。本文档提供了所有公共 API 的详细说明。

## 核心 API

### Scene（场景）

场景是 3D 世界的容器，管理所有的 3D 对象、相机和渲染器。

👉 [查看 Scene API](/api/scene)

**主要方法：**
- `mount(container)` - 挂载到 DOM 元素
- `add(cell)` - 添加 3D 对象
- `build()` - 构建渲染队列
- `render()` - 执行渲染

---

### Cell（对象）

Cell 代表场景中的一个 3D 对象，包含几何体和材质。

👉 [查看 Cell API](/api/cell)

**创建方式：**
```tsx
const cell = new Cell({
  geometry: geometry,
  material: material,
});
```

---

### Geometry（几何体）

几何体定义了 3D 对象的形状，由顶点和索引组成。

👉 [查看 Geometry API](/api/geometry)

**相关类：**
- `Buffer` - 存储原始几何数据
- `Geometry` - 封装 Buffer 数据

---

### Material（材质）

材质定义了 3D 对象的外观。

👉 [查看 Material API](/api/material)

**当前状态：**
- ✅ 基础材质系统
- 🚧 颜色、纹理等功能开发中

---

## 加载器

### Loader

用于加载 3D 模型文件。

**主要方法：**
- `GLBLoader(input, options?)` - 加载 GLB/glTF 2.0 格式模型

**示例：**
```tsx
import { Loader } from 'flower';

const result = await Loader.GLBLoader('/model.glb');
const buffer = new Buffer({
  vertices: result.vertices,
  indices: result.indices,
});
```

---

## 相机和控制器

### Camera

场景相机，用于控制视角。

**特性：**
- 自动创建（在 `scene.mount()` 后）
- 支持轨道控制
- 鼠标交互

### Controller

交互控制器，处理鼠标/触摸输入。

**功能：**
- 鼠标拖拽旋转视角
- 自动响应交互

---

## API 使用流程

```tsx
// 1. 创建场景
const scene = new Scene();
scene.mount(container);

// 2. 创建几何体
const buffer = new Buffer({ vertices: [...], indices: [...] });
const geometry = new Geometry(buffer);

// 3. 创建材质
const material = new Material();

// 4. 创建对象
const cell = new Cell({ geometry, material });

// 5. 添加到场景
scene.add(cell);
scene.build();

// 6. 渲染循环
const render = () => {
  scene.render();
  requestAnimationFrame(render);
};
requestAnimationFrame(render);
```

---

## 类型定义

所有 API 都提供完整的 TypeScript 类型定义：

```tsx
import { Scene, Cell, Buffer, Geometry, Material } from 'flower';
```

---

## 相关文档

- [快速开始](/getting-started) - 学习如何使用这些 API
- [示例演示](/demos) - 查看实际使用案例

---

## 版本信息

当前文档版本：**v0.0.1**

API 可能会在后续版本中发生变化。
