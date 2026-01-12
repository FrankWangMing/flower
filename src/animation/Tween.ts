/**
 * 缓动函数类型
 */
export type EasingFunction = (t: number) => number;

/**
 * 常用缓动函数
 */
export const Easing = {
    /** 线性 */
    linear: (t: number) => t,
    
    /** 缓入 */
    easeIn: (t: number) => t * t,
    
    /** 缓出 */
    easeOut: (t: number) => t * (2 - t),
    
    /** 缓入缓出 */
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    
    /** 二次缓入 */
    easeInQuad: (t: number) => t * t,
    
    /** 二次缓出 */
    easeOutQuad: (t: number) => t * (2 - t),
    
    /** 二次缓入缓出 */
    easeInOutQuad: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    
    /** 三次缓入 */
    easeInCubic: (t: number) => t * t * t,
    
    /** 三次缓出 */
    easeOutCubic: (t: number) => --t * t * t + 1,
    
    /** 三次缓入缓出 */
    easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    
    /** 弹性 */
    elastic: (t: number) => {
        const p = 0.3;
        return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    },
    
    /** 弹跳 */
    bounce: (t: number) => {
        if (t < 1 / 2.75) {
            return 7.5625 * t * t;
        } else if (t < 2 / 2.75) {
            return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
        } else if (t < 2.5 / 2.75) {
            return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
        } else {
            return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
    },
};

/**
 * 补间动画类
 * 用于在两个值之间进行平滑过渡
 */
export class Tween {
    private startValue: number;
    private endValue: number;
    private duration: number;
    private elapsed: number = 0;
    private easing: EasingFunction;
    private onUpdate?: (value: number) => void;
    private onComplete?: () => void;
    private isPlaying: boolean = false;
    private isPaused: boolean = false;
    private startTime: number = 0;
    private pauseTime: number = 0;

    constructor(
        startValue: number,
        endValue: number,
        duration: number,
        easing: EasingFunction = Easing.linear
    ) {
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.easing = easing;
    }

    /**
     * 设置更新回调
     */
    onUpdateCallback(callback: (value: number) => void): this {
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
     * 开始动画
     */
    start(): this {
        if (this.isPaused) {
            // 从暂停位置继续
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
        const progress = Math.min(this.elapsed / this.duration, 1);
        const easedProgress = this.easing(progress);
        const currentValue = this.startValue + (this.endValue - this.startValue) * easedProgress;

        if (this.onUpdate) {
            this.onUpdate(currentValue);
        }

        if (progress >= 1) {
            this.isPlaying = false;
            if (this.onComplete) {
                this.onComplete();
            }
            return false; // 动画完成
        }

        return true; // 动画继续
    }

    /**
     * 获取当前值
     */
    getCurrentValue(): number {
        const progress = Math.min(this.elapsed / this.duration, 1);
        const easedProgress = this.easing(progress);
        return this.startValue + (this.endValue - this.startValue) * easedProgress;
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
