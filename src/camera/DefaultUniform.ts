import { Uniform, UniformSet, NormalMatrix } from "../material/uniform";
import { ModelMatrix } from "./ModelMatrix";
import { ViewMatrix } from "./ViewMatrix";
import { ProjectMatrix } from "./ProjectMatrix";
import { CameraPosition } from "./CameraPosition";
import { vec3, Vec3Like } from "gl-matrix-esm";
import { ViewportSize } from "./ViewportSize";

export class DefaultUniform extends UniformSet {
    modelMatrix: ModelMatrix
    viewMatrix: ViewMatrix
    projectMatrix: ProjectMatrix
    normalMatrix: NormalMatrix
    cameraPosition: CameraPosition
    orbitPoint: Vec3Like
    viewportSize: ViewportSize
    constructor() {
        super();
        this.projectMatrix = new ProjectMatrix()
        this.viewMatrix = new ViewMatrix(this)
        this.modelMatrix = new ModelMatrix()
        this.normalMatrix = new NormalMatrix(this.modelMatrix)
        this.cameraPosition = new CameraPosition(this.viewMatrix)
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
        this.add(
            <Uniform>this.normalMatrix
        )
        this.add(
            <Uniform>this.cameraPosition
        )
        ViewMatrix.current = this.viewMatrix;
    }

}
