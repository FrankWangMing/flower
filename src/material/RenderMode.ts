/**
 * 渲染模式枚举
 */
export enum RenderMode {
    /** 实体填充模式（默认） */
    SOLID = 'SOLID',
    /** 线框模式 */
    WIREFRAME = 'WIREFRAME',
    /** 点云模式 */
    POINTS = 'POINTS',
    /** 线框模式（仅边） */
    LINES = 'LINES',
}

/**
 * 渲染模式配置
 */
export type RenderModeConfig = {
    /** 渲染模式 */
    mode: RenderMode;
    /** 线宽（仅对 WIREFRAME 和 LINES 有效，默认 1.0） */
    lineWidth?: number;
    /** 点大小（仅对 POINTS 有效，默认 1.0） */
    pointSize?: number;
}
