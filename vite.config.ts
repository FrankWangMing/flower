import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  mode:"development",
  plugins: [react()],
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, 'lib')
    }
  },
  build:{
    lib:{
      entry:'src/index.ts',
      name:"flower",
      fileName: 'flower',
    },
    rollupOptions:{
      // external:['lodash',"gl-matrix-esm"]
    },
    outDir:"lib"
  },
})
