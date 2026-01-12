import { Context } from "../context/context";
import { Model } from "../model";

import { RenderList } from "../renderer/renderList";
import { Background } from "./background";
import { Cell } from "../model/cell";
import { Controller } from "../controller";
import { Camera } from "../camera";
import { AnimationManager } from "../animation";

export class Scene extends RenderList {
    context: Context | undefined
    constructor() {
        super()
    }
    background: Background = new Background()
    model: Model = new Model()
    camera: Camera
    controller: Controller = new Controller()
    animationManager: AnimationManager = new AnimationManager()
    /*
    挂载 dom 节点
    * */
    mount(mount: HTMLDivElement) {
        this.context = new Context(mount)
        this.init()
    }
    /*
    初始化函数
     */
    init() {
        this.camera = new Camera(this)
        this.controller.init(this)

    }
    get gl(): WebGL2RenderingContext {
        return this.context?.gl as WebGL2RenderingContext
    }

    /*
    构建渲染队列
    */
    build() {
        super.build(this.gl)
    }

    /*执行渲染*/
    render() {
        // 更新动画
        this.animationManager.update()
        super.render(this.gl)
    }

    add(cell: Cell) {
        this.push(cell)
    }

    /**
     * 获取场景中所有可交互的对象
     * @returns Cell 数组
     */
    getInteractableObjects(): Cell[] {
        // Scene 继承自 RenderList，而 RenderList 继承自 Array<Cell>
        return Array.from(this);
    }

    /**
     * 销毁场景，清理所有资源
     */
    destroy(): void {
        // 停止所有动画
        if (this.animationManager) {
            this.animationManager.stopAll();
        }

        // 清理控制器（移除事件监听器）
        if (this.controller && this.controller.interactionController) {
            // InteractionController 的事件监听器会在容器清空时自动清理
        }

        // 清空渲染队列
        if (this.context && this.context.gl) {
            this.destroyQueue(this.context.gl);
        }

        // 清空所有对象
        this.length = 0;

        // 清空容器（移除 canvas）
        if (this.context && this.context.canvas && this.context.canvas.parentNode) {
            this.context.canvas.parentNode.removeChild(this.context.canvas);
        }

        // 清理上下文引用
        this.context = undefined;
    }
}
