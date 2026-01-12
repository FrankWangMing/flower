import { describe, it, expect, beforeEach } from 'vitest'
import { LightDirection } from './LightDirection'
import { vec3 } from 'gl-matrix-esm'

describe('LightDirection', () => {
  let lightDirection: LightDirection

  beforeEach(() => {
    lightDirection = new LightDirection()
  })

  it('应该能够创建 LightDirection 实例', () => {
    expect(lightDirection).toBeInstanceOf(LightDirection)
    expect(lightDirection.name).toBe('uLightDirection')
  })

  it('应该有默认方向', () => {
    expect(lightDirection.direction).toBeDefined()
    expect(lightDirection.direction).toHaveLength(3)
    // 默认方向是 (0.5, 1.0, 0.5)
    expect(lightDirection.direction[0]).toBeCloseTo(0.5, 5)
    expect(lightDirection.direction[1]).toBeCloseTo(1.0, 5)
    expect(lightDirection.direction[2]).toBeCloseTo(0.5, 5)
  })

  it('应该能够使用自定义方向创建', () => {
    const customDirection = vec3.fromValues(0.0, 1.0, 0.0)
    const customLightDirection = new LightDirection(customDirection)

    expect(customLightDirection.direction[0]).toBeCloseTo(0.0, 5)
    expect(customLightDirection.direction[1]).toBeCloseTo(1.0, 5)
    expect(customLightDirection.direction[2]).toBeCloseTo(0.0, 5)
  })

  it('应该克隆传入的方向', () => {
    const originalDirection = vec3.fromValues(1.0, 0.0, 0.0)
    const lightDirection = new LightDirection(originalDirection)

    // 修改原始方向不应该影响 LightDirection
    originalDirection[0] = 0.0

    expect(lightDirection.direction[0]).toBeCloseTo(1.0, 5)
    expect(originalDirection[0]).toBeCloseTo(0.0, 5)
  })

  it('应该能够修改方向', () => {
    lightDirection.direction[0] = 1.0
    lightDirection.direction[1] = 0.0
    lightDirection.direction[2] = 0.0

    expect(lightDirection.direction[0]).toBeCloseTo(1.0, 5)
    expect(lightDirection.direction[1]).toBeCloseTo(0.0, 5)
    expect(lightDirection.direction[2]).toBeCloseTo(0.0, 5)
  })
})
