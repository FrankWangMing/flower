import {AbstractScene, Scene} from "../scene";

export class Controller {
    scene:Scene
    constructor( ) {
    }
    init(scene:Scene){
        this.scene = scene
        scene.context?.canvas.addEventListener("mousedown",(r)=>{
            console.log(r)
            scene.camera.update()
            scene.render()
        })
    }
}
