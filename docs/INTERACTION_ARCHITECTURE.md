# 交互事件系统架构概览

## 快速理解

### 当前架构（已实现）

```
用户操作 (鼠标/触摸)
    ↓
Canvas DOM 事件监听
    ↓
Controller.chain (责任链)
    ↓
CameraChain (处理相机旋转)
    ↓
ViewTools.Rotate (更新视图矩阵)
```

### 目标架构（设计）

```
用户操作
    ↓
InteractionController (统一入口)
    ├─→ 事件预处理
    ├─→ 坐标转换
    └─→ Raycaster (对象拾取)
         ↓
    EventManager (事件分发)
         ├─→ 全局监听器
         └─→ 对象监听器 (Cell.on/emit)
         ↓
    Event Chain (责任链)
         ├─→ CameraChain (相机控制)
         ├─→ ObjectChain (对象交互)
         └─→ CustomChain (自定义)
```

## 核心概念

### 1. 事件流

```
原生事件 → InteractionEvent → 对象拾取 → 事件分发 → 处理链 → 对象事件
```

### 2. 责任链模式

```typescript
// 多个处理器链式连接
Chain → CameraChain → ObjectChain → CustomChain

// 每个处理器可以：
// - 处理事件并返回 null（停止传递）
// - 处理事件并继续传递
// - 不处理，直接传递
```

### 3. 对象事件系统

```typescript
// Cell 继承 Event，支持事件监听
cell.on('click', handler)
cell.emit('customEvent', data)
```

### 4. 射线检测

```
屏幕坐标 → NDC → 世界坐标 → 射线 → 与几何体相交 → 返回命中对象
```

## 文件结构建议

```
src/
├── interaction/
│   ├── types.ts              # 事件类型定义
│   ├── EventManager.ts       # 事件管理器（单例）
│   ├── InteractionController.ts  # 交互控制器
│   ├── Raycaster.ts          # 射线检测器
│   └── utils/
│       ├── coordinate.ts     # 坐标转换工具
│       └── intersection.ts   # 相交检测算法
├── controller/
│   ├── chain/
│   │   ├── index.ts          # 责任链基类（已有）
│   │   ├── CameraChain.ts    # 相机链（已有）
│   │   └── ObjectChain.ts    # 对象交互链（新增）
│   └── state/                # 状态机（已有）
└── model/
    └── basic.ts              # Event 基类（需增强）
```

## 关键接口

### InteractionEvent

```typescript
{
  type: InteractionEventType,
  originalEvent: MouseEvent,
  screenX, screenY,
  clientX, clientY,
  hitObject?: Cell,      // 命中的对象
  hitPoint?: vec3,       // 命中点
  hitDistance?: number   // 命中距离
}
```

### Event 基类方法

```typescript
class Event {
  on(type: string, handler: Function): void
  off(type: string, handler: Function): void
  emit(type: string, data?: any, bubbles?: boolean): void
  once(type: string, handler: Function): void
}
```

## 使用场景

### 场景 1: 相机控制（已有）
```typescript
// 通过 CameraChain 处理
controller.switchState(RequestState.Camera)
```

### 场景 2: 对象选择（待实现）
```typescript
// 通过 ObjectChain 处理
cell.on('click', () => {
  // 选中对象
})
```

### 场景 3: 自定义交互（待实现）
```typescript
// 创建自定义链
class MyChain extends AbstractHandler {
  mousedown(event) {
    // 自定义逻辑
  }
}
```

## 实现步骤

1. **第一步**: 增强 Event 基类，支持事件注册/触发
2. **第二步**: 实现 EventManager，统一管理全局事件
3. **第三步**: 扩展 InteractionController，支持更多事件类型
4. **第四步**: 实现 Raycaster，支持对象拾取
5. **第五步**: 实现 ObjectChain，处理对象交互
6. **第六步**: 优化性能，添加节流/防抖
