import { describe, it, expect } from 'vitest'
import { generateWireframeIndices, generatePointIndices } from './wireframeUtils'

describe('wireframeUtils', () => {
  describe('generateWireframeIndices', () => {
    it('应该从三角形索引生成线框索引', () => {
      // 单个三角形：0-1-2
      const triangleIndices = new Uint16Array([0, 1, 2])
      const wireframe = generateWireframeIndices(triangleIndices)

      // 每个三角形生成 3 条边，每条边 2 个索引，共 6 个索引
      expect(wireframe.length).toBe(6)
      expect(wireframe).toEqual(new Uint16Array([0, 1, 1, 2, 2, 0]))
    })

    it('应该处理多个三角形', () => {
      // 两个三角形：0-1-2 和 3-4-5
      const triangleIndices = new Uint16Array([0, 1, 2, 3, 4, 5])
      const wireframe = generateWireframeIndices(triangleIndices)

      // 2 个三角形 × 3 条边 × 2 个索引 = 12 个索引
      expect(wireframe.length).toBe(12)
      expect(wireframe[0]).toBe(0)
      expect(wireframe[1]).toBe(1)
      expect(wireframe[2]).toBe(1)
      expect(wireframe[3]).toBe(2)
      expect(wireframe[4]).toBe(2)
      expect(wireframe[5]).toBe(0)
    })

    it('应该处理共享边的三角形', () => {
      // 两个共享一条边的三角形：0-1-2 和 1-2-3
      const triangleIndices = new Uint16Array([0, 1, 2, 1, 2, 3])
      const wireframe = generateWireframeIndices(triangleIndices)

      // 仍然生成 12 个索引（每个三角形独立处理）
      expect(wireframe.length).toBe(12)
    })

    it('应该返回 Uint16Array', () => {
      const triangleIndices = new Uint16Array([0, 1, 2])
      const wireframe = generateWireframeIndices(triangleIndices)

      expect(wireframe).toBeInstanceOf(Uint16Array)
    })
  })

  describe('generatePointIndices', () => {
    it('应该从三角形索引生成点云索引', () => {
      const triangleIndices = new Uint16Array([0, 1, 2])
      const points = generatePointIndices(triangleIndices)

      // 应该包含所有唯一的顶点索引
      expect(points.length).toBe(3)
      expect(points).toContain(0)
      expect(points).toContain(1)
      expect(points).toContain(2)
    })

    it('应该去除重复的顶点索引', () => {
      // 两个共享顶点的三角形：0-1-2 和 0-2-3
      const triangleIndices = new Uint16Array([0, 1, 2, 0, 2, 3])
      const points = generatePointIndices(triangleIndices)

      // 应该只有 4 个唯一顶点：0, 1, 2, 3
      expect(points.length).toBe(4)
      expect(points).toContain(0)
      expect(points).toContain(1)
      expect(points).toContain(2)
      expect(points).toContain(3)
    })

    it('应该对索引进行排序', () => {
      const triangleIndices = new Uint16Array([2, 0, 1, 5, 3, 4])
      const points = generatePointIndices(triangleIndices)

      // 应该按升序排序
      expect(points[0]).toBeLessThanOrEqual(points[1])
      expect(points[1]).toBeLessThanOrEqual(points[2])
      expect(points[2]).toBeLessThanOrEqual(points[3])
    })

    it('应该返回 Uint16Array', () => {
      const triangleIndices = new Uint16Array([0, 1, 2])
      const points = generatePointIndices(triangleIndices)

      expect(points).toBeInstanceOf(Uint16Array)
    })

    it('应该处理单个三角形', () => {
      const triangleIndices = new Uint16Array([10, 20, 30])
      const points = generatePointIndices(triangleIndices)

      expect(points.length).toBe(3)
      expect(points).toEqual(new Uint16Array([10, 20, 30]))
    })

    it('应该处理大量重复索引', () => {
      // 所有顶点都相同（退化三角形）
      const triangleIndices = new Uint16Array([5, 5, 5, 5, 5, 5])
      const points = generatePointIndices(triangleIndices)

      // 应该只有一个唯一顶点
      expect(points.length).toBe(1)
      expect(points[0]).toBe(5)
    })
  })
})
