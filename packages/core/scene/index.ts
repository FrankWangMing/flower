import {Context} from "../context/context";
import {Model} from "../Model";

export class Scene {
    context: Context | undefined
    constructor() {
    }
    model:Model

    /*
    挂载 dom 节点
    * */
    mount(mount:HTMLDivElement){
        console.log(mount)
        this.context = new Context(mount)
    }
    /*构建渲染队列*/
    build(){

    }
    /*执行渲染*/
    render(){

    }
}
