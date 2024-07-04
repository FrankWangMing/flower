import {Context} from "../context/context";
import {Model} from "../Model";
import {RenderList} from "../context/renderList";
import {Background} from "./background";
import {Cell} from "../Model/Cell";

export class Scene extends RenderList {
    context: Context | undefined
    constructor() {
        super()
    }
    background:Background = new Background()
    model:Model = new Model()

    /*
    挂载 dom 节点
    * */
    mount(mount:HTMLDivElement){
        console.log(mount)
        this.context = new Context(mount)
    }
    get gl():WebGLRenderingContext{
        return this.context?.gl as WebGLRenderingContext
    }
    /*构建渲染队列*/
    build(){
        super.build(this.gl)
    }
    /*执行渲染*/
    render(){
        super.render(this.gl)

    }

    add(cell:Cell){
        this.push(cell)
    }
}
