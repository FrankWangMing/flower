import { describe, it, expect, beforeEach } from 'vitest'
import { AmbientColor } from './AmbientColor'
import { vec3 } from 'gl-matrix-esm'

describe('AmbientColor', () => {
  let ambientColor: AmbientColor

  beforeEach(() => {
    ambientColor = new AmbientColor()
  })

  it('应该能够创建 AmbientColor 实例', () => {
    expect(ambientColor).toBeInstanceOf(AmbientColor)
    expect(ambientColor.name).toBe('uAmbientColor')
  })

  it('应该有默认颜色', () => {
    expect(ambientColor.color).toBeDefined()
    expect(ambientColor.color).toHaveLength(3)
    // 默认是 (0.4, 0.4, 0.4)
    expect(ambientColor.color[0]).toBeCloseTo(0.4, 5)
    expect(ambientColor.color[1]).toBeCloseTo(0.4, 5)
    expect(ambientColor.color[2]).toBeCloseTo(0.4, 5)
  })

  it('应该能够使用自定义颜色创建', () => {
    const customColor = vec3.fromValues(0.2, 0.3, 0.4)
    const customAmbientColor = new AmbientColor(customColor)

    expect(customAmbientColor.color[0]).toBeCloseTo(0.2, 5)
    expect(customAmbientColor.color[1]).toBeCloseTo(0.3, 5)
    expect(customAmbientColor.color[2]).toBeCloseTo(0.4, 5)
  })

  it('应该克隆传入的颜色', () => {
    const originalColor = vec3.fromValues(0.5, 0.5, 0.5)
    const ambientColor = new AmbientColor(originalColor)

    // 修改原始颜色不应该影响 AmbientColor
    originalColor[0] = 0.0

    expect(ambientColor.color[0]).toBeCloseTo(0.5, 5)
    expect(originalColor[0]).toBeCloseTo(0.0, 5)
  })

  it('应该能够修改颜色', () => {
    ambientColor.color[0] = 0.1
    ambientColor.color[1] = 0.2
    ambientColor.color[2] = 0.3

    expect(ambientColor.color[0]).toBeCloseTo(0.1, 5)
    expect(ambientColor.color[1]).toBeCloseTo(0.2, 5)
    expect(ambientColor.color[2]).toBeCloseTo(0.3, 5)
  })
})
