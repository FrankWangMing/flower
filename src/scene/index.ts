import {Context} from "../context/context";
import {Model} from "../model";

import {RenderList} from "../renderer/renderList";
import {Background} from "./background";
import {Cell} from "../model/cell";
import {Controller} from "../controller";
import {Camera} from "../camera";

export class Scene extends RenderList {
    context: Context | undefined
    constructor() {
        super()
    }
    background:Background = new Background()
    model:Model = new Model()
    camera:Camera
    controller:Controller = new Controller()
    /*
    挂载 dom 节点
    * */
    mount(mount:HTMLDivElement){
        console.log(mount)
        this.context = new Context(mount)
        this.init()
    }
    /*
    初始化函数
     */
    init(){
        this.camera = new Camera(this)
        this.controller.init(this)

    }
    get gl():WebGLRenderingContext{
        return this.context?.gl as WebGLRenderingContext
    }

    /*
    构建渲染队列
    */
    build(){
        super.build(this.gl)
    }

    /*执行渲染*/
    render(){
        console.log("render")
        super.render(this.gl)
    }

    add(cell:Cell){
        this.push(cell)
    }
}
