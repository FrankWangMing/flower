# 快速开始

欢迎使用 Flower！这是一个轻量级的 WebGL 3D 渲染引擎，专为 React 应用设计。本指南将帮助你在 5 分钟内创建你的第一个 3D 场景。

[← 返回首页](/) | [查看 API 文档 →](/api)

## 安装

### 使用 npm/pnpm

```bash
# 使用 pnpm（推荐）
pnpm add flower

# 或使用 npm
npm install flower
```

### 使用 CDN

```html
<!-- 暂不支持 CDN，请使用 npm/pnpm 安装 -->
```

## 第一个场景

让我们创建一个简单的 3D 场景，渲染一个立方体。

### 1. 准备几何数据

首先，你需要准备几何数据。可以创建一个 JSON 文件：

```json
// cube.json
{
  "vertices": [
    // 前面
    -1, -1,  1,  1, -1,  1,  1,  1,  1,  -1,  1,  1,
    // 后面
    -1, -1, -1, -1,  1, -1,  1,  1, -1,  1, -1, -1,
    // 左面
    -1, -1, -1, -1, -1,  1, -1,  1,  1, -1,  1, -1,
    // 右面
     1, -1, -1,  1,  1, -1,  1,  1,  1,  1, -1,  1,
    // 上面
    -1,  1, -1, -1,  1,  1,  1,  1,  1,  1,  1, -1,
    // 下面
    -1, -1, -1,  1, -1, -1,  1, -1,  1, -1, -1,  1
  ],
  "indices": [
    0,  1,  2,   0,  2,  3,    // 前面
    4,  5,  6,   4,  6,  7,    // 后面
    8,  9, 10,   8, 10, 11,    // 左面
   12, 13, 14,  12, 14, 15,    // 右面
   16, 17, 18,  16, 18, 19,    // 上面
   20, 21, 22,  20, 22, 23     // 下面
  ]
}
```

### 2. 创建 React 组件

```tsx
import React, { useEffect, useRef } from 'react';
import { Scene } from 'flower';
import { Cell } from 'flower';
import { Buffer, Geometry } from 'flower';
import { Material } from 'flower';
import cubeJson from './cube.json';

export default function MyFirstScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. 创建场景
    const scene = new Scene();
    scene.mount(container);

    // 2. 创建几何数据
    const buffer = new Buffer(cubeJson);
    const geometry = new Geometry(buffer);

    // 3. 创建材质
    const material = new Material();

    // 4. 创建 3D 对象（Cell）
    const cell = new Cell({
      geometry,
      material,
    });

    // 5. 添加到场景
    scene.add(cell);

    // 6. 构建渲染队列
    scene.build();

    // 7. 渲染循环
    const render = () => {
      scene.render();
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // 8. 清理资源（重要！）
    return () => {
      // 清理 canvas
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: 480,
        border: '1px solid #ddd',
        borderRadius: 8,
      }}
    />
  );
}
```

### 3. 在应用中使用

```tsx
import React from 'react';
import MyFirstScene from './MyFirstScene';

function App() {
  return (
    <div>
      <h1>我的第一个 3D 场景</h1>
      <MyFirstScene />
    </div>
  );
}

export default App;
```

## 核心概念

在继续之前，让我们快速了解 Flower 的核心概念：

### Scene（场景）

场景是 3D 世界的容器，管理所有的 3D 对象、相机和渲染器。

```tsx
const scene = new Scene();
scene.mount(container); // 挂载到 DOM 元素
```

### Cell（对象）

Cell 代表场景中的一个 3D 对象，包含几何体和材质。

```tsx
const cell = new Cell({
  geometry: geometry,
  material: material,
});
```

### Geometry（几何体）

几何体定义了 3D 对象的形状，由顶点和索引组成。

```tsx
const buffer = new Buffer({ vertices: [...], indices: [...] });
const geometry = new Geometry(buffer);
```

### Material（材质）

材质定义了 3D 对象的外观，包括颜色、纹理等。

```tsx
const material = new Material();
```

### 渲染流程

1. **创建场景** → `new Scene()`
2. **挂载场景** → `scene.mount(container)`
3. **创建对象** → `new Cell({ geometry, material })`
4. **添加到场景** → `scene.add(cell)`
5. **构建队列** → `scene.build()`
6. **渲染循环** → `scene.render()` + `requestAnimationFrame`

## 下一步

现在你已经创建了第一个场景，可以：

- 📚 [查看 API 文档](/api/scene) - 了解完整的 API
- 🎮 [浏览示例](/demos) - 查看更多使用场景
- 📖 [阅读指南](/guides/basic-rendering) - 深入学习

## 常见问题

### 为什么看不到任何内容？

- 确保容器有明确的宽高（不能是 0）
- 确保调用了 `scene.build()` 和 `scene.render()`
- 检查浏览器控制台是否有错误

### 如何加载 3D 模型？

使用 `Loader.GLBLoader()` 加载 GLB 格式的模型：

```tsx
import { Loader } from 'flower';

const result = await Loader.GLBLoader('/path/to/model.glb');
const buffer = new Buffer({
  vertices: result.vertices,
  indices: result.indices,
});
```

### 如何控制相机？

场景会自动创建相机和控制器，支持鼠标拖拽旋转视角。更多控制选项请查看 [相机控制指南](/guides/camera-control)。

---

> 💡 **提示**：记得在组件卸载时清理资源，避免内存泄漏。

> ⚠️ **注意**：确保容器元素有明确的宽高，否则 WebGL 上下文可能无法正确初始化。
