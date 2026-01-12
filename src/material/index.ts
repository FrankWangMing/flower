import { ShaderSet } from "../shader";
import { UniformSet, MaterialColor, MaterialShininess, LightDirection, LightColor, AmbientColor, PointSize } from "./uniform";
import { StateSet, RenderModeState } from "./state";
import { RenderMode, RenderModeConfig } from "./RenderMode";

// 导出渲染模式相关类型
export { RenderMode } from "./RenderMode";
export type { RenderModeConfig } from "./RenderMode";

export class Material {
    shader: ShaderSet = new ShaderSet()
    uniform: UniformSet = new UniformSet()
    state: StateSet = new StateSet()

    // 材质属性
    materialColor: MaterialColor
    materialShininess: MaterialShininess

    // 光照属性
    lightDirection: LightDirection
    lightColor: LightColor
    ambientColor: AmbientColor

    // 渲染模式
    renderMode: RenderModeState
    pointSize: PointSize

    constructor(renderModeConfig?: RenderModeConfig) {
        this.init(renderModeConfig)
    }
    init(renderModeConfig?: RenderModeConfig) {
        // 初始化材质属性
        this.materialColor = new MaterialColor()
        this.materialShininess = new MaterialShininess(32.0)

        // 初始化光照属性
        this.lightDirection = new LightDirection()
        this.lightColor = new LightColor()
        this.ambientColor = new AmbientColor()

        // 初始化渲染模式
        this.renderMode = new RenderModeState(renderModeConfig)
        this.pointSize = new PointSize(renderModeConfig?.pointSize ?? 0.0)

        // 添加到 uniform set
        this.uniform.add(this.materialColor)
        this.uniform.add(this.materialShininess)
        this.uniform.add(this.lightDirection)
        this.uniform.add(this.lightColor)
        this.uniform.add(this.ambientColor)
        this.uniform.add(this.pointSize)

        // 添加到 state set
        this.state.add(this.renderMode)
    }

    /**
     * 设置渲染模式
     */
    setRenderMode(config: RenderModeConfig) {
        this.renderMode.mode = config.mode;
        if (config.lineWidth !== undefined) {
            this.renderMode.lineWidth = config.lineWidth;
        }
        if (config.pointSize !== undefined) {
            this.renderMode.pointSize = config.pointSize;
            this.pointSize.size = config.pointSize;
        }
    }
}

