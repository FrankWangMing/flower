# 交互事件系统使用指南

## 快速开始

### 基础使用

交互事件系统已经集成到 `Scene` 和 `Controller` 中，无需额外配置即可使用。

```typescript
import { Scene, Cell, Geometry, Material, Buffer } from 'flower';
import { EventManager, InteractionEventType } from 'flower';

// 创建场景
const scene = new Scene();
scene.mount(container);

// 创建对象
const cell = new Cell({ geometry, material });
scene.add(cell);
scene.build();

// 全局事件监听
const eventManager = EventManager.getInstance();
eventManager.on(InteractionEventType.CLICK, (event) => {
  if (event.hitObject) {
    console.log('点击了对象:', event.hitObject);
    console.log('命中点:', event.hitPoint);
  }
});

// 对象事件监听
cell.on('click', (event) => {
  console.log('Cell 被点击了');
  // 改变材质颜色等
});
```

## API 参考

### EventManager（事件管理器）

全局事件管理器，使用单例模式。

```typescript
import { EventManager, InteractionEventType } from 'flower';

const eventManager = EventManager.getInstance();

// 注册事件监听
eventManager.on(InteractionEventType.CLICK, (event) => {
  // 处理点击事件
});

// 一次性监听
eventManager.once(InteractionEventType.CLICK, (event) => {
  // 只触发一次
});

// 注销监听
const handler = (event) => { /* ... */ };
eventManager.on(InteractionEventType.CLICK, handler);
eventManager.off(InteractionEventType.CLICK, handler);

// 移除所有监听
eventManager.removeAllListeners(InteractionEventType.CLICK);
```

### Cell 事件系统

每个 `Cell` 对象都继承自 `Event` 基类，支持事件监听。

```typescript
const cell = new Cell({ geometry, material });

// 监听事件
cell.on('click', (event) => {
  console.log('点击了 cell');
});

cell.on('mousedown', (event) => {
  console.log('鼠标按下');
});

cell.on('mouseenter', () => {
  console.log('鼠标进入');
});

cell.on('mouseleave', () => {
  console.log('鼠标离开');
});

// 触发自定义事件
cell.emit('customEvent', { data: 'some data' });

// 一次性监听
cell.once('click', (event) => {
  console.log('只触发一次');
});

// 注销监听
const handler = (event) => { /* ... */ };
cell.on('click', handler);
cell.off('click', handler);
```

### 支持的事件类型

#### 鼠标事件
- `MOUSE_DOWN` - 鼠标按下
- `MOUSE_UP` - 鼠标释放
- `MOUSE_MOVE` - 鼠标移动
- `CLICK` - 点击
- `DOUBLE_CLICK` - 双击
- `MOUSE_WHEEL` - 滚轮
- `CONTEXT_MENU` - 右键菜单

#### 触摸事件
- `TOUCH_START` - 触摸开始
- `TOUCH_END` - 触摸结束
- `TOUCH_MOVE` - 触摸移动

#### 键盘事件
- `KEY_DOWN` - 按键按下
- `KEY_UP` - 按键释放
- `KEY_PRESS` - 按键按下（字符）

### InteractionEvent 接口

```typescript
interface InteractionEvent {
  type: InteractionEventType;
  originalEvent: MouseEvent | TouchEvent | KeyboardEvent | WheelEvent;
  screenX: number;      // 屏幕坐标 X
  screenY: number;      // 屏幕坐标 Y
  clientX: number;     // 客户端坐标 X
  clientY: number;     // 客户端坐标 Y
  button?: number;      // 鼠标按钮 (0=左键, 1=中键, 2=右键)
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;

  // 3D 相关（如果命中对象）
  worldPosition?: vec3;  // 世界坐标
  hitObject?: Cell;     // 命中的对象
  hitDistance?: number; // 命中距离
  hitPoint?: vec3;      // 命中点坐标
}
```

## 使用示例

### 示例 1: 对象选择

```typescript
const selectedCell: Cell | null = null;

eventManager.on(InteractionEventType.CLICK, (event) => {
  if (event.hitObject) {
    // 取消之前的选择
    if (selectedCell) {
      // 恢复原样
    }

    // 选择新对象
    selectedCell = event.hitObject;
    console.log('选中了对象:', selectedCell);
  }
});
```

### 示例 2: 对象高亮

```typescript
const cells: Cell[] = [/* ... */];

cells.forEach(cell => {
  cell.on('mouseenter', () => {
    // 高亮效果
    cell.material.uniforms.color = [1, 1, 0, 1]; // 黄色
  });

  cell.on('mouseleave', () => {
    // 恢复原样
    cell.material.uniforms.color = [1, 1, 1, 1]; // 白色
  });
});
```

### 示例 3: 拖拽对象

```typescript
let isDragging = false;
let dragStartPos: vec3 | null = null;

eventManager.on(InteractionEventType.MOUSE_DOWN, (event) => {
  if (event.hitObject) {
    isDragging = true;
    dragStartPos = event.hitPoint || null;
  }
});

eventManager.on(InteractionEventType.MOUSE_MOVE, (event) => {
  if (isDragging && dragStartPos && event.hitPoint) {
    // 计算移动距离
    const delta = vec3.create();
    vec3.subtract(delta, event.hitPoint, dragStartPos);

    // 更新对象位置
    // ...
  }
});

eventManager.on(InteractionEventType.MOUSE_UP, () => {
  isDragging = false;
  dragStartPos = null;
});
```

### 示例 4: 键盘控制

```typescript
eventManager.on(InteractionEventType.KEY_DOWN, (event) => {
  const keyEvent = event.originalEvent as KeyboardEvent;

  switch (keyEvent.key) {
    case 'ArrowUp':
      // 向上移动
      break;
    case 'ArrowDown':
      // 向下移动
      break;
    case ' ':
      // 空格键
      break;
  }
});
```

## 注意事项

1. **事件冒泡**: Cell 事件支持冒泡，可以通过 `parent` 属性设置父子关系
2. **性能**: 射线检测在每次鼠标移动时都会执行，对于复杂场景可能需要优化
3. **坐标系统**:
   - `screenX/screenY`: 相对于 canvas 的坐标
   - `clientX/clientY`: 相对于视口的坐标
   - `worldPosition/hitPoint`: 3D 世界坐标
4. **向后兼容**: 原有的 `Controller.chain` 责任链仍然可用，新的事件系统与其并行工作

## 高级用法

### 自定义交互链

```typescript
import { AbstractHandler } from 'flower';

class MyCustomChain extends AbstractHandler {
  mousedown(request: MouseEvent): MouseEvent | null {
    // 自定义逻辑
    return super.mousedown(request);
  }
}

// 在 Controller 中使用
controller.chain.setNext(new MyCustomChain());
```

### 射线检测

```typescript
import { Raycaster } from 'flower';

const raycaster = new Raycaster(scene);
const ray = raycaster.setFromCamera(mouseX, mouseY, scene.camera);
const intersections = raycaster.intersectObjects(ray, scene.getInteractableObjects());

if (intersections.length > 0) {
  const hit = intersections[0];
  console.log('命中对象:', hit.object);
  console.log('距离:', hit.distance);
  console.log('命中点:', hit.point);
}
```

## 故障排除

### 事件没有触发

1. 确保场景已正确初始化：`scene.mount()` 和 `scene.build()` 已调用
2. 检查 canvas 是否正确挂载
3. 确认对象已添加到场景：`scene.add(cell)`

### 对象拾取不准确

1. 当前使用简化的包围盒检测，复杂几何体可能需要精确相交检测
2. 检查相机矩阵是否正确更新
3. 确认坐标转换是否正确

### 性能问题

1. 对于大量对象，考虑使用空间索引（BVH/Octree）
2. 对 `mousemove` 事件进行节流
3. 只检测可见对象
