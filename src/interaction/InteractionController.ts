import { vec3 } from "gl-matrix-esm";
import { Scene } from "../scene";
import { Controller } from "../controller";
import { Raycaster } from "./Raycaster";
import { EventManager } from "./EventManager";
import { InteractionEvent, InteractionEventType } from "./types";
import { ViewTools } from "../utils/ViewTools";

/**
 * 交互控制器
 * 负责监听原生 DOM 事件，转换为 InteractionEvent，并进行对象拾取
 */
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

    /**
     * 初始化事件监听
     */
    init(): void {
        const canvas = this.scene.context!.canvas;
        if (!canvas) {
            console.warn('Canvas not available, skipping interaction setup');
            return;
        }

        // 鼠标事件
        canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
        canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
        canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
        canvas.addEventListener('wheel', this.handleWheel.bind(this));
        canvas.addEventListener('contextmenu', this.handleContextMenu.bind(this));
        canvas.addEventListener('click', this.handleClick.bind(this));
        canvas.addEventListener('dblclick', this.handleDoubleClick.bind(this));

        // 触摸事件
        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
        canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });

        // 键盘事件（在 window 上监听）
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    /**
     * 处理鼠标按下事件
     */
    private handleMouseDown(event: MouseEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.MOUSE_DOWN,
            event
        );

        // 对象拾取
        this.performRaycast(interactionEvent);

        // 触发全局事件
        this.eventManager.emit(interactionEvent);

        // 传递给责任链（保持向后兼容）
        this.controller.chain.mousedown(event);

        // 触发对象事件
        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('mousedown', interactionEvent);
        }

        // 触发渲染（如果需要）
        this.scene.render();
    }

    /**
     * 处理鼠标释放事件
     */
    private handleMouseUp(event: MouseEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.MOUSE_UP,
            event
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);
        this.controller.chain.mouseup(event);

        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('mouseup', interactionEvent);
        }
    }

    /**
     * 处理鼠标移动事件
     */
    private handleMouseMove(event: MouseEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.MOUSE_MOVE,
            event
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);
        this.controller.chain.mousemove(event);

        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('mousemove', interactionEvent);
        }

        // 鼠标移动时持续渲染
        this.scene.render();
    }

    /**
     * 处理鼠标滚轮事件
     */
    private handleWheel(event: WheelEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.MOUSE_WHEEL,
            event
        );

        this.eventManager.emit(interactionEvent);

        // 实现缩放逻辑
        ViewTools.Zoom.ZoomByWheel(event.deltaY);

        // 触发渲染
        this.scene.render();

        event.preventDefault();
    }

    /**
     * 处理右键菜单事件
     */
    private handleContextMenu(event: MouseEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.CONTEXT_MENU,
            event
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);

        // 默认阻止右键菜单
        event.preventDefault();
    }

    /**
     * 处理点击事件
     */
    private handleClick(event: MouseEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.CLICK,
            event
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);

        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('click', interactionEvent);
        }
    }

    /**
     * 处理双击事件
     */
    private handleDoubleClick(event: MouseEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.DOUBLE_CLICK,
            event
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);

        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('dblclick', interactionEvent);
        }
    }

    /**
     * 处理触摸开始事件
     */
    private handleTouchStart(event: TouchEvent): void {
        if (event.touches.length === 0) return;

        const touch = event.touches[0];
        const interactionEvent = this.createInteractionEventFromTouch(
            InteractionEventType.TOUCH_START,
            event,
            touch
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);

        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('touchstart', interactionEvent);
        }

        event.preventDefault();
    }

    /**
     * 处理触摸结束事件
     */
    private handleTouchEnd(event: TouchEvent): void {
        if (event.changedTouches.length === 0) return;

        const touch = event.changedTouches[0];
        const interactionEvent = this.createInteractionEventFromTouch(
            InteractionEventType.TOUCH_END,
            event,
            touch
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);

        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('touchend', interactionEvent);
        }
    }

    /**
     * 处理触摸移动事件
     */
    private handleTouchMove(event: TouchEvent): void {
        if (event.touches.length === 0) return;

        const touch = event.touches[0];
        const interactionEvent = this.createInteractionEventFromTouch(
            InteractionEventType.TOUCH_MOVE,
            event,
            touch
        );

        this.performRaycast(interactionEvent);
        this.eventManager.emit(interactionEvent);

        if (interactionEvent.hitObject) {
            interactionEvent.hitObject.emit('touchmove', interactionEvent);
        }

        this.scene.render();
        event.preventDefault();
    }

    /**
     * 处理键盘按下事件
     */
    private handleKeyDown(event: KeyboardEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.KEY_DOWN,
            event
        );

        this.eventManager.emit(interactionEvent);

        // 处理缩放快捷键
        switch (event.key) {
            case '+':
            case '=':
            case 'PageUp':
                // 放大
                ViewTools.Zoom.ZoomIn();
                this.scene.render();
                event.preventDefault();
                break;
            case '-':
            case '_':
            case 'PageDown':
                // 缩小
                ViewTools.Zoom.ZoomOut();
                this.scene.render();
                event.preventDefault();
                break;
        }
    }

    /**
     * 处理键盘释放事件
     */
    private handleKeyUp(event: KeyboardEvent): void {
        const interactionEvent = this.createInteractionEvent(
            InteractionEventType.KEY_UP,
            event
        );

        this.eventManager.emit(interactionEvent);
    }

    /**
     * 执行射线检测
     */
    private performRaycast(event: InteractionEvent): void {
        try {
            const ray = this.raycaster.setFromCamera(
                event.clientX,
                event.clientY,
                this.scene.camera
            );

            // 获取所有可交互对象
            const objects = this.raycaster.getInteractableObjects();

            const intersections = this.raycaster.intersectObjects(ray, objects);

            if (intersections.length > 0) {
                const hit = intersections[0];
                event.hitObject = hit.object;
                event.hitDistance = hit.distance;
                event.hitPoint = hit.point;

                // 计算世界坐标
                if (hit.point) {
                    event.worldPosition = vec3.clone(hit.point);
                }
            }
        } catch (error) {
            console.warn('Raycast failed:', error);
        }
    }

    /**
     * 从鼠标事件创建 InteractionEvent
     */
    private createInteractionEvent(
        type: InteractionEventType,
        originalEvent: MouseEvent | WheelEvent | KeyboardEvent
    ): InteractionEvent {
        const canvas = this.scene.context!.canvas;
        const rect = canvas.getBoundingClientRect();

        let clientX = 0;
        let clientY = 0;
        let screenX = 0;
        let screenY = 0;
        let button: number | undefined;

        if (originalEvent instanceof MouseEvent || originalEvent instanceof WheelEvent) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
            screenX = originalEvent.clientX - rect.left;
            screenY = originalEvent.clientY - rect.top;
            button = originalEvent instanceof MouseEvent ? originalEvent.button : undefined;
        }

        return {
            type,
            originalEvent,
            screenX,
            screenY,
            clientX,
            clientY,
            button,
            ctrlKey: originalEvent.ctrlKey || false,
            shiftKey: originalEvent.shiftKey || false,
            altKey: originalEvent.altKey || false,
            metaKey: originalEvent.metaKey || false,
        };
    }

    /**
     * 从触摸事件创建 InteractionEvent
     */
    private createInteractionEventFromTouch(
        type: InteractionEventType,
        originalEvent: TouchEvent,
        touch: Touch
    ): InteractionEvent {
        const canvas = this.scene.context!.canvas;
        const rect = canvas.getBoundingClientRect();

        return {
            type,
            originalEvent,
            screenX: touch.clientX - rect.left,
            screenY: touch.clientY - rect.top,
            clientX: touch.clientX,
            clientY: touch.clientY,
            ctrlKey: false,
            shiftKey: false,
            altKey: false,
            metaKey: false,
        };
    }
}
