import { vec3, mat4, Vec2Like, vec2, quat } from 'gl-matrix-esm'
import { Uniform } from "../material/uniform";
import { DefaultUniform } from "./DefaultUniform";

export class ViewMatrix extends Uniform {
    static current: ViewMatrix
    defaultUniform: DefaultUniform
    constructor(defaultUniform: DefaultUniform) {
        super()
        this.defaultUniform = defaultUniform
        const camera = vec3.fromValues(0, 5, 5);
        const target = vec3.fromValues(0, 0, 0);
        const up = vec3.fromValues(0, 1, 0);
        const cameraMatrix = mat4.create()
        mat4.lookAt(cameraMatrix, camera, target, up);
        this.matrix = cameraMatrix
    }
    name = "uViewMatrix"
    tie(gl: WebGL2RenderingContext) {
        const Uniform = this.findUniformInfo()
        this.location = Uniform.location
        this.update()
    }

    pos: Vec2Like | undefined

    obr(pos: Vec2Like) {
        if (!this.pos) return
        const delta = vec2.create();
        vec2.subtract(delta, pos, this.pos);
        delta[1] = -delta[1];
        this.pos = pos;
        const viewportSize = [100, 100];
        const e = this.matrix;
        const right = vec3.fromValues(e[0], e[4], e[8]);
        const up = vec3.fromValues(e[1], e[5], e[9]);
        const dir = vec3.fromValues(e[2], e[6], e[10]);
        const distance = (vec2.length(delta) / viewportSize[1]) * Math.PI * 2.0;
        vec2.normalize(delta, delta);

        vec3.normalize(right, right);
        for (let i = 0; i < right.length; ++i) {
            right[i] *= delta[0];
        }

        vec3.normalize(up, up);
        for (let i = 0; i < up.length; ++i) {
            up[i] *= delta[1];
        }

        const rollDir = vec3.create();
        vec3.add(rollDir, rollDir, right);
        vec3.add(rollDir, rollDir, up);

        const axis = vec3.clone(dir);
        vec3.cross(axis, axis, rollDir);
        vec3.normalize(axis, axis);

        const rotQuat = quat.create();
        quat.setAxisAngle(rotQuat, axis, distance);

        const trans1 = this.defaultUniform.orbitPoint;
        const trans2 = vec3.clone(trans1);
        vec3.negate(trans2, trans2);

        const orbitMatrix = mat4.create();
        mat4.translate(orbitMatrix, orbitMatrix, trans1);
        const rotateMatrix = mat4.create();
        mat4.fromQuat(rotateMatrix, rotQuat);
        mat4.multiply(orbitMatrix, orbitMatrix, rotateMatrix);
        mat4.translate(orbitMatrix, orbitMatrix, trans2);
        mat4.multiply(e, e, orbitMatrix);

        this.matrix = e
        this.update()
    }

    wheel(pos: Vec2Like) {
        if (!this.pos) return
        const delta = vec2.create();
        vec2.subtract(delta, pos, this.pos);
        delta[1] = -delta[1];
        this.pos = pos;
        const viewportSize = [100, 100];
        const e = this.matrix;
        const right = vec3.fromValues(e[0], e[4], e[8]);
        const up = vec3.fromValues(e[1], e[5], e[9]);
        const dir = vec3.fromValues(e[2], e[6], e[10]);
        const distance = (vec2.length(delta) / viewportSize[1]) * Math.PI * 2.0;
        vec2.normalize(delta, delta);

        vec3.normalize(right, right);
        for (let i = 0; i < right.length; ++i) {
            right[i] *= delta[0];
        }

        vec3.normalize(up, up);
        for (let i = 0; i < up.length; ++i) {
            up[i] *= delta[1];
        }

        const rollDir = vec3.create();
        vec3.add(rollDir, rollDir, right);
        vec3.add(rollDir, rollDir, up);

        const axis = vec3.clone(dir);
        vec3.cross(axis, axis, rollDir);
        vec3.normalize(axis, axis);

        const rotQuat = quat.create();
        quat.setAxisAngle(rotQuat, axis, distance);

        const trans1 = this.defaultUniform.orbitPoint;
        const trans2 = vec3.clone(trans1);
        vec3.negate(trans2, trans2);

        const orbitMatrix = mat4.create();
        mat4.translate(orbitMatrix, orbitMatrix, trans1);
        const rotateMatrix = mat4.create();
        mat4.fromQuat(rotateMatrix, rotQuat);
        mat4.multiply(orbitMatrix, orbitMatrix, rotateMatrix);
        mat4.translate(orbitMatrix, orbitMatrix, trans2);
        mat4.multiply(e, e, orbitMatrix);

        this.matrix = e
        this.update()
    }

    /**
     * 缩放相机（沿着视线方向移动相机）
     * @param amount 缩放量，正数放大（拉近），负数缩小（拉远）
     */
    zoom(amount: number): void {
        const e = this.matrix;

        // 提取相机的方向向量（从视图矩阵的第3列）
        const dir = vec3.fromValues(e[2], e[6], e[10]);
        vec3.normalize(dir, dir);

        // 提取相机位置（从视图矩阵的逆矩阵的第4列）
        // 视图矩阵的逆矩阵 = 相机变换矩阵
        const invView = mat4.create();
        mat4.invert(invView, e);
        const cameraPos = vec3.fromValues(invView[12], invView[13], invView[14]);

        // 计算轨道中心点（orbitPoint）
        const orbitPoint = this.defaultUniform.orbitPoint;

        // 计算从轨道中心到相机的方向
        const toCamera = vec3.create();
        vec3.subtract(toCamera, cameraPos, orbitPoint);
        const distance = vec3.length(toCamera);

        // 限制缩放范围，避免相机过近或过远
        const minDistance = 0.5;
        const maxDistance = 50.0;

        // 计算新的距离
        let newDistance = distance - amount * distance; // 使用相对缩放

        // 限制距离范围
        newDistance = Math.max(minDistance, Math.min(maxDistance, newDistance));

        // 如果距离没有变化，则不更新
        if (Math.abs(newDistance - distance) < 0.001) {
            return;
        }

        // 计算新的相机位置
        vec3.normalize(toCamera, toCamera);
        const newCameraPos = vec3.create();
        vec3.scaleAndAdd(newCameraPos, orbitPoint, toCamera, newDistance);

        // 重新计算视图矩阵
        const up = vec3.fromValues(e[1], e[5], e[9]);
        vec3.normalize(up, up);

        const newViewMatrix = mat4.create();
        mat4.lookAt(newViewMatrix, newCameraPos, orbitPoint, up);

        this.matrix = newViewMatrix;
        this.update();
    }

}
