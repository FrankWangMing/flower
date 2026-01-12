import React, { useEffect, useRef, useState } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';
import { EventManager, InteractionEventType } from '../../src/interaction/index';

type CubeJson = {
  vertices: number[];
  indices: number[];
};

async function loadCubeJson(): Promise<CubeJson> {
  const res = await fetch('/cube.json');
  if (!res.ok) throw new Error(`加载 cube.json 失败: ${res.status}`);
  return (await res.json()) as CubeJson;
}

/**
 * 交互事件系统演示
 *
 * 展示功能：
 * 1. 全局事件监听（EventManager）
 * 2. 对象事件监听（Cell.on）
 * 3. 对象拾取和选择
 * 4. 鼠标悬停检测
 * 5. 点击反馈
 */
export default function DemoEvents() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [info, setInfo] = useState<string>('🖱️ 移动鼠标到立方体上，然后点击');
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  const [hoveredCell, setHoveredCell] = useState<Cell | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const [eventLog, setEventLog] = useState<string[]>([]);

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const scene = new Scene();
    scene.mount(mountEl);

    let raf = 0;
    let disposed = false;

    (async () => {
      try {
        const cubeJson = await loadCubeJson();
        if (disposed) return;

        // 创建多个立方体
        const cells: Cell[] = [];
        const positions = [
          { x: -2, y: 0, z: 0 },
          { x: 0, y: 0, z: 0 },
          { x: 2, y: 0, z: 0 },
        ];

        positions.forEach((pos, index) => {
          const buffer = new Buffer(cubeJson);
          const material = new Material();
          const cell = new Cell({
            geometry: new Geometry(buffer),
            material: material,
          });

          // 为每个 cell 设置标识
          (cell as any).index = index;
          (cell as any).position = pos;

          cells.push(cell);
          scene.add(cell);
        });

        scene.build();

        // 获取事件管理器
        const eventManager = EventManager.getInstance();

        // ========== 全局事件监听 ==========

        // 监听所有点击事件
        eventManager.on(InteractionEventType.CLICK, (event) => {
          const log = `[全局] 点击事件 - 坐标: (${event.clientX.toFixed(0)}, ${event.clientY.toFixed(0)})`;
          setEventLog(prev => [log, ...prev].slice(0, 10)); // 保留最近10条

          if (event.hitObject) {
            const cell = event.hitObject as Cell;
            const index = (cell as any).index;
            setInfo(`✅ 点击了立方体 #${index + 1}`);
            setSelectedCell(cell);
            setClickCount(prev => prev + 1);
          } else {
            setInfo('❌ 点击了空白区域');
            setSelectedCell(null);
          }
        });

        // 监听鼠标移动事件（用于显示坐标）
        let lastLogTime = 0;
        eventManager.on(InteractionEventType.MOUSE_MOVE, (event) => {
          const now = Date.now();
          // 节流：每200ms更新一次
          if (now - lastLogTime > 200) {
            lastLogTime = now;
            if (event.hitObject) {
              const cell = event.hitObject as Cell;
              const index = (cell as any).index;
              setInfo(`🖱️ 悬停在立方体 #${index + 1} 上`);
            } else {
              setInfo('🖱️ 移动鼠标到立方体上，然后点击');
            }
          }
        });

        // 监听鼠标按下事件
        eventManager.on(InteractionEventType.MOUSE_DOWN, (event) => {
          if (event.hitObject) {
            const cell = event.hitObject as Cell;
            const index = (cell as any).index;
            const log = `[全局] 鼠标按下 - 立方体 #${index + 1}`;
            setEventLog(prev => [log, ...prev].slice(0, 10));
          }
        });

        // 监听鼠标释放事件
        eventManager.on(InteractionEventType.MOUSE_UP, (event) => {
          if (event.hitObject) {
            const cell = event.hitObject as Cell;
            const index = (cell as any).index;
            const log = `[全局] 鼠标释放 - 立方体 #${index + 1}`;
            setEventLog(prev => [log, ...prev].slice(0, 10));
          }
        });

        // 监听键盘事件
        eventManager.on(InteractionEventType.KEY_DOWN, (event) => {
          const keyEvent = event.originalEvent as KeyboardEvent;
          const log = `[全局] 按键: ${keyEvent.key}`;
          setEventLog(prev => [log, ...prev].slice(0, 10));

          if (keyEvent.key === 'Escape') {
            setSelectedCell(null);
            setInfo('🔄 已清除选择');
          } else if (keyEvent.key === '+' || keyEvent.key === '=' || keyEvent.key === 'PageUp') {
            setInfo('🔍 放大中...');
          } else if (keyEvent.key === '-' || keyEvent.key === '_' || keyEvent.key === 'PageDown') {
            setInfo('🔍 缩小中...');
          }
        });

        // 监听滚轮事件
        eventManager.on(InteractionEventType.MOUSE_WHEEL, (event) => {
          const wheelEvent = event.originalEvent as WheelEvent;
          const direction = wheelEvent.deltaY > 0 ? '缩小' : '放大';
          const log = `[全局] 滚轮: ${direction}`;
          setEventLog(prev => [log, ...prev].slice(0, 10));
          setInfo(`🔍 滚轮${direction}中...`);
        });

        // ========== 对象事件监听 ==========

        cells.forEach((cell, index) => {
          // 监听点击事件
          cell.on('click', (event: any) => {
            const log = `[对象 #${index + 1}] 被点击了！`;
            setEventLog(prev => [log, ...prev].slice(0, 10));
            console.log(`立方体 #${index + 1} 被点击`, event);
          });

          // 监听鼠标按下
          cell.on('mousedown', (event: any) => {
            console.log(`立方体 #${index + 1} 鼠标按下`, event);
            setHoveredCell(cell);
          });

          // 监听鼠标释放
          cell.on('mouseup', (event: any) => {
            console.log(`立方体 #${index + 1} 鼠标释放`, event);
          });

          // 监听鼠标移动（进入对象）
          cell.on('mousemove', (event: any) => {
            if (!hoveredCell || hoveredCell !== cell) {
              setHoveredCell(cell);
              console.log(`鼠标进入立方体 #${index + 1}`);
            }
          });

          // 自定义事件示例
          cell.on('customEvent', (data: any) => {
            console.log(`立方体 #${index + 1} 收到自定义事件:`, data);
          });
        });

        // 演示：3秒后触发自定义事件
        setTimeout(() => {
          cells[0].emit('customEvent', { message: 'Hello from custom event!' });
        }, 3000);

        // ========== 渲染循环 ==========
        const render = () => {
          if (disposed) return;
          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        console.error('创建交互事件演示失败:', e);
        setInfo('❌ 初始化失败: ' + (e as Error).message);
      }
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      mountEl.innerHTML = '';

      // 清理事件监听
      const eventManager = EventManager.getInstance();
      eventManager.removeAllListeners();
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: 480,
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 8,
          overflow: 'hidden',
          backgroundColor: '#1a1a1a',
          cursor: 'pointer',
        }}
      />

      {/* 信息显示区域 */}
      <div style={{ marginTop: 16 }}>
        <div style={{
          padding: 12,
          backgroundColor: '#f5f5f5',
          borderRadius: 4,
          marginBottom: 12
        }}>
          <div style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8 }}>
            {info}
          </div>
          <div style={{ fontSize: 12, color: '#666' }}>
            {selectedCell && `已选择: 立方体 #${((selectedCell as any).index || 0) + 1}`}
            {hoveredCell && !selectedCell && `悬停: 立方体 #${((hoveredCell as any).index || 0) + 1}`}
          </div>
          <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
            点击次数: {clickCount} | 按 ESC 清除选择
          </div>
        </div>

        {/* 事件日志 */}
        <div style={{
          padding: 12,
          backgroundColor: '#f9f9f9',
          borderRadius: 4,
          maxHeight: 200,
          overflowY: 'auto'
        }}>
          <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: '#333' }}>
            事件日志 (最近10条):
          </div>
          {eventLog.length === 0 ? (
            <div style={{ fontSize: 11, color: '#999', fontStyle: 'italic' }}>
              暂无事件...
            </div>
          ) : (
            <div style={{ fontSize: 11, fontFamily: 'monospace', lineHeight: 1.6 }}>
              {eventLog.map((log, index) => (
                <div key={index} style={{ color: '#666', marginBottom: 2 }}>
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 功能说明 */}
        <div style={{
          marginTop: 12,
          padding: 12,
          backgroundColor: '#e8f4f8',
          borderRadius: 4,
          fontSize: 12,
          lineHeight: 1.6,
          color: '#333'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: 4 }}>📋 功能说明:</div>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>🖱️ <strong>鼠标移动</strong>: 悬停在立方体上查看提示</li>
            <li>👆 <strong>点击</strong>: 选择立方体，查看控制台输出</li>
            <li>🖱️ <strong>拖拽</strong>: 拖拽鼠标旋转视角</li>
            <li>🔍 <strong>滚轮缩放</strong>: 向上滚动放大，向下滚动缩小</li>
            <li>⌨️ <strong>键盘缩放</strong>: 按 +/- 或 PageUp/PageDown 缩放</li>
            <li>⌨️ <strong>键盘</strong>: 按 ESC 清除选择</li>
            <li>📊 <strong>事件日志</strong>: 实时显示全局和对象事件</li>
            <li>🔔 <strong>自定义事件</strong>: 3秒后自动触发（查看控制台）</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
