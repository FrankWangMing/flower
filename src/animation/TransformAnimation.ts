import { vec3, quat, mat4, Vec3Like, QuatLike } from "gl-matrix-esm";
import { AnimationTrack, Keyframe, vec3Interpolator } from "./AnimationTrack";
import { Tween, EasingFunction } from "./Tween";
import { Cell } from "../model/cell";
import { ModelMatrix } from "../camera/ModelMatrix";

/**
 * 变换数据
 */
export interface Transform {
    position: [number, number, number];
    rotation: [number, number, number, number]; // quaternion
    scale: [number, number, number];
}

/**
 * 对象变换动画
 * 用于动画化3D对象的位置、旋转和缩放
 */
export class TransformAnimation {
    private cell: Cell;
    private modelMatrix: ModelMatrix;
    public positionTrack?: AnimationTrack<[number, number, number]>;
    public rotationTrack?: AnimationTrack<[number, number, number, number]>;
    public scaleTrack?: AnimationTrack<[number, number, number]>;
    private currentTransform: Transform;

    constructor(cell: Cell, modelMatrix: ModelMatrix) {
        this.cell = cell;
        this.modelMatrix = modelMatrix;
        
        // 初始化当前变换
        this.currentTransform = {
            position: [0, 0, 0],
            rotation: [0, 0, 0, 1], // quaternion (x, y, z, w)
            scale: [1, 1, 1],
        };
    }

    /**
     * 设置位置动画轨道
     */
    setPositionTrack(
        keyframes: Keyframe<[number, number, number]>[],
        duration: number
    ): this {
        this.positionTrack = new AnimationTrack(keyframes, duration, vec3Interpolator);
        this.positionTrack.onUpdateCallback((value) => {
            this.currentTransform.position = value;
            this.updateModelMatrix();
        });
        return this;
    }

    /**
     * 设置位置动画轨道（支持循环）
     */
    setPositionTrackLoop(
        keyframes: Keyframe<[number, number, number]>[],
        duration: number,
        loop: boolean = true
    ): this {
        this.setPositionTrack(keyframes, duration);
        if (this.positionTrack) {
            this.positionTrack.setLoop(loop);
            this.positionTrack.start();
        }
        return this;
    }

    /**
     * 设置旋转动画轨道（使用欧拉角）
     */
    setRotationTrack(
        keyframes: Keyframe<[number, number, number]>[],
        duration: number
    ): this {
        // 将欧拉角转换为四元数进行插值
        const quaternionKeyframes: Keyframe<[number, number, number, number]>[] = 
            keyframes.map(kf => ({
                time: kf.time,
                value: this.eulerToQuaternion(kf.value),
                easing: kf.easing,
            }));

        this.rotationTrack = new AnimationTrack(
            quaternionKeyframes,
            duration,
            this.quaternionInterpolator
        );
        this.rotationTrack.onUpdateCallback((value) => {
            this.currentTransform.rotation = value;
            this.updateModelMatrix();
        });
        return this;
    }

    /**
     * 设置旋转动画轨道（支持循环）
     */
    setRotationTrackLoop(
        keyframes: Keyframe<[number, number, number]>[],
        duration: number,
        loop: boolean = true
    ): this {
        this.setRotationTrack(keyframes, duration);
        if (this.rotationTrack) {
            this.rotationTrack.setLoop(loop);
            this.rotationTrack.start();
        }
        return this;
    }

    /**
     * 设置缩放动画轨道
     */
    setScaleTrack(
        keyframes: Keyframe<[number, number, number]>[],
        duration: number
    ): this {
        this.scaleTrack = new AnimationTrack(keyframes, duration, vec3Interpolator);
        this.scaleTrack.onUpdateCallback((value) => {
            this.currentTransform.scale = value;
            this.updateModelMatrix();
        });
        return this;
    }

    /**
     * 设置缩放动画轨道（支持循环）
     */
    setScaleTrackLoop(
        keyframes: Keyframe<[number, number, number]>[],
        duration: number,
        loop: boolean = true
    ): this {
        this.setScaleTrack(keyframes, duration);
        if (this.scaleTrack) {
            this.scaleTrack.setLoop(loop);
            this.scaleTrack.start();
        }
        return this;
    }

    /**
     * 使用补间动画设置位置
     */
    animatePosition(
        target: [number, number, number],
        duration: number,
        easing?: EasingFunction
    ): Tween[] {
        const start = this.currentTransform.position;
        const tweens: Tween[] = [];

        // 为每个轴创建补间动画
        for (let i = 0; i < 3; i++) {
            const tween = new Tween(start[i], target[i], duration, easing);
            tween.onUpdateCallback((value) => {
                this.currentTransform.position[i] = value;
                this.updateModelMatrix();
            });
            tweens.push(tween);
        }

        return tweens;
    }

    /**
     * 使用补间动画设置旋转（欧拉角）
     */
    animateRotation(
        target: [number, number, number],
        duration: number,
        easing?: EasingFunction
    ): Tween[] {
        const start = this.eulerToQuaternion(this.getEulerRotation());
        const targetQuat = this.eulerToQuaternion(target);
        const tweens: Tween[] = [];

        // 为每个四元数分量创建补间动画
        for (let i = 0; i < 4; i++) {
            const tween = new Tween(start[i], targetQuat[i], duration, easing);
            tween.onUpdateCallback((value) => {
                this.currentTransform.rotation[i] = value;
                this.updateModelMatrix();
            });
            tweens.push(tween);
        }

        return tweens;
    }

    /**
     * 使用补间动画设置缩放
     */
    animateScale(
        target: [number, number, number],
        duration: number,
        easing?: EasingFunction
    ): Tween[] {
        const start = this.currentTransform.scale;
        const tweens: Tween[] = [];

        for (let i = 0; i < 3; i++) {
            const tween = new Tween(start[i], target[i], duration, easing);
            tween.onUpdateCallback((value) => {
                this.currentTransform.scale[i] = value;
                this.updateModelMatrix();
            });
            tweens.push(tween);
        }

        return tweens;
    }

    /**
     * 更新模型矩阵
     * 变换顺序：先缩放，再旋转，最后平移（矩阵乘法顺序相反）
     */
    private updateModelMatrix(): void {
        const matrix = mat4.create();
        
        // 1. 先应用缩放
        mat4.scale(matrix, matrix, this.currentTransform.scale);
        
        // 2. 再应用旋转（四元数转矩阵）
        const rotationMatrix = mat4.create();
        mat4.fromQuat(rotationMatrix, this.currentTransform.rotation as QuatLike);
        mat4.multiply(matrix, matrix, rotationMatrix);
        
        // 3. 最后应用平移
        mat4.translate(matrix, matrix, this.currentTransform.position);
        
        // 更新模型矩阵
        this.modelMatrix.updateMatrix(matrix);
    }

    /**
     * 设置位置
     */
    setPosition(position: [number, number, number]): this {
        this.currentTransform.position = position;
        this.updateModelMatrix();
        return this;
    }

    /**
     * 设置旋转（欧拉角，弧度）
     */
    setRotation(euler: [number, number, number]): this {
        this.currentTransform.rotation = this.eulerToQuaternion(euler);
        this.updateModelMatrix();
        return this;
    }

    /**
     * 设置缩放
     */
    setScale(scale: [number, number, number]): this {
        this.currentTransform.scale = scale;
        this.updateModelMatrix();
        return this;
    }

    /**
     * 获取当前变换
     */
    getTransform(): Transform {
        return { ...this.currentTransform };
    }

    /**
     * 获取位置
     */
    getPosition(): [number, number, number] {
        return [...this.currentTransform.position] as [number, number, number];
    }

    /**
     * 获取旋转（欧拉角）
     */
    getEulerRotation(): [number, number, number] {
        return this.quaternionToEuler(this.currentTransform.rotation);
    }

    /**
     * 获取缩放
     */
    getScale(): [number, number, number] {
        return [...this.currentTransform.scale] as [number, number, number];
    }

    /**
     * 开始所有动画轨道
     */
    start(): this {
        if (this.positionTrack) this.positionTrack.start();
        if (this.rotationTrack) this.rotationTrack.start();
        if (this.scaleTrack) this.scaleTrack.start();
        return this;
    }

    /**
     * 暂停所有动画轨道
     */
    pause(): this {
        if (this.positionTrack) this.positionTrack.pause();
        if (this.rotationTrack) this.rotationTrack.pause();
        if (this.scaleTrack) this.scaleTrack.pause();
        return this;
    }

    /**
     * 停止所有动画轨道
     */
    stop(): this {
        if (this.positionTrack) this.positionTrack.stop();
        if (this.rotationTrack) this.rotationTrack.stop();
        if (this.scaleTrack) this.scaleTrack.stop();
        return this;
    }

    /**
     * 欧拉角转四元数
     */
    private eulerToQuaternion(euler: [number, number, number]): [number, number, number, number] {
        const q = quat.create();
        quat.fromEuler(q, euler[0] * 180 / Math.PI, euler[1] * 180 / Math.PI, euler[2] * 180 / Math.PI);
        return [q[0], q[1], q[2], q[3]];
    }

    /**
     * 四元数转欧拉角
     */
    private quaternionToEuler(quat: [number, number, number, number]): [number, number, number] {
        const q = quat as QuatLike;
        const euler = vec3.create();
        // 简化的转换（实际应该使用完整的四元数到欧拉角转换）
        // 这里使用 gl-matrix 的辅助函数
        const matrix = mat4.create();
        mat4.fromQuat(matrix, q);
        // 从矩阵提取欧拉角（简化版本）
        // 实际应用中应该使用完整的转换函数
        return [0, 0, 0]; // 占位符，实际需要完整实现
    }

    /**
     * 四元数插值器
     */
    private quaternionInterpolator: (start: [number, number, number, number], end: [number, number, number, number], t: number) => [number, number, number, number] = 
        (start, end, t) => {
            const result = quat.create();
            quat.slerp(result, start as QuatLike, end as QuatLike, t);
            return [result[0], result[1], result[2], result[3]];
        };
}
