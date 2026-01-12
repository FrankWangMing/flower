import { Scene } from "../scene";
import { State } from "./state";
import { CameraState } from "./state/CameraState.ts";
import { Chain } from "./chain";
import { CameraChain } from "./chain/CameraChain.ts";
import { InteractionController } from "../interaction/InteractionController.ts";

export enum RequestState {
    Camera
}

export class Controller {
    scene: Scene
    chain: Chain
    cameraChain: CameraChain
    interactionController: InteractionController | null = null

    constructor() {

    }

    init(scene: Scene) {
        this.scene = scene
        this.chain = new Chain()
        this.cameraChain = new CameraChain()
        this.switchState(RequestState.Camera)

        // 初始化新的交互控制器
        this.interactionController = new InteractionController(scene);
        this.interactionController.init();

        // 保留原有的事件监听以保持向后兼容
        // 注意：InteractionController 已经处理了这些事件，这里可以移除或保留作为备用
        // 如果 InteractionController 正常工作，可以注释掉以下代码
        /*
        scene.context!.canvas.addEventListener("mousedown",(r)=>{
            this.chain.mousedown(r)
            scene.render()
            if(r.button ==2)
            {
                r.preventDefault()
            }
        })
        scene.context!.canvas.addEventListener("mouseup",(r)=>{
            this.chain.mouseup(r)
        })

        scene.context!.canvas.addEventListener("mousemove",(r)=>{
            this.chain.mousemove(r)
            scene.render()
        })
        */
    }

    switchState(state: RequestState) {
        switch (state) {
            case RequestState.Camera:
                this.transitionTo(new CameraState())
                break
        }

    }
    /*
    * 状态机切换
    * */
    private state: State;
    public transitionTo(state: State): void {
        this.state = state;
        this.state.setContext(this);
        this.state.start()
    }
}
