import { InteractionEvent, InteractionEventType } from "./types";

/**
 * 事件管理器（单例模式）
 * 负责全局事件的注册、注销和分发
 */
export class EventManager {
    private static instance: EventManager;
    private listeners: Map<InteractionEventType, Set<(event: InteractionEvent) => void>> = new Map();
    private eventQueue: InteractionEvent[] = [];
    private isProcessing: boolean = false;

    private constructor() {
    }

    /**
     * 获取单例实例
     */
    static getInstance(): EventManager {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager();
        }
        return EventManager.instance;
    }

    /**
     * 注册事件监听器
     * @param eventType 事件类型
     * @param handler 事件处理函数
     */
    on(eventType: InteractionEventType, handler: (event: InteractionEvent) => void): void {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, new Set());
        }
        this.listeners.get(eventType)!.add(handler);
    }

    /**
     * 注销事件监听器
     * @param eventType 事件类型
     * @param handler 事件处理函数
     */
    off(eventType: InteractionEventType, handler: (event: InteractionEvent) => void): void {
        const handlers = this.listeners.get(eventType);
        if (handlers) {
            handlers.delete(handler);
        }
    }

    /**
     * 触发事件
     * @param event 交互事件
     */
    emit(event: InteractionEvent): void {
        // 将事件加入队列
        this.eventQueue.push(event);

        // 如果当前没有在处理事件，则开始处理
        if (!this.isProcessing) {
            this.processEventQueue();
        }
    }

    /**
     * 处理事件队列
     */
    private processEventQueue(): void {
        this.isProcessing = true;

        while (this.eventQueue.length > 0) {
            const event = this.eventQueue.shift()!;
            const handlers = this.listeners.get(event.type);

            if (handlers) {
                handlers.forEach(handler => {
                    try {
                        handler(event);
                    } catch (error) {
                        console.error(`Error in event handler for ${event.type}:`, error);
                    }
                });
            }
        }

        this.isProcessing = false;
    }

    /**
     * 一次性监听事件
     * @param eventType 事件类型
     * @param handler 事件处理函数
     */
    once(eventType: InteractionEventType, handler: (event: InteractionEvent) => void): void {
        const wrapper = (event: InteractionEvent) => {
            handler(event);
            this.off(eventType, wrapper);
        };
        this.on(eventType, wrapper);
    }

    /**
     * 移除所有指定类型的事件监听器
     * @param eventType 事件类型，如果不提供则移除所有
     */
    removeAllListeners(eventType?: InteractionEventType): void {
        if (eventType) {
            this.listeners.delete(eventType);
        } else {
            this.listeners.clear();
        }
    }

    /**
     * 获取指定事件类型的监听器数量
     * @param eventType 事件类型
     */
    listenerCount(eventType: InteractionEventType): number {
        const handlers = this.listeners.get(eventType);
        return handlers ? handlers.size : 0;
    }
}
