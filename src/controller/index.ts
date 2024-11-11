import {Scene} from "../scene";
import {State} from "./state";
import {CameraState} from "./state/CameraState.ts";
import {Chain} from "./chain";
import {CameraChain} from "./chain/CameraChain.ts";
export enum RequestState {
    Camera
}

export class Controller {
    scene:Scene
    chain:Chain
    cameraChain:CameraChain
    constructor() {

    }

    init(scene:Scene){
        this.scene = scene
        this.chain = new Chain()
        this.cameraChain = new CameraChain()
        this.switchState(RequestState.Camera)
        scene.context!.canvas.addEventListener("mousedown",(r)=>{
              console.log(r)
            this.chain.mousedown(r)
            // scene.camera.update()
            scene.render()
            if(r.button ==2)
            {
                r.preventDefault()
            }
        })
        scene.context!.canvas.addEventListener("mouseup",(r)=>{
            console.log(r)
            this.chain.mouseup(r)
            // scene.camera.update()
            // scene.render()
        })

        scene.context!.canvas.addEventListener("mousemove",(r)=>{
            this.chain.mousemove(r)
            // scene.camera.update()
            // scene.render()
            scene.render()
        })

    }

    switchState(state:RequestState){
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
