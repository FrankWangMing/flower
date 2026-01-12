import { Tween } from "./Tween";
import { AnimationTrack } from "./AnimationTrack";

/**
 * 动画接口
 */
export interface IAnimation {
    update(deltaTime: number): boolean;
    isActive(): boolean;
    stop(): void;
}

/**
 * 动画管理器
 * 统一管理所有动画，在渲染循环中更新
 */
export class AnimationManager {
    private animations: Set<IAnimation> = new Set();
    private lastTime: number = 0;
    private isRunning: boolean = false;

    constructor() {
        this.lastTime = performance.now();
    }

    /**
     * 添加动画
     */
    add(animation: IAnimation): void {
        this.animations.add(animation);
        if (!this.isRunning) {
            this.start();
        }
    }

    /**
     * 移除动画
     */
    remove(animation: IAnimation): void {
        this.animations.delete(animation);
        if (this.animations.size === 0) {
            this.stop();
        }
    }

    /**
     * 添加补间动画
     */
    addTween(tween: Tween): Tween {
        this.add(tween);
        return tween;
    }

    /**
     * 添加动画轨道
     */
    addTrack<T>(track: AnimationTrack<T>): AnimationTrack<T> {
        this.add(track);
        return track;
    }

    /**
     * 更新所有动画
     * 应该在渲染循环中调用
     */
    update(): void {
        if (!this.isRunning) {
            return;
        }

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        // 更新所有动画
        const animationsToRemove: IAnimation[] = [];
        this.animations.forEach(animation => {
            if (!animation.update(deltaTime)) {
                // 动画完成，标记为待移除
                animationsToRemove.push(animation);
            }
        });

        // 移除已完成的动画
        animationsToRemove.forEach(animation => {
            this.remove(animation);
        });
    }

    /**
     * 开始动画管理器
     */
    start(): void {
        this.isRunning = true;
        this.lastTime = performance.now();
    }

    /**
     * 停止动画管理器
     */
    stop(): void {
        this.isRunning = false;
    }

    /**
     * 暂停所有动画
     */
    pauseAll(): void {
        this.animations.forEach(animation => {
            if (animation instanceof Tween) {
                animation.pause();
            } else if (animation instanceof AnimationTrack) {
                animation.pause();
            }
        });
    }

    /**
     * 恢复所有动画
     */
    resumeAll(): void {
        this.animations.forEach(animation => {
            if (animation instanceof Tween) {
                animation.start();
            } else if (animation instanceof AnimationTrack) {
                animation.start();
            }
        });
    }

    /**
     * 停止所有动画
     */
    stopAll(): void {
        this.animations.forEach(animation => {
            animation.stop();
        });
        this.animations.clear();
        this.stop();
    }

    /**
     * 清除所有动画
     */
    clear(): void {
        this.stopAll();
    }

    /**
     * 获取动画数量
     */
    getAnimationCount(): number {
        return this.animations.size;
    }

    /**
     * 检查是否有活动的动画
     */
    hasActiveAnimations(): boolean {
        return this.animations.size > 0;
    }
}
