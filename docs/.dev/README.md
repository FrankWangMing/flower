# 文档开发说明

本文档说明如何开发和维护 Flower 文档系统。

## 文档系统

这是一个基于 Markdown + React 的文档系统，支持在 Markdown 中嵌入 React 组件 demo。

## 功能特性

- ✅ 支持标准 Markdown 语法
- ✅ 支持 GitHub Flavored Markdown (GFM)
- ✅ 代码高亮
- ✅ 在 Markdown 中嵌入 React 组件
- ✅ 路由导航

## 使用方法

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm doc:dev
```

### 3. 在 Markdown 中嵌入组件

使用 `<Demo>` 标签来嵌入 React 组件：

```markdown
<Demo src="./src/demo.tsx" title="组件标题" description="组件描述" />
```

**参数说明：**
- `src`: 组件文件路径（相对于 `docs/src/`）
- `title`: 可选的组件标题
- `description`: 可选的组件描述

### 4. 添加新文档页面

1. 在 `docs/` 目录下创建 `.md` 文件
2. 在 `docs/src/App.tsx` 的 `routes` 数组中添加路由配置：

```tsx
{ path: '/your-path', file: './your-file.md', title: '页面标题' }
```

## 文件结构

```
docs/
├── index.md              # 首页
├── getting-started.md    # 快速开始
├── api/                  # API 文档
├── src/
│   ├── App.tsx           # 主应用组件（路由配置）
│   ├── main.tsx          # 入口文件
│   ├── demo.tsx          # 示例组件
│   ├── components/
│   │   ├── MarkdownRenderer.tsx  # Markdown 渲染器
│   │   └── MarkdownPage.tsx      # Markdown 页面组件
│   └── styles.css        # 样式文件
├── vite.config.ts        # Vite 配置
└── index.html           # HTML 模板
```

## Markdown 语法示例

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 代码块

````markdown
```tsx
const example = '代码示例';
```
````

### 嵌入组件

```markdown
<Demo src="./src/demo.tsx" title="渲染示例" />
```

### 列表

```markdown
- 项目 1
- 项目 2
- 项目 3
```

### 表格

```markdown
| 列1 | 列2 |
|-----|-----|
| 值1 | 值2 |
```

## 构建生产版本

```bash
pnpm build:doc
```

构建后的文件会在 `docs/dist/` 目录下。

## 预览生产版本

```bash
pnpm preview
```
