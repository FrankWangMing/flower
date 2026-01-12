import { describe, it, expect, beforeEach } from 'vitest'
import { LightColor } from './LightColor'
import { vec3 } from 'gl-matrix-esm'

describe('LightColor', () => {
  let lightColor: LightColor

  beforeEach(() => {
    lightColor = new LightColor()
  })

  it('应该能够创建 LightColor 实例', () => {
    expect(lightColor).toBeInstanceOf(LightColor)
    expect(lightColor.name).toBe('uLightColor')
  })

  it('应该有默认颜色（白色）', () => {
    expect(lightColor.color).toBeDefined()
    expect(lightColor.color).toHaveLength(3)
    // 默认是白色 (1.0, 1.0, 1.0)
    expect(lightColor.color[0]).toBeCloseTo(1.0, 5)
    expect(lightColor.color[1]).toBeCloseTo(1.0, 5)
    expect(lightColor.color[2]).toBeCloseTo(1.0, 5)
  })

  it('应该能够使用自定义颜色创建', () => {
    const customColor = vec3.fromValues(1.0, 0.5, 0.0)
    const customLightColor = new LightColor(customColor)

    expect(customLightColor.color[0]).toBeCloseTo(1.0, 5)
    expect(customLightColor.color[1]).toBeCloseTo(0.5, 5)
    expect(customLightColor.color[2]).toBeCloseTo(0.0, 5)
  })

  it('应该克隆传入的颜色', () => {
    const originalColor = vec3.fromValues(1.0, 0.0, 0.0)
    const lightColor = new LightColor(originalColor)

    // 修改原始颜色不应该影响 LightColor
    originalColor[0] = 0.0

    expect(lightColor.color[0]).toBeCloseTo(1.0, 5)
    expect(originalColor[0]).toBeCloseTo(0.0, 5)
  })

  it('应该能够修改颜色', () => {
    lightColor.color[0] = 0.5
    lightColor.color[1] = 0.75
    lightColor.color[2] = 1.0

    expect(lightColor.color[0]).toBeCloseTo(0.5, 5)
    expect(lightColor.color[1]).toBeCloseTo(0.75, 5)
    expect(lightColor.color[2]).toBeCloseTo(1.0, 5)
  })
})
