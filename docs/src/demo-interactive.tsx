import React, { useEffect, useRef, useState } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';

/**
 * 示例 4: 交互式相机控制
 *
 * 展示鼠标交互功能：
 * - 鼠标拖拽：旋转视角
 * - 鼠标滚轮：缩放（待实现）
 * - 右键拖拽：平移（待实现）
 */
export default function DemoInteractive() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [instructions, setInstructions] = useState<string>('');

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const scene = new Scene();
    scene.mount(mountEl);

    let raf = 0;
    let disposed = false;

    (async () => {
      try {
        const cubeRes = await fetch('/cube.json');
        if (!cubeRes.ok) throw new Error('无法加载 cube.json');
        const cubeJson = await cubeRes.json();

        const buffer = new Buffer(cubeJson);
        const cell = new Cell({
          geometry: new Geometry(buffer),
          material: new Material(),
        });

        scene.add(cell);
        scene.build();

        // 检测交互功能
        const canvas = scene.context?.canvas;
        if (canvas) {
          setInstructions('🖱️ 尝试拖拽鼠标旋转视角');
        }

        const render = () => {
          if (disposed) return;
          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        console.error('创建交互式场景失败:', e);
      }
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      mountEl.innerHTML = '';
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
          cursor: 'grab',
        }}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
        {instructions || '⏳ 初始化中...'}
      </div>
    </div>
  );
}
