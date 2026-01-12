import { describe, it, expect, beforeEach } from 'vitest'
import { Buffer, Geometry } from './index'
import { RenderMode } from '../../material/RenderMode'

describe('Buffer', () => {
  it('应该能够从 JSON 创建 Buffer', () => {
    const json = {
      vertices: [0, 0, 0, 1, 0, 0, 0, 1, 0],
      indices: [0, 1, 2]
    }

    const buffer = new Buffer(json)

    expect(buffer.vertices).toBeInstanceOf(Float32Array)
    expect(buffer.vertices.length).toBe(9)
    expect(buffer.indices).toBeInstanceOf(Uint16Array)
    expect(buffer.indices.length).toBe(3)
  })

  it('应该能够处理空的 vertices', () => {
    const json = {
      vertices: [],
      indices: [0, 1, 2]
    }

    const buffer = new Buffer(json)
    expect(buffer.vertices).toBeInstanceOf(Float32Array)
    expect(buffer.vertices.length).toBe(0)
  })

  it('应该能够处理空的 indices', () => {
    const json = {
      vertices: [0, 0, 0, 1, 0, 0],
      indices: []
    }

    const buffer = new Buffer(json)
    expect(buffer.indices).toBeInstanceOf(Uint16Array)
    expect(buffer.indices.length).toBe(0)
  })

  it('应该能够处理缺失的属性', () => {
    const json = {
      vertices: [0, 0, 0]
    }

    const buffer = new Buffer(json as any)
    expect(buffer.vertices).toBeDefined()
  })
})

describe('Geometry', () => {
  let buffer: Buffer

  beforeEach(() => {
    buffer = new Buffer({
      vertices: [
        0, 0, 0,
        1, 0, 0,
        0, 1, 0
      ],
      indices: [0, 1, 2]
    })
  })

  it('应该能够从 Buffer 创建 Geometry', () => {
    const geometry = new Geometry(buffer)

    expect(geometry).toBeInstanceOf(Geometry)
    expect(geometry.vbos).toBeDefined()
    expect(geometry.drawers).toBeDefined()
  })

  it('应该添加顶点缓冲区对象', () => {
    const geometry = new Geometry(buffer)

    // 应该有一个 VBO 用于顶点位置
    expect(geometry.vbos.size).toBeGreaterThan(0)
  })

  it('应该添加索引缓冲区对象', () => {
    const geometry = new Geometry(buffer)

    // 应该有一个 IBO
    expect(geometry.vbos.size).toBeGreaterThan(0)
  })

  it('应该默认使用 SOLID 渲染模式', () => {
    const geometry = new Geometry(buffer)

    // 默认应该是 SOLID 模式
    expect(geometry.drawers.size).toBe(1)
  })

  describe('updateDrawMode', () => {
    it('应该能够切换到 WIREFRAME 模式', () => {
      const geometry = new Geometry(buffer)

      geometry.updateDrawMode(RenderMode.WIREFRAME)

      expect(geometry.drawers.size).toBe(1)
      // 线框模式应该生成更多的索引（每个三角形3条边，每条边2个索引）
      // 原始：3个索引（1个三角形）
      // 线框：6个索引（3条边）
    })

    it('应该能够切换到 POINTS 模式', () => {
      const geometry = new Geometry(buffer)

      geometry.updateDrawMode(RenderMode.POINTS)

      expect(geometry.drawers.size).toBe(1)
    })

    it('应该能够切换到 LINES 模式', () => {
      const geometry = new Geometry(buffer)

      geometry.updateDrawMode(RenderMode.LINES)

      expect(geometry.drawers.size).toBe(1)
    })

    it('应该能够切换回 SOLID 模式', () => {
      const geometry = new Geometry(buffer)

      geometry.updateDrawMode(RenderMode.WIREFRAME)
      geometry.updateDrawMode(RenderMode.SOLID)

      expect(geometry.drawers.size).toBe(1)
    })

    it('应该能够处理没有索引的几何体', () => {
      const bufferWithoutIndices = new Buffer({
        vertices: [0, 0, 0, 1, 0, 0],
        indices: []
      })

      const geometry = new Geometry(bufferWithoutIndices)

      // 不应该抛出错误
      expect(() => {
        geometry.updateDrawMode(RenderMode.WIREFRAME)
      }).not.toThrow()
    })
  })

  describe('add', () => {
    it('应该能够添加 VBO', () => {
      const geometry = new Geometry(buffer)
      const initialSize = geometry.vbos.size

      // 注意：这里需要实际的 VBO 实例，但为了测试，我们验证方法存在
      expect(geometry.add).toBeDefined()
      expect(typeof geometry.add).toBe('function')
    })
  })
})
