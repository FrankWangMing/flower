import { describe, it, expect, beforeEach } from 'vitest'
import { Material } from './Material'
import { RenderMode } from './RenderMode'
import { vec3 } from 'gl-matrix-esm'

describe('Material', () => {
  let material: Material

  beforeEach(() => {
    material = new Material()
  })

  it('应该能够创建 Material 实例', () => {
    expect(material).toBeInstanceOf(Material)
    expect(material.shader).toBeDefined()
    expect(material.uniform).toBeDefined()
    expect(material.state).toBeDefined()
  })

  it('应该初始化所有必需的属性', () => {
    expect(material.materialColor).toBeDefined()
    expect(material.materialShininess).toBeDefined()
    expect(material.lightDirection).toBeDefined()
    expect(material.lightColor).toBeDefined()
    expect(material.ambientColor).toBeDefined()
    expect(material.renderMode).toBeDefined()
    expect(material.pointSize).toBeDefined()
  })

  it('应该将 uniform 添加到 uniform set', () => {
    expect(material.uniform.has(material.materialColor)).toBe(true)
    expect(material.uniform.has(material.materialShininess)).toBe(true)
    expect(material.uniform.has(material.lightDirection)).toBe(true)
    expect(material.uniform.has(material.lightColor)).toBe(true)
    expect(material.uniform.has(material.ambientColor)).toBe(true)
    expect(material.uniform.has(material.pointSize)).toBe(true)
  })

  it('应该将 renderMode 添加到 state set', () => {
    expect(material.state.has(material.renderMode)).toBe(true)
  })

  it('应该能够使用自定义渲染模式配置创建', () => {
    const config = {
      mode: RenderMode.WIREFRAME,
      lineWidth: 2.0,
      pointSize: 5.0
    }
    const customMaterial = new Material(config)

    expect(customMaterial.renderMode.mode).toBe(RenderMode.WIREFRAME)
    expect(customMaterial.renderMode.lineWidth).toBe(2.0)
    expect(customMaterial.renderMode.pointSize).toBe(5.0)
    expect(customMaterial.pointSize.size).toBe(5.0)
  })

  describe('setRenderMode', () => {
    it('应该能够设置渲染模式', () => {
      material.setRenderMode({
        mode: RenderMode.WIREFRAME,
        lineWidth: 2.0
      })

      expect(material.renderMode.mode).toBe(RenderMode.WIREFRAME)
      expect(material.renderMode.lineWidth).toBe(2.0)
    })

    it('应该能够更新点大小', () => {
      material.setRenderMode({
        mode: RenderMode.POINTS,
        pointSize: 10.0
      })

      expect(material.renderMode.pointSize).toBe(10.0)
      expect(material.pointSize.size).toBe(10.0)
    })

    it('应该能够同时设置线宽和点大小', () => {
      material.setRenderMode({
        mode: RenderMode.WIREFRAME,
        lineWidth: 3.0,
        pointSize: 8.0
      })

      expect(material.renderMode.lineWidth).toBe(3.0)
      expect(material.renderMode.pointSize).toBe(8.0)
    })
  })

  describe('setAmbientColor', () => {
    it('应该能够设置环境光颜色', () => {
      const color = vec3.fromValues(0.5, 0.6, 0.7)
      material.setAmbientColor(color)

      expect(material.ambientColor.color[0]).toBeCloseTo(0.5)
      expect(material.ambientColor.color[1]).toBeCloseTo(0.6)
      expect(material.ambientColor.color[2]).toBeCloseTo(0.7)
    })

    it('应该能够更新环境光颜色', () => {
      const color1 = vec3.fromValues(0.1, 0.2, 0.3)
      const color2 = vec3.fromValues(0.9, 0.8, 0.7)

      material.setAmbientColor(color1)
      expect(material.ambientColor.color[0]).toBeCloseTo(0.1)

      material.setAmbientColor(color2)
      expect(material.ambientColor.color[0]).toBeCloseTo(0.9)
    })
  })
})
