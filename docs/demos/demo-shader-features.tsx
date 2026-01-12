import React, { useEffect, useRef, useState } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { ExtendedMaterial } from '../../src/material';
import { vec3 } from 'gl-matrix-esm';

/**
 * 示例: Shader 功能扩展
 *
 * 展示如何使用 ExtendedMaterial 启用不同的 Shader 功能：
 * - 雾效
 * - 时间动画
 */
export default function DemoShaderFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');
  const [feature, setFeature] = useState<'fog' | 'animation' | 'both'>('fog');

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const scene = new Scene();
    scene.mount(mountEl);

    let raf = 0;
    let disposed = false;
    let startTime = Date.now();

    (async () => {
      try {
        setStatus('loading');

        // 加载立方体数据
        const cubeRes = await fetch('/cube.json');
        if (!cubeRes.ok) throw new Error('无法加载 cube.json');
        const cubeJson = await cubeRes.json();

        if (disposed) return;

        const buffer = new Buffer(cubeJson);
        const geometry = new Geometry(buffer);

        // 根据选择的特性创建材质
        const material = new ExtendedMaterial({
          useFog: feature === 'fog' || feature === 'both',
          useTimeAnimation: feature === 'animation' || feature === 'both',
        });

        // 配置雾效
        if (feature === 'fog' || feature === 'both') {
          material.fogColor!.color = vec3.fromValues(0.7, 0.8, 0.9); // 淡蓝色雾
          material.fogDensity!.density = 0.02;
          material.fogStart!.start = 0.0;
          material.fogEnd!.end = 30.0;
        }

        // 配置动画
        if (feature === 'animation' || feature === 'both') {
          material.animationSpeed!.speed = 2.0;
        }

        // 设置材质颜色
        material.materialColor.color = vec3.fromValues(0.2, 0.6, 1.0); // 蓝色

        const cell = new Cell({
          geometry: geometry,
          material: material,
        });

        scene.add(cell);
        scene.build();
        setStatus('success');

        const render = () => {
          if (disposed) return;

          // 更新时间（如果启用）
          if (feature === 'animation' || feature === 'both') {
            const time = (Date.now() - startTime) / 1000;
            material.updateTime(time);
          }

          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        setStatus('error');
        setError(e instanceof Error ? e.message : '未知错误');
        console.error('加载失败:', e);
      }
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      mountEl.innerHTML = '';
    };
  }, [feature]);

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
      <div style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 12, fontSize: 14, fontWeight: 500, color: '#333' }}>
          Shader 功能：
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => setFeature('fog')}
            style={{
              padding: '8px 16px',
              border: `2px solid ${feature === 'fog' ? '#1890ff' : '#d9d9d9'}`,
              borderRadius: 4,
              backgroundColor: feature === 'fog' ? '#e6f7ff' : '#fff',
              color: feature === 'fog' ? '#1890ff' : '#333',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            雾效
          </button>
          <button
            onClick={() => setFeature('animation')}
            style={{
              padding: '8px 16px',
              border: `2px solid ${feature === 'animation' ? '#1890ff' : '#d9d9d9'}`,
              borderRadius: 4,
              backgroundColor: feature === 'animation' ? '#e6f7ff' : '#fff',
              color: feature === 'animation' ? '#1890ff' : '#333',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            时间动画
          </button>
          <button
            onClick={() => setFeature('both')}
            style={{
              padding: '8px 16px',
              border: `2px solid ${feature === 'both' ? '#1890ff' : '#d9d9d9'}`,
              borderRadius: 4,
              backgroundColor: feature === 'both' ? '#e6f7ff' : '#fff',
              color: feature === 'both' ? '#1890ff' : '#333',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            两者
          </button>
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
          {feature === 'fog' && '✅ 雾效：根据距离混合淡蓝色雾'}
          {feature === 'animation' && '✅ 时间动画：颜色随时间变化'}
          {feature === 'both' && '✅ 雾效 + 时间动画：组合效果'}
        </div>
      </div>
      <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
        {status === 'loading' && '⏳ 加载中...'}
        {status === 'success' && '✅ Shader 功能演示'}
        {status === 'error' && `❌ 加载失败: ${error}`}
      </div>
    </div>
  );
}
