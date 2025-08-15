import {Material} from "./index";
import { ShaderSet} from "../shader";
import {UniformSet} from "./uniform";
import {StateSet} from "./state";

export class LineMaterial extends Material{
    constructor() {
        super();
    }
}


export class SurfaceMaterial extends Material{
    shader:ShaderSet = new ShaderSet()
    uniform:UniformSet = new UniformSet()
    state:StateSet = new StateSet()
    constructor() {
        super();
    }
}


export class PointMaterial extends Material {
    constructor() {
        super();
    }
}



