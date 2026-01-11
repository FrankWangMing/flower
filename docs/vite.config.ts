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

export default defineConfig({
  // 让 Vite 以 `docs/` 为站点根目录
  root: __dirname,
  plugins: [react(), markdownPlugin()],
  // 复用项目根目录 public（提供 /cube.json 等静态资源）
  publicDir: path.resolve(__dirname, '..', 'public'),
  resolve: {
    alias: {
      // 在 docs 里直接引用源码（不依赖已构建的 lib）
      '@flower': path.resolve(__dirname, '..', 'src'),
    },
  },
});

