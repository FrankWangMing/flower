# Geometry API

`Geometry` 定义了 3D 对象的形状，由顶点数据和索引数据组成。

[← 返回 API 索引](/api) | [Cell API →](/api/cell)

## 导入

```tsx
import { Buffer, Geometry } from 'flower';
```

## Buffer

`Buffer` 用于存储原始的几何数据。

### 构造函数

```tsx
const buffer = new Buffer({
  vertices: number[],
  indices?: number[],
});
```

**参数：**
- `vertices` - 顶点数组，每个顶点包含 3 个坐标（x, y, z）
- `indices` - 索引数组（可选），用于定义面的连接关系

**示例：**
```tsx
const buffer = new Buffer({
  vertices: [
    -1, -1, 0,  // 顶点 0
     1, -1, 0,  // 顶点 1
     0,  1, 0,  // 顶点 2
  ],
  indices: [0, 1, 2], // 三角形
});
```

## Geometry

`Geometry` 封装了 Buffer 数据，用于创建 3D 对象。

### 构造函数

```tsx
const geometry = new Geometry(buffer);
```

**参数：**
- `buffer` - Buffer 实例

### 属性

#### `vbos: VertexBufferObjectSet`

顶点缓冲区对象集合，内部使用。

#### `drawers: DrawerSet`

绘制器集合，内部使用。

### 方法

#### `add(vbo: VertexBufferObject | IndexBufferObject): void`

添加顶点缓冲区对象或索引缓冲区对象，通常不需要手动调用。

## 使用示例

### 创建简单三角形

```tsx
const buffer = new Buffer({
  vertices: [
    -1, -1, 0,  // 左下
     1, -1, 0,  // 右下
     0,  1, 0,  // 顶部
  ],
  indices: [0, 1, 2],
});

const geometry = new Geometry(buffer);
```

### 创建立方体

```tsx
const cubeBuffer = new Buffer({
  vertices: [
    // 前面
    -1, -1,  1,  1, -1,  1,  1,  1,  1,  -1,  1,  1,
    // 后面
    -1, -1, -1, -1,  1, -1,  1,  1, -1,  1, -1, -1,
    // ... 更多顶点
  ],
  indices: [
    0,  1,  2,   0,  2,  3,    // 前面
    4,  5,  6,   4,  6,  7,    // 后面
    // ... 更多索引
  ],
});

const geometry = new Geometry(cubeBuffer);
```

### 从 JSON 文件加载

```tsx
import cubeJson from './cube.json';

const buffer = new Buffer(cubeJson);
const geometry = new Geometry(buffer);
```

### 从 GLB 模型加载

```tsx
import { Loader } from 'flower';

const result = await Loader.GLBLoader('/model.glb');
const buffer = new Buffer({
  vertices: result.vertices,
  indices: result.indices,
});
const geometry = new Geometry(buffer);
```

## 顶点数据格式

### 顶点数组格式

顶点数组是一个一维数组，每 3 个数字代表一个顶点的坐标：

```
[x1, y1, z1, x2, y2, z2, x3, y3, z3, ...]
```

### 索引数组格式

索引数组定义了如何连接顶点形成面：

```
[i1, i2, i3, i4, i5, i6, ...]
```

每 3 个索引组成一个三角形。

**示例：**
```tsx
// 4 个顶点
vertices: [
  -1, -1, 0,  // 索引 0
   1, -1, 0,  // 索引 1
   1,  1, 0,  // 索引 2
  -1,  1, 0,  // 索引 3
]

// 2 个三角形组成一个矩形
indices: [
  0, 1, 2,  // 第一个三角形：0 -> 1 -> 2
  0, 2, 3,  // 第二个三角形：0 -> 2 -> 3
]
```

## 注意事项

- ⚠️ 顶点坐标通常以模型空间为单位，可以通过变换矩阵调整位置
- ⚠️ 索引数组必须使用 `Uint16Array`，最大索引值为 65535
- 💡 如果没有提供索引数组，Geometry 会自动生成顺序索引
- 💡 多个 Geometry 可以共享同一个 Buffer 实例

## 相关文档

- [Cell API](/api/cell) - 了解如何使用 Geometry 创建 Cell
- [Scene API](/api/scene) - 了解如何将对象添加到场景
- [模型加载指南](/guides/model-loading) - 了解如何加载 3D 模型
