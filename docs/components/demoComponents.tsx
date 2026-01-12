// 静态导入所有 demo 组件，确保在生产构建时被正确打包
import Demo from '../demos/demo';
import DemoGLB from '../demos/demo-glb';
import DemoMultiple from '../demos/demo-multiple';
import DemoInteractive from '../demos/demo-interactive';
import DemoMaterials from '../demos/demo-materials';
import DemoRotation from '../demos/demo-rotation';
import DemoEvents from '../demos/demo-events';

// Demo 组件映射表
export const demoComponents: Record<string, React.ComponentType> = {
  './demos/demo.tsx': Demo,
  './demos/demo-glb.tsx': DemoGLB,
  './demos/demo-multiple.tsx': DemoMultiple,
  './demos/demo-interactive.tsx': DemoInteractive,
  './demos/demo-materials.tsx': DemoMaterials,
  './demos/demo-rotation.tsx': DemoRotation,
  './demos/demo-events.tsx': DemoEvents,
};

// 根据路径获取组件
export function getDemoComponent(src: string): React.ComponentType | null {
  return demoComponents[src] || null;
}
