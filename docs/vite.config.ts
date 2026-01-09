import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'node:path';

export default defineConfig({
  // 让 Vite 以 `docs/` 为站点根目录
  root: __dirname,
  plugins: [react()],
  // 复用项目根目录 public（提供 /cube.json 等静态资源）
  publicDir: path.resolve(__dirname, '..', 'public'),
  resolve: {
    alias: {
      // 在 docs 里直接引用源码（不依赖已构建的 lib）
      '@flower': path.resolve(__dirname, '..', 'src'),
    },
  },
});

