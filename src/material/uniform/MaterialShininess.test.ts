import { describe, it, expect, beforeEach } from 'vitest'
import { MaterialShininess } from './MaterialShininess'

describe('MaterialShininess', () => {
  let materialShininess: MaterialShininess

  beforeEach(() => {
    materialShininess = new MaterialShininess()
  })

  it('应该能够创建 MaterialShininess 实例', () => {
    expect(materialShininess).toBeInstanceOf(MaterialShininess)
    expect(materialShininess.name).toBe('uMaterialShininess')
  })

  it('应该有默认光泽度 32.0', () => {
    expect(materialShininess.shininess).toBe(32.0)
  })

  it('应该能够使用自定义光泽度创建', () => {
    const customShininess = new MaterialShininess(64.0)

    expect(customShininess.shininess).toBe(64.0)
  })

  it('应该能够修改光泽度', () => {
    materialShininess.shininess = 128.0

    expect(materialShininess.shininess).toBe(128.0)
  })

  it('应该能够设置为较小的值', () => {
    materialShininess.shininess = 1.0

    expect(materialShininess.shininess).toBe(1.0)
  })

  it('应该能够设置为较大的值', () => {
    materialShininess.shininess = 256.0

    expect(materialShininess.shininess).toBe(256.0)
  })
})
