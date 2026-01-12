import React, { useEffect, useRef, useState } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';
import { Loader } from '../../src/loader';

/**
 * 示例 2: GLB 模型加载器
 *
 * 展示如何使用 Loader.GLBLoader() 加载 GLB 格式的 3D 模型
 * 如果 GLB 文件不存在，会回退到显示立方体
 */
export default function DemoGLB() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const scene = new Scene();
    scene.mount(mountEl);

    let raf = 0;
    let disposed = false;

    (async () => {
      try {
        setStatus('loading');

        // 尝试加载 GLB 模型（如果存在）
        // 注意：需要确保 /chair.glb 文件存在，或者使用其他 GLB 文件路径
        try {
          const result = await Loader.GLBLoader('../models/AnisotropyBarnLamp.glb');

          if (disposed) return;

          const buffer = new Buffer({
            vertices: result.vertices,
            indices: result.indices,
          });

          const cell = new Cell({
            geometry: new Geometry(buffer),
            material: new Material(),
          });

          scene.add(cell);
          scene.build();
          setStatus('success');
        } catch (glbError) {
          // GLB 加载失败，回退到立方体
          console.warn('GLB 加载失败，使用立方体作为示例:', glbError);

          // 加载立方体作为 fallback
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
          setStatus('success');
        }

        const render = () => {
          if (disposed) return;
          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        setStatus('error');
        setError(e instanceof Error ? e.message : '未知错误');
        console.error('加载模型失败:', e);
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
        {status === 'loading' && '⏳ 加载中...'}
        {status === 'success' && '✅ 模型加载成功（如果 GLB 不存在，显示立方体）'}
        {status === 'error' && `❌ 加载失败: ${error}`}
      </div>
    </div>
  );
}
