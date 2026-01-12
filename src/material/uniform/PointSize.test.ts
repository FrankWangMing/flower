import { describe, it, expect, beforeEach } from 'vitest'
import { PointSize } from './PointSize'

describe('PointSize', () => {
  let pointSize: PointSize

  beforeEach(() => {
    pointSize = new PointSize()
  })

  it('应该能够创建 PointSize 实例', () => {
    expect(pointSize).toBeInstanceOf(PointSize)
    expect(pointSize.name).toBe('uPointSize')
  })

  it('应该有默认大小 0.0', () => {
    expect(pointSize.size).toBe(0.0)
  })

  it('应该能够使用自定义大小创建', () => {
    const customPointSize = new PointSize(5.0)

    expect(customPointSize.size).toBe(5.0)
  })

  it('应该能够修改大小', () => {
    pointSize.size = 10.0

    expect(pointSize.size).toBe(10.0)
  })

  it('应该能够设置为 0.0', () => {
    const pointSize = new PointSize(5.0)
    pointSize.size = 0.0

    expect(pointSize.size).toBe(0.0)
  })

  it('应该能够设置为较大的值', () => {
    pointSize.size = 100.0

    expect(pointSize.size).toBe(100.0)
  })
})
