import { describe, it, expect, beforeEach } from 'vitest'
import { ModelMatrix } from './ModelMatrix'
import { mat4 } from 'gl-matrix-esm'

describe('ModelMatrix', () => {
  let modelMatrix: ModelMatrix

  beforeEach(() => {
    modelMatrix = new ModelMatrix()
  })

  it('应该能够创建 ModelMatrix 实例', () => {
    expect(modelMatrix).toBeInstanceOf(ModelMatrix)
    expect(modelMatrix.name).toBe('uModelMatrix')
  })

  it('应该有默认的矩阵', () => {
    expect(modelMatrix.matrix).toBeDefined()
    expect(modelMatrix.matrix).toHaveLength(16) // mat4 有 16 个元素
  })

  it('应该初始化为单位矩阵', () => {
    const identity = mat4.create()
    mat4.identity(identity)

    // 检查矩阵是否接近单位矩阵（允许浮点误差）
    for (let i = 0; i < 16; i++) {
      if (i % 5 === 0) {
        // 对角线元素应该是 1
        expect(modelMatrix.matrix[i]).toBeCloseTo(1.0, 5)
      } else {
        // 非对角线元素应该是 0
        expect(modelMatrix.matrix[i]).toBeCloseTo(0.0, 5)
      }
    }
  })

  it('应该能够更新矩阵', () => {
    const newMatrix = mat4.create()
    mat4.translate(newMatrix, newMatrix, [1, 2, 3])

    modelMatrix.updateMatrix(newMatrix)

    expect(modelMatrix.matrix).toBe(newMatrix)
  })
})
