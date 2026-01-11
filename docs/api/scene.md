# Scene API

`Scene` 是 Flower 的核心类，代表一个 3D 渲染场景。它管理所有的 3D 对象、相机、控制器和渲染器。

[← 返回 API 索引](/api) | [快速开始 →](/getting-started)

## 导入

```tsx
import { Scene } from 'flower';
```

## 构造函数

```tsx
const scene = new Scene();
```

创建一个新的场景实例。

## 属性

### `context: Context | undefined`

WebGL 上下文，在 `mount()` 后可用。

### `background: Background`

场景背景配置。

### `model: Model`

场景模型管理器。

### `camera: Camera`

场景相机，在 `mount()` 后自动创建。

### `controller: Controller`

交互控制器，用于鼠标/触摸交互。

### `gl: WebGLRenderingContext`

WebGL 渲染上下文，只读属性。

## 方法

### `mount(container: HTMLDivElement): void`

将场景挂载到指定的 DOM 元素。

**参数：**
- `container` - 要挂载的 DOM 元素（必须是 `HTMLDivElement`）

**示例：**
```tsx
const scene = new Scene();
const container = document.getElementById('canvas-container');
scene.mount(container);
```

> ⚠️ **注意**：容器必须有明确的宽高，否则 WebGL 上下文可能无法正确初始化。

---

### `add(cell: Cell): void`

将一个 3D 对象添加到场景中。

**参数：**
- `cell` - 要添加的 Cell 对象

**示例：**
```tsx
const cell = new Cell({ geometry, material });
scene.add(cell);
```

> 💡 **提示**：添加对象后需要调用 `build()` 来构建渲染队列。

---

### `build(): void`

构建并初始化场景中的所有资源。必须在添加所有对象后、渲染前调用。

**示例：**
```tsx
scene.add(cell1);
scene.add(cell2);
scene.build(); // 构建渲染队列
```

> ⚠️ **注意**：每次添加或移除对象后，都需要重新调用 `build()`。

---

### `render(): void`

渲染场景中的所有对象。通常在 `requestAnimationFrame` 循环中调用。

**示例：**
```tsx
const render = () => {
  scene.render();
  requestAnimationFrame(render);
};
requestAnimationFrame(render);
```

---

### `init(): void`

初始化场景，包括创建相机和控制器。通常在 `mount()` 后自动调用，一般不需要手动调用。

## 使用示例

### 基础使用

```tsx
import { Scene } from 'flower';
import { Cell, Buffer, Geometry } from 'flower';
import { Material } from 'flower';

const scene = new Scene();
scene.mount(container);

const buffer = new Buffer(cubeJson);
const geometry = new Geometry(buffer);
const material = new Material();
const cell = new Cell({ geometry, material });

scene.add(cell);
scene.build();

const render = () => {
  scene.render();
  requestAnimationFrame(render);
};
requestAnimationFrame(render);
```

### 多个对象

```tsx
// 创建多个对象
const cell1 = new Cell({ geometry: geo1, material: mat1 });
const cell2 = new Cell({ geometry: geo2, material: mat2 });
const cell3 = new Cell({ geometry: geo3, material: mat3 });

// 添加到场景
scene.add(cell1);
scene.add(cell2);
scene.add(cell3);

// 构建并渲染
scene.build();
scene.render();
```

### React 集成

```tsx
import React, { useEffect, useRef } from 'react';
import { Scene } from 'flower';

export default function SceneComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    scene.mount(containerRef.current);

    // ... 添加对象和渲染逻辑

    return () => {
      // 清理资源
      containerRef.current!.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: 480 }} />;
}
```

## 生命周期

1. **创建** → `new Scene()`
2. **挂载** → `scene.mount(container)` - 初始化 WebGL 上下文
3. **添加对象** → `scene.add(cell)` - 添加 3D 对象
4. **构建** → `scene.build()` - 构建渲染队列
5. **渲染** → `scene.render()` - 执行渲染（在循环中调用）

## 注意事项

- ⚠️ 必须在 `mount()` 之后才能添加对象
- ⚠️ 每次添加/移除对象后需要重新调用 `build()`
- ⚠️ 容器元素必须有明确的宽高
- 💡 在 React 组件卸载时记得清理资源

## 相关文档

- [Cell API](/api/cell) - 了解如何创建 3D 对象
- [Geometry API](/api/geometry) - 了解如何创建几何体
- [Material API](/api/material) - 了解如何创建材质
- [基础渲染指南](/guides/basic-rendering) - 完整的使用教程
