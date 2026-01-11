import React, { useEffect, useRef } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';

/**
 * 示例 3: 多模型场景
 *
 * 展示如何在同一个场景中添加多个 3D 对象
 * 每个对象可以有不同的位置（通过 ModelMatrix 变换）
 */
export default function DemoMultiple() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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

        // 创建多个立方体，每个位置不同
        const positions = [
          [0, 0, 0],      // 中心
          [-2, 0, 0],    // 左侧
          [2, 0, 0],     // 右侧
          [0, 2, 0],     // 上方
          [0, -2, 0],    // 下方
        ];

        positions.forEach(([x, y, z]) => {
          const buffer = new Buffer(cubeJson);
          const cell = new Cell({
            geometry: new Geometry(buffer),
            material: new Material(),
          });

          // 设置模型矩阵（位置变换）
          // 注意：当前 Material 系统还不支持自定义 ModelMatrix
          // 这里只是展示如何添加多个对象到场景
          scene.add(cell);
        });

        scene.build();

        const render = () => {
          if (disposed) return;
          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        console.error('创建多模型场景失败:', e);
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
        }}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
        📦 场景中包含 5 个立方体（当前所有对象重叠在中心，需要 ModelMatrix 支持才能看到分离效果）
      </div>
    </div>
  );
}
