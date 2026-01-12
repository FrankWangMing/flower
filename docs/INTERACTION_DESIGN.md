# 交互事件系统设计文档

## 一、现有架构分析

### 1.1 当前实现

项目已实现基础的交互系统，采用以下设计模式：

#### 责任链模式 (Chain of Responsibility)
- **位置**: `src/controller/chain/`
- **作用**: 处理鼠标事件的传递链
- **实现**:
  - `IHandler` 接口定义事件处理方法
  - `AbstractHandler` 抽象类实现链式传递
  - `CameraChain` 处理相机旋转交互

#### 状态机模式 (State Pattern)
- **位置**: `src/controller/state/`
- **作用**: 管理不同的交互状态（如相机控制模式）
- **实现**:
  - `State` 抽象类定义状态接口
  - `CameraState` 实现相机交互状态

#### 事件基类
- **位置**: `src/model/basic.ts`
- **作用**: Cell 继承自 Event 基类（待完善）

### 1.2 现有问题

1. **事件类型单一**: 仅支持鼠标事件（mousedown, mouseup, mousemove）
2. **缺少对象拾取**: 无法检测点击了哪个 3D 对象
3. **事件系统不完整**: Event 基类为空，无法注册/触发自定义事件
4. **缺少触摸支持**: 移动端交互未实现
5. **缺少键盘事件**: 无法处理键盘输入
6. **事件坐标转换**: 未实现屏幕坐标到 3D 坐标的转换

---

## 二、设计方案

### 2.1 整体架构

```
┌─────────────────────────────────────────┐
│           EventManager                  │  ← 事件管理器（单例）
│  - 事件注册/注销                         │
│  - 事件分发                              │
│  - 事件队列管理                          │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         InteractionController           │  ← 交互控制器
│  - 监听原生 DOM 事件                     │
│  - 坐标转换                              │
│  - 事件预处理                            │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         Raycaster (对象拾取)             │  ← 射线检测
│  - 屏幕坐标 → 世界坐标                    │
│  - 射线与几何体相交检测                   │
│  - 返回命中对象列表                       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         Event Chain (责任链)             │  ← 事件处理链
│  - CameraChain (相机控制)                │
│  - ObjectChain (对象交互)                 │
│  - CustomChain (自定义处理)               │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         Cell (3D 对象)                   │  ← 可交互对象
│  - 事件监听器注册                         │
│  - 事件触发                              │
│  - 事件冒泡                              │
└─────────────────────────────────────────┘
```

### 2.2 核心模块设计

#### 2.2.1 事件类型定义

```typescript
// src/interaction/types.ts

// 基础事件类型
export enum InteractionEventType {
  // 鼠标事件
  MOUSE_DOWN = 'mousedown',
  MOUSE_UP = 'mouseup',
  MOUSE_MOVE = 'mousemove',
  MOUSE_ENTER = 'mouseenter',
  MOUSE_LEAVE = 'mouseleave',
  MOUSE_WHEEL = 'wheel',
  CLICK = 'click',
  DOUBLE_CLICK = 'dblclick',
  CONTEXT_MENU = 'contextmenu',

  // 触摸事件
  TOUCH_START = 'touchstart',
  TOUCH_END = 'touchend',
  TOUCH_MOVE = 'touchmove',

  // 键盘事件
  KEY_DOWN = 'keydown',
  KEY_UP = 'keyup',
  KEY_PRESS = 'keypress',
}

// 交互事件数据
export interface InteractionEvent {
  type: InteractionEventType;
  originalEvent: MouseEvent | TouchEvent | KeyboardEvent | WheelEvent;
  screenX: number;  // 屏幕坐标 X
  screenY: number;  // 屏幕坐标 Y
  clientX: number;  // 客户端坐标 X
  clientY: number;  // 客户端坐标 Y
  button?: number;  // 鼠标按钮 (0=左键, 1=中键, 2=右键)
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;

  // 3D 相关
  worldPosition?: vec3;  // 世界坐标（如果命中对象）
  hitObject?: Cell;     // 命中的对象
  hitDistance?: number; // 命中距离
  hitPoint?: vec3;      // 命中点坐标
}

// 对象事件（Cell 触发）
export interface ObjectEvent {
  type: string;
  target: Cell;
  data?: any;
  bubbles?: boolean;  // 是否冒泡
}
```

#### 2.2.2 事件管理器 (EventManager)

```typescript
// src/interaction/EventManager.ts

export class EventManager {
  private static instance: EventManager;
  private listeners: Map<string, Set<Function>> = new Map();
  private eventQueue: InteractionEvent[] = [];

  static getInstance(): EventManager {
    if (!EventManager.instance) {
      EventManager.instance = new EventManager();
    }
    return EventManager.instance;
  }

  // 注册事件监听器
  on(eventType: InteractionEventType, handler: (event: InteractionEvent) => void): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType)!.add(handler);
  }

  // 注销事件监听器
  off(eventType: InteractionEventType, handler: (event: InteractionEvent) => void): void {
    const handlers = this.listeners.get(eventType);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  // 触发事件
  emit(event: InteractionEvent): void {
    const handlers = this.listeners.get(event.type);
    if (handlers) {
      handlers.forEach(handler => handler(event));
    }
  }

  // 一次性监听
  once(eventType: InteractionEventType, handler: (event: InteractionEvent) => void): void {
    const wrapper = (event: InteractionEvent) => {
      handler(event);
      this.off(eventType, wrapper);
    };
    this.on(eventType, wrapper);
  }
}
```

#### 2.2.3 射线检测器 (Raycaster)

```typescript
// src/interaction/Raycaster.ts

export class Raycaster {
  private scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  // 从屏幕坐标创建射线
  setFromCamera(screenX: number, screenY: number, camera: Camera): Ray {
    const canvas = this.scene.context!.canvas;
    const rect = canvas.getBoundingClientRect();

    // 归一化设备坐标 (NDC)
    const x = ((screenX - rect.left) / rect.width) * 2 - 1;
    const y = -((screenY - rect.top) / rect.height) * 2 + 1;

    // 创建射线
    const ray = new Ray();
    // 使用相机矩阵计算射线方向和起点
    // ... 实现细节

    return ray;
  }

  // 检测射线与对象的相交
  intersectObjects(ray: Ray, objects: Cell[]): Intersection[] {
    const intersections: Intersection[] = [];

    for (const object of objects) {
      const intersection = this.intersectObject(ray, object);
      if (intersection) {
        intersections.push(intersection);
      }
    }

    // 按距离排序
    intersections.sort((a, b) => a.distance - b.distance);

    return intersections;
  }

  // 检测射线与单个对象的相交
  private intersectObject(ray: Ray, object: Cell): Intersection | null {
    // 使用对象的包围盒或几何体进行相交检测
    // ... 实现细节
    return null;
  }
}

interface Ray {
  origin: vec3;
  direction: vec3;
}

interface Intersection {
  object: Cell;
  distance: number;
  point: vec3;
  face?: any;  // 命中的面
}
```

#### 2.2.4 交互控制器 (InteractionController)

```typescript
// src/interaction/InteractionController.ts

export class InteractionController {
  private scene: Scene;
  private raycaster: Raycaster;
  private eventManager: EventManager;
  private controller: Controller;

  constructor(scene: Scene) {
    this.scene = scene;
    this.raycaster = new Raycaster(scene);
    this.eventManager = EventManager.getInstance();
    this.controller = scene.controller;
  }

  init(): void {
    const canvas = this.scene.context!.canvas;

    // 鼠标事件
    canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
    canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
    canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    canvas.addEventListener('wheel', this.handleWheel.bind(this));
    canvas.addEventListener('contextmenu', this.handleContextMenu.bind(this));

    // 触摸事件
    canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
    canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
    canvas.addEventListener('touchmove', this.handleTouchMove.bind(this));

    // 键盘事件
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  private handleMouseDown(event: MouseEvent): void {
    const interactionEvent = this.createInteractionEvent(
      InteractionEventType.MOUSE_DOWN,
      event
    );

    // 对象拾取
    this.performRaycast(interactionEvent);

    // 触发事件
    this.eventManager.emit(interactionEvent);

    // 传递给责任链
    this.controller.chain.mousedown(event);

    // 触发对象事件
    if (interactionEvent.hitObject) {
      interactionEvent.hitObject.emit('mousedown', interactionEvent);
    }
  }

  private performRaycast(event: InteractionEvent): void {
    const ray = this.raycaster.setFromCamera(
      event.clientX,
      event.clientY,
      this.scene.camera
    );

    // 获取所有可交互对象
    const objects = this.scene.getInteractableObjects();

    const intersections = this.raycaster.intersectObjects(ray, objects);

    if (intersections.length > 0) {
      const hit = intersections[0];
      event.hitObject = hit.object;
      event.hitDistance = hit.distance;
      event.hitPoint = hit.point;
      // 计算世界坐标...
    }
  }

  private createInteractionEvent(
    type: InteractionEventType,
    originalEvent: MouseEvent | TouchEvent | KeyboardEvent | WheelEvent
  ): InteractionEvent {
    // 转换事件数据
    // ... 实现细节
  }
}
```

#### 2.2.5 增强的 Event 基类

```typescript
// src/model/basic.ts

export class Event {
  private eventListeners: Map<string, Set<Function>> = new Map();
  public parent: Event | null = null;  // 用于事件冒泡

  // 注册事件监听器
  on(eventType: string, handler: Function): void {
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, new Set());
    }
    this.eventListeners.get(eventType)!.add(handler);
  }

  // 注销事件监听器
  off(eventType: string, handler: Function): void {
    const handlers = this.eventListeners.get(eventType);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  // 触发事件
  emit(eventType: string, data?: any, bubbles: boolean = true): void {
    // 触发当前对象的事件
    const handlers = this.eventListeners.get(eventType);
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }

    // 事件冒泡
    if (bubbles && this.parent) {
      this.parent.emit(eventType, data, bubbles);
    }
  }

  // 一次性监听
  once(eventType: string, handler: Function): void {
    const wrapper = (data: any) => {
      handler(data);
      this.off(eventType, wrapper);
    };
    this.on(eventType, wrapper);
  }
}
```

#### 2.2.6 对象交互链 (ObjectChain)

```typescript
// src/controller/chain/ObjectChain.ts

export class ObjectChain extends AbstractHandler {
  private scene: Scene;

  constructor(scene: Scene) {
    super();
    this.scene = scene;
  }

  mousedown(request: MouseEvent): MouseEvent | null {
    // 对象交互逻辑
    // 例如：选中对象、拖拽对象等
    return super.mousedown(request);
  }

  mousemove(request: MouseEvent): MouseEvent | null {
    // 对象交互逻辑
    return super.mousemove(request);
  }

  mouseup(request: MouseEvent): MouseEvent | null {
    // 对象交互逻辑
    return super.mouseup(request);
  }
}
```

### 2.3 使用示例

#### 2.3.1 全局事件监听

```typescript
import { EventManager } from './interaction/EventManager';
import { InteractionEventType } from './interaction/types';

const eventManager = EventManager.getInstance();

// 监听所有点击事件
eventManager.on(InteractionEventType.CLICK, (event) => {
  if (event.hitObject) {
    console.log('点击了对象:', event.hitObject);
    console.log('命中点:', event.hitPoint);
  }
});
```

#### 2.3.2 对象事件监听

```typescript
const cell = new Cell({ geometry, material });

// 监听对象的点击事件
cell.on('click', (event) => {
  console.log('Cell 被点击了');
  // 改变材质颜色
  cell.material.uniforms.color = [1, 0, 0, 1];
});

// 监听鼠标进入
cell.on('mouseenter', () => {
  // 高亮效果
});

// 监听鼠标离开
cell.on('mouseleave', () => {
  // 恢复原样
});
```

#### 2.3.3 自定义交互链

```typescript
// src/controller/chain/SelectionChain.ts

export class SelectionChain extends AbstractHandler {
  private selectedObjects: Set<Cell> = new Set();

  mousedown(request: MouseEvent): MouseEvent | null {
    // 选择逻辑
    const event = // ... 获取 InteractionEvent
    if (event.hitObject) {
      this.selectedObjects.add(event.hitObject);
      event.hitObject.emit('selected');
    }
    return super.mousedown(request);
  }
}
```

---

## 三、实现优先级

### Phase 1: 基础事件系统
1. ✅ 完善 Event 基类（事件注册/触发）
2. ✅ 实现 EventManager（全局事件管理）
3. ✅ 扩展 InteractionEvent 类型定义
4. ✅ 增强 InteractionController（支持更多事件类型）

### Phase 2: 对象拾取
1. ⏳ 实现 Raycaster（射线检测）
2. ⏳ 实现包围盒计算
3. ⏳ 实现几何体相交检测
4. ⏳ 坐标转换（屏幕 → NDC → 世界）

### Phase 3: 高级交互
1. ⏳ 触摸事件支持
2. ⏳ 键盘事件支持
3. ⏳ 手势识别（缩放、旋转、平移）
4. ⏳ 事件冒泡机制

### Phase 4: 优化与扩展
1. ⏳ 事件节流/防抖
2. ⏳ 性能优化（空间索引）
3. ⏳ 自定义交互链
4. ⏳ 交互状态管理

---

## 四、技术要点

### 4.1 坐标转换

```
屏幕坐标 (clientX, clientY)
    ↓
Canvas 坐标 (考虑 DPR)
    ↓
归一化设备坐标 NDC (-1 到 1)
    ↓
裁剪空间坐标
    ↓
世界坐标 (通过逆投影矩阵)
```

### 4.2 射线与几何体相交

- **包围盒检测**: 快速剔除（AABB/OBB）
- **精确相交**: 与三角形网格相交
- **性能优化**: 空间分割（BVH/Octree）

### 4.3 事件处理性能

- **事件节流**: mousemove 事件节流
- **按需检测**: 只在需要时进行射线检测
- **对象过滤**: 只检测可见/可交互对象

---

## 五、API 设计原则

1. **一致性**: 与 DOM 事件 API 保持一致
2. **可扩展性**: 易于添加新的事件类型和处理链
3. **性能**: 最小化不必要的计算
4. **易用性**: 提供简洁的 API，隐藏复杂实现

---

## 六、参考实现

- **Three.js**: Raycaster, EventDispatcher
- **Babylon.js**: PointerEvent, PickingInfo
- **React Three Fiber**: useFrame, useThree
