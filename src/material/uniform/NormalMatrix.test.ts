import { describe, it, expect, beforeEach, vi } from 'vitest'
import { NormalMatrix } from './NormalMatrix'
import { mat4, mat3 } from 'gl-matrix-esm'

describe('NormalMatrix', () => {
  let normalMatrix: NormalMatrix
  let mockModelMatrix: { matrix: ReturnType<typeof mat4.create> }

  beforeEach(() => {
    mockModelMatrix = {
      matrix: mat4.create()
    }
    normalMatrix = new NormalMatrix(mockModelMatrix)
  })

  it('应该有正确的名称', () => {
    expect(normalMatrix.name).toBe('uNormalMatrix')
  })

  it('应该正确初始化', () => {
    expect(normalMatrix).toBeInstanceOf(NormalMatrix)
  })

  it('应该能够更新法线矩阵', () => {
    // 设置一个简单的模型矩阵（单位矩阵）
    mat4.identity(mockModelMatrix.matrix)
    
    // 调用 update 不应该抛出错误
    expect(() => normalMatrix.update()).not.toThrow()
  })

  it('应该能够处理非单位矩阵', () => {
    // 创建一个缩放矩阵
    mat4.fromScaling(mockModelMatrix.matrix, [2, 2, 2])
    
    // 调用 update 不应该抛出错误
    expect(() => normalMatrix.update()).not.toThrow()
  })

  it('应该能够处理旋转矩阵', () => {
    // 创建一个旋转矩阵
    mat4.fromRotation(mockModelMatrix.matrix, Math.PI / 4, [0, 1, 0])
    
    // 调用 update 不应该抛出错误
    expect(() => normalMatrix.update()).not.toThrow()
  })
})
