import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Event } from './basic'

describe('Event', () => {
  let event: Event

  beforeEach(() => {
    event = new Event()
  })

  describe('on', () => {
    it('应该能够注册事件监听器', () => {
      const handler = vi.fn()

      event.on('test', handler)

      expect(handler).not.toHaveBeenCalled()
    })

    it('应该能够注册多个监听器', () => {
      const handler1 = vi.fn()
      const handler2 = vi.fn()

      event.on('test', handler1)
      event.on('test', handler2)

      event.emit('test')

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('应该能够为不同事件类型注册监听器', () => {
      const handler1 = vi.fn()
      const handler2 = vi.fn()

      event.on('event1', handler1)
      event.on('event2', handler2)

      event.emit('event1')
      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).not.toHaveBeenCalled()
    })
  })

  describe('off', () => {
    it('应该能够注销事件监听器', () => {
      const handler = vi.fn()

      event.on('test', handler)
      event.off('test', handler)
      event.emit('test')

      expect(handler).not.toHaveBeenCalled()
    })

    it('应该只注销指定的监听器', () => {
      const handler1 = vi.fn()
      const handler2 = vi.fn()

      event.on('test', handler1)
      event.on('test', handler2)
      event.off('test', handler1)
      event.emit('test')

      expect(handler1).not.toHaveBeenCalled()
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('应该能够处理注销不存在的监听器', () => {
      const handler = vi.fn()

      expect(() => {
        event.off('test', handler)
      }).not.toThrow()
    })
  })

  describe('emit', () => {
    it('应该能够触发事件', () => {
      const handler = vi.fn()

      event.on('test', handler)
      event.emit('test')

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('应该能够传递事件数据', () => {
      const handler = vi.fn()
      const data = { message: 'hello' }

      event.on('test', handler)
      event.emit('test', data)

      expect(handler).toHaveBeenCalledWith(data)
    })

    it('应该能够触发多个监听器', () => {
      const handler1 = vi.fn()
      const handler2 = vi.fn()
      const handler3 = vi.fn()

      event.on('test', handler1)
      event.on('test', handler2)
      event.on('test', handler3)
      event.emit('test')

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
      expect(handler3).toHaveBeenCalledTimes(1)
    })

    it('应该支持事件冒泡', () => {
      const parent = new Event()
      const child = new Event()
      child.parent = parent

      const parentHandler = vi.fn()
      const childHandler = vi.fn()

      parent.on('test', parentHandler)
      child.on('test', childHandler)

      child.emit('test', null, true) // 启用冒泡

      expect(childHandler).toHaveBeenCalledTimes(1)
      expect(parentHandler).toHaveBeenCalledTimes(1)
    })

    it('应该能够禁用事件冒泡', () => {
      const parent = new Event()
      const child = new Event()
      child.parent = parent

      const parentHandler = vi.fn()
      const childHandler = vi.fn()

      parent.on('test', parentHandler)
      child.on('test', childHandler)

      child.emit('test', null, false) // 禁用冒泡

      expect(childHandler).toHaveBeenCalledTimes(1)
      expect(parentHandler).not.toHaveBeenCalled()
    })

    it('应该能够处理监听器中的错误', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })
      const errorHandler = vi.fn(() => {
        throw new Error('Test error')
      })
      const normalHandler = vi.fn()

      event.on('test', errorHandler)
      event.on('test', normalHandler)

      event.emit('test')

      expect(errorHandler).toHaveBeenCalled()
      expect(normalHandler).toHaveBeenCalled() // 应该继续执行其他监听器
      expect(consoleErrorSpy).toHaveBeenCalled()

      consoleErrorSpy.mockRestore()
    })
  })

  describe('once', () => {
    it('应该只触发一次监听器', () => {
      const handler = vi.fn()

      event.once('test', handler)
      event.emit('test')
      event.emit('test')

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('应该能够传递事件数据', () => {
      const handler = vi.fn()
      const data = { message: 'hello' }

      event.once('test', handler)
      event.emit('test', data)

      expect(handler).toHaveBeenCalledWith(data)
    })
  })

  describe('removeAllListeners', () => {
    it('应该能够移除指定类型的所有监听器', () => {
      const handler1 = vi.fn()
      const handler2 = vi.fn()

      event.on('test1', handler1)
      event.on('test2', handler2)

      event.removeAllListeners('test1')
      event.emit('test1')
      event.emit('test2')

      expect(handler1).not.toHaveBeenCalled()
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('应该能够移除所有监听器', () => {
      const handler1 = vi.fn()
      const handler2 = vi.fn()
      const handler3 = vi.fn()

      event.on('test1', handler1)
      event.on('test2', handler2)
      event.on('test3', handler3)

      event.removeAllListeners()
      event.emit('test1')
      event.emit('test2')
      event.emit('test3')

      expect(handler1).not.toHaveBeenCalled()
      expect(handler2).not.toHaveBeenCalled()
      expect(handler3).not.toHaveBeenCalled()
    })
  })
})
