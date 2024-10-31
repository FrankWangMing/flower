import {ShaderSet} from "../shader";
import {UniformSet} from "./uniform";
import {StateSet} from "./state";

export class  Material {


    shader:ShaderSet = new ShaderSet()
    uniform:UniformSet = new UniformSet()
    state:StateSet = new StateSet()
    constructor() {
        this.init()

    }
    init(){
        // this.shader.add()
    }
}

