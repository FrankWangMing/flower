import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    lib:{
      entry:"src/index.ts",
      name:"demo",
      formats:["cjs","es"]
    },
    rollupOptions:{
      external:['lodash-es']
    },
    outDir:"lib"
  }
})
