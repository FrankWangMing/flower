import {Uniform, UniformSet} from "../material/uniform";
import {ModelMatrix} from "./ModelMatrix.ts";
import {ViewMatrix} from "./ViewMatrix.ts";
import {ProjectMatrix} from "./ProjectMfatrix.ts";

export class DefaultUniform extends UniformSet{
    modelMatrix:ModelMatrix=new ModelMatrix()
    viewMatrix:ViewMatrix=new ViewMatrix()
    projectMatrix:ViewMatrix=new ProjectMatrix()
    constructor() {
        super();
        this.add(
            <Uniform>this.modelMatrix
        )
        this.add(
            <Uniform>this.viewMatrix
        )
        this.add(
            <Uniform>this.projectMatrix
        )
    }

}
