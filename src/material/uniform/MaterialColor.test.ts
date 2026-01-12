import { describe, it, expect, beforeEach } from 'vitest'
import { MaterialColor } from './MaterialColor'
import { vec3 } from 'gl-matrix-esm'

describe('MaterialColor', () => {
  let materialColor: MaterialColor

  beforeEach(() => {
    materialColor = new MaterialColor()
  })

  it('应该能够创建 MaterialColor 实例', () => {
    expect(materialColor).toBeInstanceOf(MaterialColor)
    expect(materialColor.name).toBe('uMaterialColor')
  })

  it('应该有默认颜色', () => {
    expect(materialColor.color).toBeDefined()
    expect(materialColor.color).toHaveLength(3)
    // 默认是浅灰色 (0.8, 0.8, 0.8)
    expect(materialColor.color[0]).toBeCloseTo(0.8, 5)
    expect(materialColor.color[1]).toBeCloseTo(0.8, 5)
    expect(materialColor.color[2]).toBeCloseTo(0.8, 5)
  })

  it('应该能够使用自定义颜色创建', () => {
    const customColor = vec3.fromValues(1.0, 0.5, 0.0)
    const customMaterialColor = new MaterialColor(customColor)

    expect(customMaterialColor.color[0]).toBeCloseTo(1.0, 5)
    expect(customMaterialColor.color[1]).toBeCloseTo(0.5, 5)
    expect(customMaterialColor.color[2]).toBeCloseTo(0.0, 5)
  })

  it('应该克隆传入的颜色', () => {
    const originalColor = vec3.fromValues(1.0, 0.0, 0.0)
    const materialColor = new MaterialColor(originalColor)

    // 修改原始颜色不应该影响 MaterialColor
    originalColor[0] = 0.0

    expect(materialColor.color[0]).toBeCloseTo(1.0, 5)
    expect(originalColor[0]).toBeCloseTo(0.0, 5)
  })

  it('应该能够修改颜色', () => {
    materialColor.color[0] = 1.0
    materialColor.color[1] = 0.5
    materialColor.color[2] = 0.25

    expect(materialColor.color[0]).toBeCloseTo(1.0, 5)
    expect(materialColor.color[1]).toBeCloseTo(0.5, 5)
    expect(materialColor.color[2]).toBeCloseTo(0.25, 5)
  })
})
