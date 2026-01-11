# 文档结构说明

## 文档目录结构

```
docs/
├── index.md              # 首页 - 项目介绍和快速链接
├── getting-started.md    # 快速开始 - 5分钟上手指南
├── api/                  # API 文档目录
│   ├── index.md         # API 索引 - 所有 API 的概览
│   ├── scene.md         # Scene API - 场景管理
│   ├── cell.md          # Cell API - 3D 对象
│   ├── geometry.md      # Geometry API - 几何体
│   └── material.md      # Material API - 材质
├── src/                  # 文档系统源代码
│   ├── App.tsx          # 主应用组件
│   ├── components/      # React 组件
│   ├── config/          # 配置文件
│   └── demo-*.tsx       # 示例组件
├── .dev/                 # 开发文档（不对外展示）
│   ├── README.md        # 文档系统说明
│   ├── FIXES.md         # 修复记录
│   ├── DOCUMENTATION_PLAN.md  # 文档规划
│   └── STRUCTURE.md     # 本文档
├── index.html           # HTML 模板
└── vite.config.ts       # Vite 配置
```

## 用户可见文档

以下文档对用户可见，会显示在文档网站中：

1. **index.md** - 首页
2. **getting-started.md** - 快速开始
3. **api/index.md** - API 索引
4. **api/*.md** - 各个 API 文档
5. **/demos** - 示例演示（通过路由访问）

## 开发文档

以下文档仅供开发维护使用，位于 `.dev/` 目录：

1. **README.md** - 文档系统使用说明
2. **FIXES.md** - 问题修复记录
3. **DOCUMENTATION_PLAN.md** - 文档规划方案
4. **STRUCTURE.md** - 文档结构说明

## 路由配置

文档路由在 `src/App.tsx` 中配置：

```tsx
const routes: Route[] = [
  { path: '/', file: './index.md', title: '首页' },
  { path: '/getting-started', file: './getting-started.md', title: '快速开始' },
  { path: '/api', file: './api/index.md', title: 'API' },
  { path: '/demos', title: '示例演示' },
];
```

## 添加新文档

1. 在 `docs/` 目录下创建 `.md` 文件
2. 在 `src/App.tsx` 的 `routes` 数组中添加路由
3. 确保文档中有正确的导航链接

## 文档规范

- 所有用户文档使用中文
- 代码示例必须可运行
- 重要信息使用提示框
- 文档间要有导航链接
