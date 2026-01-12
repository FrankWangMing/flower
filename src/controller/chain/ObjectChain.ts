import { AbstractHandler } from "./index.ts";
import { MouseEvent } from "react";
import { Scene } from "../../scene";

/**
 * 对象交互链
 * 处理 3D 对象的交互（选择、拖拽等）
 */
export class ObjectChain extends AbstractHandler {
    private scene: Scene;
    private selectedObjects: Set<any> = new Set();

    constructor(scene: Scene) {
        super();
        this.scene = scene;
    }

    mousedown(request: MouseEvent): MouseEvent | null {
        // 对象交互逻辑
        // 例如：选中对象、开始拖拽等
        // TODO: 实现对象选择逻辑

        // 继续传递给下一个处理器
        return super.mousedown(request);
    }

    mousemove(request: MouseEvent): MouseEvent | null {
        // 对象交互逻辑
        // 例如：拖拽对象、高亮等
        // TODO: 实现对象拖拽逻辑

        return super.mousemove(request);
    }

    mouseup(request: MouseEvent): MouseEvent | null {
        // 对象交互逻辑
        // 例如：结束拖拽等
        // TODO: 实现对象交互结束逻辑

        return super.mouseup(request);
    }

    /**
     * 获取选中的对象
     */
    getSelectedObjects(): any[] {
        return Array.from(this.selectedObjects);
    }

    /**
     * 清除所有选中
     */
    clearSelection(): void {
        this.selectedObjects.clear();
    }
}
