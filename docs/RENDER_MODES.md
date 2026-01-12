# 渲染模式指南

## 概述

Flower 支持多种渲染模式，可以以不同的方式显示 3D 模型：
- **实体模式（SOLID）**：默认的填充模式
- **线框模式（WIREFRAME）**：只显示模型的边
- **点云模式（POINTS）**：只显示顶点
- **线条模式（LINES）**：使用线条绘制

## 使用方法

### 基本用法

```typescript
import { Material, RenderMode } from 'flower';

// 创建实体材质（默认）
const solidMaterial = new Material();

// 创建线框材质
const wireframeMaterial = new Material({
  mode: RenderMode.WIREFRAME,
  lineWidth: 1.0
});

// 创建点云材质
const pointsMaterial = new Material({
  mode: RenderMode.POINTS,
  pointSize: 5.0
});
```

### 动态切换渲染模式

```typescript
// 创建材质
const material = new Material();

// 切换到线框模式
material.setRenderMode({
  mode: RenderMode.WIREFRAME,
  lineWidth: 2.0
});

// 切换回实体模式
material.setRenderMode({
  mode: RenderMode.SOLID
});

// 切换到点云模式
material.setRenderMode({
  mode: RenderMode.POINTS,
  pointSize: 8.0
});
```

## 渲染模式详解

### SOLID（实体模式）

默认的渲染模式，使用三角形填充模型。

```typescript
const material = new Material({
  mode: RenderMode.SOLID
});
```

**特点：**
- 使用 `gl.TRIANGLES` 绘制
- 完整的表面填充
- 支持光照和材质

### WIREFRAME（线框模式）

只显示模型的边，不填充表面。

```typescript
const material = new Material({
  mode: RenderMode.WIREFRAME,
  lineWidth: 1.0  // 线宽（大多数浏览器只支持 1.0）
});
```

**特点：**
- 自动从三角形索引生成线框索引
- 使用 `gl.LINES` 绘制
- 每个三角形生成 3 条边（6 个索引）
- 启用多边形偏移以避免 z-fighting

**注意：**
- 大多数 WebGL 实现只支持线宽为 1.0
- 线框模式下会禁用背面剔除以获得更好的视觉效果

### POINTS（点云模式）

只显示顶点，不连接任何边或面。

```typescript
const material = new Material({
  mode: RenderMode.POINTS,
  pointSize: 5.0  // 点大小（像素）
});
```

**特点：**
- 自动从三角形索引提取唯一顶点
- 使用 `gl.POINTS` 绘制
- 点大小通过 shader 的 `gl_PointSize` 设置

**注意：**
- 点大小以像素为单位
- 较大的点大小可能在某些设备上不支持

### LINES（线条模式）

使用线条绘制，假设索引已经是线条格式。

```typescript
const material = new Material({
  mode: RenderMode.LINES,
  lineWidth: 1.0
});
```

**特点：**
- 直接使用原始索引
- 使用 `gl.LINES` 绘制
- 适用于已经包含线条数据的几何体

## 完整示例

```typescript
import React, { useEffect, useRef, useState } from 'react';
import { Scene } from 'flower';
import { Cell } from 'flower';
import { Buffer, Geometry } from 'flower';
import { Material, RenderMode } from 'flower';
import { Loader } from 'flower';

function ModelViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<RenderMode>(RenderMode.SOLID);

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const scene = new Scene();
    scene.mount(mountEl);

    (async () => {
      // 加载模型
      const result = await Loader.GLBLoader('./model.glb');

      const buffer = new Buffer({
        vertices: result.vertices,
        indices: result.indices,
      });

      const geometry = new Geometry(buffer);

      // 创建材质
      const material = new Material({
        mode: renderMode,
        lineWidth: 2.0,
        pointSize: 5.0
      });

      const cell = new Cell({
        geometry: geometry,
        material: material,
      });

      scene.add(cell);
      scene.build();

      // 渲染循环
      const render = () => {
        scene.render();
        requestAnimationFrame(render);
      };
      render();
    })();
  }, [renderMode]);

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: 480 }} />
      <div>
        <button onClick={() => setRenderMode(RenderMode.SOLID)}>实体</button>
        <button onClick={() => setRenderMode(RenderMode.WIREFRAME)}>线框</button>
        <button onClick={() => setRenderMode(RenderMode.POINTS)}>点云</button>
      </div>
    </div>
  );
}
```

## 技术细节

### 索引生成

- **WIREFRAME**：从三角形索引 `[i0, i1, i2]` 生成线框索引 `[i0, i1, i1, i2, i2, i0]`
- **POINTS**：从三角形索引提取所有唯一顶点索引

### 性能考虑

- **SOLID**：性能最好，使用原始索引
- **WIREFRAME**：索引数量是原来的 2 倍（每个三角形 3 条边）
- **POINTS**：索引数量通常少于原始索引（去重后）

### 限制

1. **线宽**：大多数 WebGL 实现只支持线宽 1.0
2. **点大小**：某些设备可能不支持大点大小
3. **索引数量**：线框模式的索引数量会增加，可能影响性能

## 相关文档

- [Material API](../api/material.md) - 了解材质的其他属性
- [Shader 设计文档](./SHADER_DESIGN.md) - 了解 shader 如何支持不同渲染模式
