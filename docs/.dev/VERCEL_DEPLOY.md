# Vercel 部署说明

## 部署配置

### vercel.json

```json
{
  "buildCommand": "pnpm build:doc",
  "outputDirectory": "docs/dist",
  "installCommand": "pnpm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 构建流程

1. **安装依赖**：`pnpm install`
2. **构建文档**：`pnpm build:doc`
3. **输出目录**：`docs/dist`

## Markdown 文件处理

### 开发环境

在开发环境中，Markdown 文件通过 Vite 插件动态导入：
- `markdownPlugin` 将 `.md` 文件转换为 JavaScript 模块
- 内容被内联到 bundle 中

### 生产环境

在生产环境中，有两种方式加载 Markdown：

1. **构建时内联**（主要方式）
   - Vite 构建时将 Markdown 内容打包到 JavaScript 中
   - 通过动态 `import()` 加载

2. **运行时 fetch**（fallback）
   - 如果 import 失败，通过 `fetch()` 从服务器加载
   - Markdown 文件会被 `copyMarkdownPlugin` 复制到 `dist` 目录

## 常见问题

### 问题：部署后显示"没有 md 文件"

**原因**：
- Markdown 文件没有被正确复制到 dist 目录
- 或者路径解析有问题

**解决方案**：
1. 检查 `copyMarkdownPlugin` 是否正确执行
2. 检查 `vercel.json` 中的 `outputDirectory` 是否正确
3. 确保构建命令是 `pnpm build:doc`

### 问题：Markdown 文件加载失败

**检查清单**：
- [ ] 构建日志中是否有错误
- [ ] `docs/dist` 目录中是否有 `.md` 文件
- [ ] 浏览器控制台中的错误信息
- [ ] 网络请求是否成功（检查 Network 面板）

## 本地测试生产构建

```bash
# 构建
pnpm build:doc

# 预览
pnpm preview

# 或者使用 serve
npx serve docs/dist
```

## 部署步骤

1. 确保 `vercel.json` 配置正确
2. 推送到 Git 仓库
3. 在 Vercel 中连接仓库
4. Vercel 会自动检测配置并部署

## 调试技巧

如果部署后有问题：

1. **查看构建日志**
   - 在 Vercel Dashboard 中查看构建输出
   - 检查是否有错误或警告

2. **检查文件结构**
   - 在 Vercel 的部署详情中查看文件列表
   - 确认 `dist` 目录中有所有必要文件

3. **测试本地构建**
   ```bash
   pnpm build:doc
   ls -la docs/dist
   ```

4. **检查路由配置**
   - 确保 `rewrites` 配置正确
   - SPA 路由需要重写到 `index.html`
