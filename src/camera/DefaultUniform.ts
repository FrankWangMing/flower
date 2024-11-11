import {Uniform, UniformSet} from "../material/uniform";
import {ModelMatrix} from "./ModelMatrix.ts";
import {ViewMatrix} from "./ViewMatrix.ts";
import {ProjectMatrix} from "./ProjectMfatrix.ts";
import {vec3, Vec3Like} from "gl-matrix-esm";
import {ViewportSize} from "./ViewportSize.ts";

export class DefaultUniform extends UniformSet{
    modelMatrix:ModelMatrix
    viewMatrix:ViewMatrix
    projectMatrix:ProjectMatrix
    orbitPoint:Vec3Like
    viewportSize:ViewportSize
    constructor() {
        super();
        this.projectMatrix = new ProjectMatrix()
        this.viewMatrix = new ViewMatrix(this)
        this.modelMatrix = new ModelMatrix()
        this.orbitPoint = vec3.create()
        this.add(
            <Uniform>this.modelMatrix
        )
        this.add(
            <Uniform>this.viewMatrix
        )
        this.add(
            <Uniform>this.projectMatrix
        )
        ViewMatrix.current = this.viewMatrix;
    }

}
