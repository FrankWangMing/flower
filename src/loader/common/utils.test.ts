import { describe, it, expect } from 'vitest'
import { getNumComponents, getComponentSize, getTypedArrayCtor, readComponent } from './utils'

describe('utils', () => {
  describe('getNumComponents', () => {
    it('应该为 SCALAR 返回 1', () => {
      expect(getNumComponents('SCALAR')).toBe(1)
    })

    it('应该为 VEC2 返回 2', () => {
      expect(getNumComponents('VEC2')).toBe(2)
    })

    it('应该为 VEC3 返回 3', () => {
      expect(getNumComponents('VEC3')).toBe(3)
    })

    it('应该为 VEC4 返回 4', () => {
      expect(getNumComponents('VEC4')).toBe(4)
    })

    it('应该为 MAT2 返回 4', () => {
      expect(getNumComponents('MAT2')).toBe(4)
    })

    it('应该为 MAT3 返回 9', () => {
      expect(getNumComponents('MAT3')).toBe(9)
    })

    it('应该为 MAT4 返回 16', () => {
      expect(getNumComponents('MAT4')).toBe(16)
    })
  })

  describe('getComponentSize', () => {
    it('应该为 BYTE 和 UNSIGNED_BYTE 返回 1', () => {
      expect(getComponentSize(5120)).toBe(1) // BYTE
      expect(getComponentSize(5121)).toBe(1) // UNSIGNED_BYTE
    })

    it('应该为 SHORT 和 UNSIGNED_SHORT 返回 2', () => {
      expect(getComponentSize(5122)).toBe(2) // SHORT
      expect(getComponentSize(5123)).toBe(2) // UNSIGNED_SHORT
    })

    it('应该为 UNSIGNED_INT 和 FLOAT 返回 4', () => {
      expect(getComponentSize(5125)).toBe(4) // UNSIGNED_INT
      expect(getComponentSize(5126)).toBe(4) // FLOAT
    })

    it('应该对不支持的 componentType 抛出错误', () => {
      expect(() => getComponentSize(9999)).toThrow('不支持的 accessor.componentType')
    })
  })

  describe('getTypedArrayCtor', () => {
    it('应该返回正确的 TypedArray 构造函数', () => {
      expect(getTypedArrayCtor(5120)).toBe(Int8Array)
      expect(getTypedArrayCtor(5121)).toBe(Uint8Array)
      expect(getTypedArrayCtor(5122)).toBe(Int16Array)
      expect(getTypedArrayCtor(5123)).toBe(Uint16Array)
      expect(getTypedArrayCtor(5125)).toBe(Uint32Array)
      expect(getTypedArrayCtor(5126)).toBe(Float32Array)
    })

    it('应该对不支持的 componentType 抛出错误', () => {
      expect(() => getTypedArrayCtor(9999)).toThrow('不支持的 accessor.componentType')
    })
  })

  describe('readComponent', () => {
    it('应该正确读取 Int8 值', () => {
      const buffer = new ArrayBuffer(1)
      const dv = new DataView(buffer)
      dv.setInt8(0, -42)
      expect(readComponent(dv, 0, 5120)).toBe(-42)
    })

    it('应该正确读取 Uint8 值', () => {
      const buffer = new ArrayBuffer(1)
      const dv = new DataView(buffer)
      dv.setUint8(0, 255)
      expect(readComponent(dv, 0, 5121)).toBe(255)
    })

    it('应该正确读取 Int16 值', () => {
      const buffer = new ArrayBuffer(2)
      const dv = new DataView(buffer)
      dv.setInt16(0, -1234, true)
      expect(readComponent(dv, 0, 5122)).toBe(-1234)
    })

    it('应该正确读取 Uint16 值', () => {
      const buffer = new ArrayBuffer(2)
      const dv = new DataView(buffer)
      dv.setUint16(0, 65535, true)
      expect(readComponent(dv, 0, 5123)).toBe(65535)
    })

    it('应该正确读取 Uint32 值', () => {
      const buffer = new ArrayBuffer(4)
      const dv = new DataView(buffer)
      dv.setUint32(0, 4294967295, true)
      expect(readComponent(dv, 0, 5125)).toBe(4294967295)
    })

    it('应该正确读取 Float32 值', () => {
      const buffer = new ArrayBuffer(4)
      const dv = new DataView(buffer)
      dv.setFloat32(0, 3.14159, true)
      expect(readComponent(dv, 0, 5126)).toBeCloseTo(3.14159, 5)
    })

    it('应该对不支持的 componentType 抛出错误', () => {
      const buffer = new ArrayBuffer(1)
      const dv = new DataView(buffer)
      expect(() => readComponent(dv, 0, 9999)).toThrow('不支持的 accessor.componentType')
    })
  })
})
