import { Global } from "./global";
import { Program } from "../context/program";
import { ViewMatrix } from "../camera/ViewMatrix";
import { mat4, quat, vec2, Vec2Like, vec3 } from "gl-matrix-esm";

export namespace ViewTools {

    export class Zoom {
        private static readonly ZOOM_SPEED = 0.1; // 缩放速度

        /**
         * 放大（拉近相机）
         */
        public static ZoomIn(amount?: number): void {
            const viewMatrix = ViewMatrix.current;
            if (!viewMatrix) return;

            const zoomAmount = amount || this.ZOOM_SPEED;
            viewMatrix.zoom(zoomAmount);
        }

        /**
         * 缩小（拉远相机）
         */
        public static ZoomOut(amount?: number): void {
            const viewMatrix = ViewMatrix.current;
            if (!viewMatrix) return;

            const zoomAmount = amount || this.ZOOM_SPEED;
            viewMatrix.zoom(-zoomAmount);
        }

        /**
         * 根据滚轮增量缩放
         * @param deltaY 滚轮增量（正值向下，负值向上）
         */
        public static ZoomByWheel(deltaY: number): void {
            const viewMatrix = ViewMatrix.current;
            if (!viewMatrix) return;

            // 滚轮向下（deltaY > 0）时缩小，向上（deltaY < 0）时放大
            // 使用指数缩放，更自然
            const zoomFactor = 1.0 + (deltaY > 0 ? -0.1 : 0.1);
            const zoomAmount = Math.abs(deltaY) * 0.001; // 归一化增量

            if (deltaY > 0) {
                viewMatrix.zoom(-zoomAmount);
            } else {
                viewMatrix.zoom(zoomAmount);
            }
        }
    }

    export class Rotate {
        public static update(pos: Vec2Like) {

            const viewMatrix = ViewMatrix.current
            viewMatrix.obr(pos)
        }
    }
}
