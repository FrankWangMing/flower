import { vec3 } from "gl-matrix-esm";
import { Cell } from "../model/cell";

/**
 * 交互事件类型枚举
 */
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

/**
 * 交互事件数据接口
 */
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

/**
 * 对象事件接口（Cell 触发）
 */
export interface ObjectEvent {
  type: string;
  target: Cell;
  data?: any;
  bubbles?: boolean;  // 是否冒泡
}
