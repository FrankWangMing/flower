import { Tiny } from "../../context/co/tiny";
import { RenderMode, RenderModeConfig } from "../RenderMode";

/**
 * 渲染模式状态
 * 控制如何渲染几何体（实体、线框、点云等）
 */
export class RenderModeState extends Tiny {
    mode: RenderMode
    lineWidth: number
    pointSize: number

    constructor(config?: RenderModeConfig) {
        super();
        this.mode = config?.mode ?? RenderMode.SOLID;
        this.lineWidth = config?.lineWidth ?? 1.0;
        this.pointSize = config?.pointSize ?? 1.0;
    }

    tie(gl: WebGLRenderingContext) {
        // 设置线宽（仅对 LINES 和 LINE_STRIP 有效，大多数实现只支持 1.0）
        if (this.mode === RenderMode.WIREFRAME || this.mode === RenderMode.LINES) {
            gl.lineWidth(this.lineWidth);
        }

        // 设置点大小（仅对 POINTS 有效）
        if (this.mode === RenderMode.POINTS) {
            // 在 WebGL 中，点大小通过 shader 的 gl_PointSize 设置
            // 这里我们只设置一个标记，实际大小在 shader 中处理
        }

        // 启用多边形偏移（线框模式下避免 z-fighting）
        if (this.mode === RenderMode.WIREFRAME) {
            gl.enable(gl.POLYGON_OFFSET_LINE);
            gl.polygonOffset(-1.0, -1.0);
        } else {
            gl.disable(gl.POLYGON_OFFSET_LINE);
        }
    }

    static default() {
        return new RenderModeState({ mode: RenderMode.SOLID });
    }
}
