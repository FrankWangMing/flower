import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Uniform, UniformSet } from './Uniform'

describe('Uniform', () => {
  it('应该能够创建 Uniform 实例', () => {
    class TestUniform extends Uniform {
      name = 'testUniform'
    }
    
    const uniform = new TestUniform()
    expect(uniform).toBeInstanceOf(Uniform)
    expect(uniform.name).toBe('testUniform')
  })

  it('应该有默认的矩阵', () => {
    class TestUniform extends Uniform {
      name = 'testUniform'
    }
    
    const uniform = new TestUniform()
    expect(uniform.matrix).toBeDefined()
    expect(uniform.matrix).toHaveLength(16) // mat4 有 16 个元素
  })

  it('应该能够更新矩阵', () => {
    class TestUniform extends Uniform {
      name = 'testUniform'
    }
    
    const uniform = new TestUniform()
    const newMatrix = new Float32Array(16)
    newMatrix[0] = 1
    
    uniform.updateMatrix(newMatrix)
    expect(uniform.matrix).toBe(newMatrix)
  })
})

describe('UniformSet', () => {
  it('应该能够创建 UniformSet 实例', () => {
    const uniformSet = new UniformSet()
    expect(uniformSet).toBeInstanceOf(UniformSet)
    expect(uniformSet).toBeInstanceOf(Set)
  })

  it('应该能够添加 Uniform', () => {
    class TestUniform extends Uniform {
      name = 'testUniform'
    }
    
    const uniformSet = new UniformSet()
    const uniform = new TestUniform()
    
    uniformSet.add(uniform)
    expect(uniformSet.has(uniform)).toBe(true)
    expect(uniformSet.size).toBe(1)
  })

  it('应该能够添加多个 Uniform', () => {
    class TestUniform1 extends Uniform {
      name = 'testUniform1'
    }
    
    class TestUniform2 extends Uniform {
      name = 'testUniform2'
    }
    
    const uniformSet = new UniformSet()
    const uniform1 = new TestUniform1()
    const uniform2 = new TestUniform2()
    
    uniformSet.add(uniform1)
    uniformSet.add(uniform2)
    
    expect(uniformSet.size).toBe(2)
    expect(uniformSet.has(uniform1)).toBe(true)
    expect(uniformSet.has(uniform2)).toBe(true)
  })
})
