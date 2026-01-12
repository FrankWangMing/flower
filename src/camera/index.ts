import { DefaultUniform } from "./DefaultUniform";
import { mat4 } from "gl-matrix-esm";
import { Scene } from "../scene";
import { RenderList } from "../renderer/renderList";

export class Camera {
    defaultUniform: DefaultUniform
    scene: Scene
    constructor(scene: Scene) {
        this.scene = scene
        this.defaultUniform = new DefaultUniform()
    }

    update() {
        this.scene.render()
        // let then = 0;
        // let scene = this.scene
        // let that = this
        // function render(now) {
        //     now *= 0.001; // 将时间转换为秒
        //     const deltaTime = now - then;
        //     then = now;
        //     console.log(deltaTime)
        //     let matrix = that.defaultUniform.modelMatrix.matrix
        //     mat4.rotateY(matrix, that.defaultUniform.modelMatrix.matrix, deltaTime);
        //     that.defaultUniform.modelMatrix.updateMatrix(matrix)
        //     scene.render()
        //     requestAnimationFrame(render);
        // }
        // requestAnimationFrame(render);
    }




}
