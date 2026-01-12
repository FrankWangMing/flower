/**
 * 事件基类
 * 提供事件注册、触发、冒泡功能
 */
export class Event {
    private eventListeners: Map<string, Set<Function>> = new Map();
    public parent: Event | null = null;  // 用于事件冒泡

    constructor() {
    }

    /**
     * 注册事件监听器
     * @param eventType 事件类型
     * @param handler 事件处理函数
     */
    on(eventType: string, handler: Function): void {
        if (!this.eventListeners.has(eventType)) {
            this.eventListeners.set(eventType, new Set());
        }
        this.eventListeners.get(eventType)!.add(handler);
    }

    /**
     * 注销事件监听器
     * @param eventType 事件类型
     * @param handler 事件处理函数
     */
    off(eventType: string, handler: Function): void {
        const handlers = this.eventListeners.get(eventType);
        if (handlers) {
            handlers.delete(handler);
        }
    }

    /**
     * 触发事件
     * @param eventType 事件类型
     * @param data 事件数据
     * @param bubbles 是否冒泡，默认为 true
     */
    emit(eventType: string, data?: any, bubbles: boolean = true): void {
        // 触发当前对象的事件
        const handlers = this.eventListeners.get(eventType);
        if (handlers) {
            handlers.forEach(handler => {
                try {
                    handler(data);
                } catch (error) {
                    console.error(`Error in event handler for ${eventType}:`, error);
                }
            });
        }

        // 事件冒泡
        if (bubbles && this.parent) {
            this.parent.emit(eventType, data, bubbles);
        }
    }

    /**
     * 一次性监听事件
     * @param eventType 事件类型
     * @param handler 事件处理函数
     */
    once(eventType: string, handler: Function): void {
        const wrapper = (data: any) => {
            handler(data);
            this.off(eventType, wrapper);
        };
        this.on(eventType, wrapper);
    }

    /**
     * 移除所有指定类型的事件监听器
     * @param eventType 事件类型，如果不提供则移除所有
     */
    removeAllListeners(eventType?: string): void {
        if (eventType) {
            this.eventListeners.delete(eventType);
        } else {
            this.eventListeners.clear();
        }
    }
}
