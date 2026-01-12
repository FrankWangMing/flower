import { EasingFunction, Easing } from "./Tween";

/**
 * 关键帧
 */
export interface Keyframe<T> {
    time: number; // 时间点（0-1）
    value: T;
    easing?: EasingFunction;
}

/**
 * 插值函数类型
 */
export type Interpolator<T> = (start: T, end: T, t: number) => T;

/**
 * 数值插值器
 */
export const numberInterpolator: Interpolator<number> = (start, end, t) => {
    return start + (end - start) * t;
};

/**
 * 向量插值器（vec3）
 */
export const vec3Interpolator: Interpolator<[number, number, number]> = (start, end, t) => {
    return [
        start[0] + (end[0] - start[0]) * t,
        start[1] + (end[1] - start[1]) * t,
        start[2] + (end[2] - start[2]) * t,
    ];
};

/**
 * 动画轨道
 * 用于关键帧动画
 */
export class AnimationTrack<T> {
    private keyframes: Keyframe<T>[];
    private duration: number;
    private elapsed: number = 0;
    private interpolator: Interpolator<T>;
    private onUpdate?: (value: T) => void;
    private onComplete?: () => void;
    private isPlaying: boolean = false;
    private isPaused: boolean = false;
    private isLoop: boolean = false;
    private startTime: number = 0;
    private pauseTime: number = 0;

    constructor(
        keyframes: Keyframe<T>[],
        duration: number,
        interpolator: Interpolator<T>
    ) {
        // 确保关键帧按时间排序
        this.keyframes = [...keyframes].sort((a, b) => a.time - b.time);
        this.duration = duration;
        this.interpolator = interpolator;
    }

    /**
     * 设置更新回调
     */
    onUpdateCallback(callback: (value: T) => void): this {
        this.onUpdate = callback;
        return this;
    }

    /**
     * 设置完成回调
     */
    onCompleteCallback(callback: () => void): this {
        this.onComplete = callback;
        return this;
    }

    /**
     * 设置循环播放
     */
    setLoop(loop: boolean): this {
        this.isLoop = loop;
        return this;
    }

    /**
     * 开始动画
     */
    start(): this {
        if (this.isPaused) {
            this.startTime = performance.now() - this.pauseTime;
            this.isPaused = false;
        } else {
            this.startTime = performance.now();
            this.elapsed = 0;
        }
        this.isPlaying = true;
        return this;
    }

    /**
     * 暂停动画
     */
    pause(): this {
        if (this.isPlaying && !this.isPaused) {
            this.isPaused = true;
            this.pauseTime = performance.now() - this.startTime;
        }
        return this;
    }

    /**
     * 停止动画
     */
    stop(): this {
        this.isPlaying = false;
        this.isPaused = false;
        this.elapsed = 0;
        return this;
    }

    /**
     * 重置动画
     */
    reset(): this {
        this.stop();
        this.elapsed = 0;
        return this;
    }

    /**
     * 更新动画
     * @param deltaTime 时间增量（毫秒）
     */
    update(deltaTime: number): boolean {
        if (!this.isPlaying || this.isPaused) {
            return false;
        }

        this.elapsed += deltaTime;
        let progress = (this.elapsed / this.duration) % 1;

        // 处理循环
        if (!this.isLoop && this.elapsed >= this.duration) {
            progress = 1;
        }

        // 找到当前关键帧区间
        const currentValue = this.getValueAtTime(progress);

        if (this.onUpdate) {
            this.onUpdate(currentValue);
        }

        // 检查是否完成（非循环模式）
        if (!this.isLoop && this.elapsed >= this.duration) {
            this.isPlaying = false;
            if (this.onComplete) {
                this.onComplete();
            }
            return false;
        }

        return true;
    }

    /**
     * 获取指定时间的值
     */
    private getValueAtTime(progress: number): T {
        if (this.keyframes.length === 0) {
            throw new Error("AnimationTrack has no keyframes");
        }

        if (progress <= 0) {
            return this.keyframes[0].value;
        }

        if (progress >= 1) {
            return this.keyframes[this.keyframes.length - 1].value;
        }

        // 找到当前时间所在的关键帧区间
        for (let i = 0; i < this.keyframes.length - 1; i++) {
            const current = this.keyframes[i];
            const next = this.keyframes[i + 1];

            if (progress >= current.time && progress <= next.time) {
                // 计算区间内的插值进度
                const segmentDuration = next.time - current.time;
                const segmentProgress = (progress - current.time) / segmentDuration;

                // 使用关键帧的缓动函数或默认线性
                const easing = current.easing || Easing.linear;
                const easedProgress = easing(segmentProgress);

                // 插值
                return this.interpolator(current.value, next.value, easedProgress);
            }
        }

        return this.keyframes[this.keyframes.length - 1].value;
    }

    /**
     * 获取当前值
     */
    getCurrentValue(): T {
        const progress = Math.min(this.elapsed / this.duration, 1);
        return this.getValueAtTime(progress);
    }

    /**
     * 获取进度（0-1）
     */
    getProgress(): number {
        return Math.min(this.elapsed / this.duration, 1);
    }

    /**
     * 检查是否正在播放
     */
    isActive(): boolean {
        return this.isPlaying && !this.isPaused;
    }
}
