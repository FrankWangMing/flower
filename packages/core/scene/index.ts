import {Context} from "../context/context";

export class Scene {
    context: Context | undefined
    constructor() {
    }



    mount(mount:HTMLDivElement){
        console.log(mount)
        this.context = new Context(mount)
    }
}
