import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 简单的 Markdown 导入插件
function markdownPlugin() {
  return {
    name: 'markdown-loader',
    // 解析 .md 文件的导入路径
    resolveId(id: string) {
      if (id.endsWith('.md')) {
        // 如果是相对路径，解析为绝对路径
        if (id.startsWith('./') || id.startsWith('../')) {
          const resolved = path.resolve(__dirname, id);
          if (fs.existsSync(resolved)) {
            return resolved;
          }
        }
        // 如果是绝对路径，直接返回
        if (path.isAbsolute(id) && fs.existsSync(id)) {
          return id;
        }
      }
      return null;
    },
    // 加载 .md 文件内容
    load(id: string) {
      if (id.endsWith('.md') && fs.existsSync(id)) {
        const content = fs.readFileSync(id, 'utf-8');
        return `export default ${JSON.stringify(content)};`;
      }
      return null;
    },
  };
}

// 构建时复制 Markdown 文件到输出目录
function copyMarkdownPlugin() {
  return {
    name: 'copy-markdown',
    writeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const mdFiles = [
        'index.md',
        'getting-started.md',
        'api/index.md',
        'api/scene.md',
        'api/cell.md',
        'api/geometry.md',
        'api/material.md',
      ];

      mdFiles.forEach((file) => {
        const srcPath = path.resolve(__dirname, file);
        if (fs.existsSync(srcPath)) {
          const destPath = path.resolve(distDir, file);
          const destDir = path.dirname(destPath);
          // 确保目标目录存在
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }
          // 复制文件
          fs.copyFileSync(srcPath, destPath);
        }
      });
    },
  };
}

export default defineConfig({
  // 让 Vite 以 `docs/` 为站点根目录
  root: __dirname,
  plugins: [react(), markdownPlugin(), copyMarkdownPlugin()],
  // 复用项目根目录 public（提供 /cube.json 等静态资源）
  publicDir: path.resolve(__dirname, '..', 'public'),
  resolve: {
    alias: {
      // 在 docs 里直接引用源码（不依赖已构建的 lib）
      '@flower': path.resolve(__dirname, '..', 'src'),
    },
  },
  build: {
    outDir: 'dist',
    // 确保静态资源被正确处理
    assetsDir: 'assets',
  },
});

