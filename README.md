
# Flower  WebGL 3D 渲染引擎

这是一个基于 WebGL 和 React 的 3D 渲染引擎，支持渲染和显示 3D 模型，适用于工业仿真、数据可视化等领域。该项目提供了一个灵活的 API，允许用户创建、管理和渲染 3D 场景。

## 项目结构

```plaintext
├── README.md           # 项目文档
├── dist                # 构建后的文件
│   ├── ...             # 其他构建输出文件  
├── docs                # 文档源文件
├── lib                 # 库文件
├── package.json        # 项目配置文件
├── pnpm-lock.yaml      # pnpm 锁定文件
├── src                 # 源代码
│   ├── camera          # 相机相关功能
│   ├── context         # WebGL 上下文和程序
│   ├── controller      # 控制器和状态管理
│   ├── material        # 材质和纹理
│   ├── model           # 3D 模型相关
│   ├── renderer        # 渲染器
│   ├── scene           # 场景管理
│   ├── shader          # 着色器文件
│   └── utils           # 工具函数
├── test                # 测试文件
├── tsconfig.app.json   # 应用配置
├── tsconfig.json       # TypeScript 配置
├── vercel.json         # Vercel 部署配置
└── vite.config.ts      # Vite 配置文件
```

## 安装

首先，确保你已经安装了 [Node.js](https://nodejs.org/) 和 [pnpm](https://pnpm.io/)。然后，克隆这个仓库并安装依赖：

```bash
git clone https://github.com/FrankWangMing/flower.git
cd flower
pnpm install
```

## 使用

这个项目是基于 React 的，以下是如何在 React 项目中使用它来渲染 3D 场景的基本示例。

### 基本示例

1. 在你的 React 组件中导入必要的类和 JSON 数据。

```jsx
import React, { useEffect, useRef } from 'react';
import { Scene } from "../../src";
import { Cell } from "../../src/model/cell";
import { Buffer, Geometry } from "../../src/model/geometry";
import { Material } from "../../src/material";
import cubeJson from '../../public/cube.json';
```

2. 在组件中初始化场景并进行渲染。

```jsx
export default () => {
    const ref = useRef();
    const scene = new Scene();

    useEffect(() => {
        if (ref.current) {
            scene.mount(ref.current);
            const buffer = new Buffer(cubeJson);
            const cell = new Cell({
                geometry: new Geometry(buffer),
                material: new Material()
            });
            scene.add(cell);
            scene.build();

            // 渲染函数
            const render = () => {
                scene.render();
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);

            // 清理函数
            return () => {
                scene.destroy(); // 销毁场景，释放资源
            };
        }
    }, [scene]);

    return <div ref={ref}></div>;
};
```

3. 在应用程序中渲染该组件：

```jsx
import React from 'react';
import YourComponent from './YourComponent';

const App = () => {
    return (
        <div>
            <h1>WebGL 3D 渲染示例</h1>
            <YourComponent />
        </div>
    );
}

export default App;
```

### API 说明

#### `Scene`

- `mount(container: HTMLElement)`
  将 WebGL 渲染场景挂载到指定的 DOM 元素。

- `add(object: Cell)`
  将一个 3D 对象（`Cell`）添加到场景中。

- `build()`
  构建并初始化场景中的所有资源。

- `render()`
  渲染场景中的所有对象。

- `destroy()`
  销毁场景，释放所有 WebGL 资源。

#### `Cell`

- `new Cell(options)`
  创建一个新的 3D 对象，包含几何体和材质。

  - `geometry: Geometry`
  - `material: Material`

#### `Buffer`

- `new Buffer(data)`
  创建一个缓冲区对象，存储来自 JSON 数据的原始几何数据。

#### `Geometry`

- `new Geometry(buffer: Buffer)`
  创建一个几何对象，封装缓冲区数据。

#### `Material`

- `new Material()`
  创建一个基础材质对象，用于 3D 对象的着色。

## 配置

### TypeScript 配置

项目使用 TypeScript，所有配置文件位于 `tsconfig.json`。你可以根据需要进行调整。

### Vite 配置

该项目使用 [Vite](https://vitejs.dev/) 作为构建工具，配置文件位于 `vite.config.ts`。

### 部署配置

如果你希望将该项目部署到 [Vercel](https://vercel.com/)，可以使用 `vercel.json` 文件进行部署配置。

## 贡献

如果你有任何改进建议或问题，请随时创建 Issue 或提交 Pull Request。

## License

该项目遵循 [MIT License](LICENSE)。
