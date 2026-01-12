import { Material } from "../../material";
import { Geometry } from "../geometry";
import { Event } from "../basic";
import { ModelMatrix } from "../../camera/ModelMatrix";
import { TransformAnimation } from "../../animation/TransformAnimation";

export class Cell extends Event {
    material: Material
    geometry: Geometry
    modelMatrix: ModelMatrix
    transformAnimation?: TransformAnimation

    constructor(
        params: { geometry: Geometry; material: Material; modelMatrix?: ModelMatrix; }
    ) {
        super()
        this.geometry = params.geometry
        this.material = params.material
        this.modelMatrix = params.modelMatrix || new ModelMatrix()
        
        // 初始化变换动画
        this.transformAnimation = new TransformAnimation(this, this.modelMatrix)
    }

    /**
     * 获取变换动画对象
     */
    getAnimation(): TransformAnimation {
        if (!this.transformAnimation) {
            this.transformAnimation = new TransformAnimation(this, this.modelMatrix)
        }
        return this.transformAnimation
    }
}
