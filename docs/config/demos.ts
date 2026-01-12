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
    src: './demos/demo.tsx',
    category: '基础',
  },
  {
    id: 'glb',
    title: 'GLB 模型加载',
    description: '加载 GLB 格式的 3D 模型',
    src: './demos/demo-glb.tsx',
    category: '加载器',
  },
  {
    id: 'multiple',
    title: '多模型场景',
    description: '在场景中添加多个立方体',
    src: './demos/demo-multiple.tsx',
    category: '场景',
  },
  {
    id: 'interactive',
    title: '交互式控制',
    description: '尝试拖拽鼠标旋转视角',
    src: './demos/demo-interactive.tsx',
    category: '交互',
  },
  {
    id: 'materials',
    title: '材质系统',
    description: '创建多个 Material 实例',
    src: './demos/demo-materials.tsx',
    category: '材质',
  },
  {
    id: 'rotation',
    title: '动画旋转',
    description: '立方体绕 Y 轴持续旋转',
    src: './demos/demo-rotation.tsx',
    category: '动画',
  },
  {
    id: 'animation',
    title: '动画系统',
    description: '演示补间动画、关键帧动画和变换动画',
    src: './demos/demo-animation.tsx',
    category: '动画',
  },
  {
    id: 'tween-simple',
    title: '简单补间动画',
    description: '基础的补间动画，可切换不同缓动函数',
    src: './demos/demo-tween-simple.tsx',
    category: '动画',
  },
  {
    id: 'easing',
    title: '缓动函数',
    description: '展示所有可用的缓动函数效果',
    src: './demos/demo-easing.tsx',
    category: '动画',
  },
  {
    id: 'keyframe',
    title: '关键帧动画',
    description: '复杂的关键帧路径动画演示',
    src: './demos/demo-keyframe.tsx',
    category: '动画',
  },
  {
    id: 'complex-animation',
    title: '复杂动画',
    description: '多个动画同时进行：位置、旋转、缩放',
    src: './demos/demo-complex-animation.tsx',
    category: '动画',
  },
  {
    id: 'events',
    title: '交互事件系统',
    description: '展示全局事件监听、对象事件、对象拾取等功能',
    src: './demos/demo-events.tsx',
    category: '交互',
  },
  {
    id: 'render-modes',
    title: '渲染模式',
    description: '切换不同的渲染模式：实体、线框、点云、线条',
    src: './demos/demo-render-modes.tsx',
    category: '材质',
  },
  {
    id: 'custom-shader',
    title: '自定义 Shader',
    description: '创建自定义 Shader 实现渐变效果',
    src: './demos/demo-custom-shader.tsx',
    category: '高级',
  },
  {
    id: 'shader-features',
    title: 'Shader 功能扩展',
    description: '使用 ExtendedMaterial 启用雾效、时间动画等功能',
    src: './demos/demo-shader-features.tsx',
    category: '高级',
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
