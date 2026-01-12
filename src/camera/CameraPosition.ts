import { vec3, Vec3Like, mat4 } from "gl-matrix-esm";
import { Uniform } from "../material/uniform";
import { Program } from "../context/program";
import { ViewMatrix } from "./ViewMatrix";

/**
 * 相机位置 Uniform（用于计算视角方向）
 * 自动从 ViewMatrix 提取相机位置
 */
export class CameraPosition extends Uniform {
    name = "uCameraPosition"
    position: Vec3Like = vec3.create()
    private viewMatrix: ViewMatrix

    constructor(viewMatrix: ViewMatrix) {
        super()
        this.viewMatrix = viewMatrix
        // 初始化默认位置
        vec3.set(this.position, 0, 5, 5)
    }

    update() {
        // 从视图矩阵的逆矩阵提取相机位置
        // 视图矩阵的逆矩阵 = 相机变换矩阵，其第4列的前3个元素是相机位置
        const invView = mat4.create()
        mat4.invert(invView, this.viewMatrix.matrix)
        vec3.set(this.position, invView[12], invView[13], invView[14])
    }

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        this.update() // 每次渲染时更新相机位置
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniform3fv(this.location, this.position)
    }
}
