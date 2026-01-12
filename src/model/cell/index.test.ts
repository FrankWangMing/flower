import { describe, it, expect, beforeEach } from 'vitest'
import { Cell } from './index'
import { Material } from '../../material/Material'
import { Geometry, Buffer } from '../geometry'
import { ModelMatrix } from '../../camera/ModelMatrix'

describe('Cell', () => {
  let geometry: Geometry
  let material: Material

  beforeEach(() => {
    const buffer = new Buffer({
      vertices: [0, 0, 0, 1, 0, 0, 0, 1, 0],
      indices: [0, 1, 2]
    })
    geometry = new Geometry(buffer)
    material = new Material()
  })

  it('应该能够创建 Cell 实例', () => {
    const cell = new Cell({ geometry, material })

    expect(cell).toBeInstanceOf(Cell)
    expect(cell.geometry).toBe(geometry)
    expect(cell.material).toBe(material)
    expect(cell.modelMatrix).toBeInstanceOf(ModelMatrix)
  })

  it('应该能够使用自定义 ModelMatrix', () => {
    const customModelMatrix = new ModelMatrix()
    const cell = new Cell({ geometry, material, modelMatrix: customModelMatrix })

    expect(cell.modelMatrix).toBe(customModelMatrix)
  })

  it('应该自动创建 ModelMatrix', () => {
    const cell = new Cell({ geometry, material })

    expect(cell.modelMatrix).toBeDefined()
    expect(cell.modelMatrix).toBeInstanceOf(ModelMatrix)
  })

  it('应该初始化变换动画', () => {
    const cell = new Cell({ geometry, material })

    expect(cell.transformAnimation).toBeDefined()
  })

  describe('getAnimation', () => {
    it('应该返回变换动画对象', () => {
      const cell = new Cell({ geometry, material })

      const animation = cell.getAnimation()

      expect(animation).toBeDefined()
      expect(animation).toBe(cell.transformAnimation)
    })

    it('应该能够重新创建动画对象', () => {
      const cell = new Cell({ geometry, material })
      const originalAnimation = cell.transformAnimation

      // 删除动画对象
      cell.transformAnimation = undefined

      const newAnimation = cell.getAnimation()

      expect(newAnimation).toBeDefined()
      expect(newAnimation).not.toBe(originalAnimation)
    })
  })

  it('应该继承 Event 类', () => {
    const cell = new Cell({ geometry, material })

    // 应该能够使用 Event 的方法
    expect(typeof cell.on).toBe('function')
    expect(typeof cell.emit).toBe('function')
    expect(typeof cell.off).toBe('function')
  })
})
