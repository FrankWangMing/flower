import { describe, it, expect } from 'vitest'
import { RenderMode } from './RenderMode'
import { RenderModeState } from './state/RenderModeState'

describe('RenderMode', () => {
  it('应该定义所有渲染模式枚举值', () => {
    expect(RenderMode.SOLID).toBe('SOLID')
    expect(RenderMode.WIREFRAME).toBe('WIREFRAME')
    expect(RenderMode.POINTS).toBe('POINTS')
    expect(RenderMode.LINES).toBe('LINES')
  })
})

describe('RenderModeState', () => {
  it('应该使用默认值创建', () => {
    const state = new RenderModeState()

    expect(state.mode).toBe(RenderMode.SOLID)
    expect(state.lineWidth).toBe(1.0)
    expect(state.pointSize).toBe(1.0)
  })

  it('应该能够使用配置创建', () => {
    const config = {
      mode: RenderMode.WIREFRAME,
      lineWidth: 2.5,
      pointSize: 5.0
    }
    const state = new RenderModeState(config)

    expect(state.mode).toBe(RenderMode.WIREFRAME)
    expect(state.lineWidth).toBe(2.5)
    expect(state.pointSize).toBe(5.0)
  })

  it('应该能够部分配置', () => {
    const state = new RenderModeState({
      mode: RenderMode.POINTS
    })

    expect(state.mode).toBe(RenderMode.POINTS)
    expect(state.lineWidth).toBe(1.0) // 默认值
    expect(state.pointSize).toBe(1.0) // 默认值
  })

  it('应该能够使用 default 静态方法创建', () => {
    const state = RenderModeState.default()

    expect(state).toBeInstanceOf(RenderModeState)
    expect(state.mode).toBe(RenderMode.SOLID)
    expect(state.lineWidth).toBe(1.0)
    expect(state.pointSize).toBe(1.0)
  })

  it('应该能够处理所有渲染模式', () => {
    const modes = [
      RenderMode.SOLID,
      RenderMode.WIREFRAME,
      RenderMode.POINTS,
      RenderMode.LINES
    ]

    modes.forEach(mode => {
      const state = new RenderModeState({ mode })
      expect(state.mode).toBe(mode)
    })
  })
})
