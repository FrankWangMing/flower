// Demo 配置列表
export interface DemoConfig {
  id: string;
  title: string;
  description: string;
  src: string;
  category?: string;
}

export const demos: DemoConfig[] = [
  {
    id: 'basic',
    title: '基础渲染',
    description: '加载 cube.json 并渲染立方体',
    src: './src/demo.tsx',
    category: '基础',
  },
  {
    id: 'glb',
    title: 'GLB 模型加载',
    description: '加载 GLB 格式的 3D 模型',
    src: './src/demo-glb.tsx',
    category: '加载器',
  },
  {
    id: 'multiple',
    title: '多模型场景',
    description: '在场景中添加多个立方体',
    src: './src/demo-multiple.tsx',
    category: '场景',
  },
  {
    id: 'interactive',
    title: '交互式控制',
    description: '尝试拖拽鼠标旋转视角',
    src: './src/demo-interactive.tsx',
    category: '交互',
  },
  {
    id: 'materials',
    title: '材质系统',
    description: '创建多个 Material 实例',
    src: './src/demo-materials.tsx',
    category: '材质',
  },
  {
    id: 'rotation',
    title: '动画旋转',
    description: '立方体绕 Y 轴持续旋转',
    src: './src/demo-rotation.tsx',
    category: '动画',
  },
];

// 按分类分组
export const demosByCategory = demos.reduce((acc, demo) => {
  const category = demo.category || '其他';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(demo);
  return acc;
}, {} as Record<string, DemoConfig[]>);
