// 静态导入所有 demo 组件，确保在生产构建时被正确打包
import Demo from '../demo';
import DemoGLB from '../demo-glb';
import DemoMultiple from '../demo-multiple';
import DemoInteractive from '../demo-interactive';
import DemoMaterials from '../demo-materials';
import DemoRotation from '../demo-rotation';

// Demo 组件映射表
export const demoComponents: Record<string, React.ComponentType> = {
  './src/demo.tsx': Demo,
  './src/demo-glb.tsx': DemoGLB,
  './src/demo-multiple.tsx': DemoMultiple,
  './src/demo-interactive.tsx': DemoInteractive,
  './src/demo-materials.tsx': DemoMaterials,
  './src/demo-rotation.tsx': DemoRotation,
};

// 根据路径获取组件
export function getDemoComponent(src: string): React.ComponentType | null {
  return demoComponents[src] || null;
}
