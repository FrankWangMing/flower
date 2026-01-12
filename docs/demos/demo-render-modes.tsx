import React, { useEffect, useRef, useState } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material, RenderMode } from '../../src/material';
import { Loader } from '../../src/loader';

/**
 * 示例: 渲染模式切换
 *
 * 展示不同的渲染模式：
 * - SOLID: 实体填充模式
 * - WIREFRAME: 线框模式
 * - POINTS: 点云模式
 * - LINES: 线条模式
 */
export default function DemoRenderModes() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');
  const [renderMode, setRenderMode] = useState<RenderMode>(RenderMode.SOLID);
  const [material, setMaterial] = useState<Material | null>(null);

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const scene = new Scene();
    scene.mount(mountEl);

    let raf = 0;
    let disposed = false;
    let cell: Cell | null = null;

    (async () => {
      try {
        setStatus('loading');

        // 尝试加载 GLB 模型（如果存在）
        try {
          const result = await Loader.GLBLoader('../models/AnisotropyBarnLamp.glb');

          if (disposed) return;

          const buffer = new Buffer({
            vertices: result.vertices,
            indices: result.indices,
          });

          const geometry = new Geometry(buffer);
          const mat = new Material({
            mode: renderMode,
            lineWidth: 1.0,
            pointSize: 5.0,
          });

          setMaterial(mat);

          cell = new Cell({
            geometry: geometry,
            material: mat,
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
          const geometry = new Geometry(buffer);
          const mat = new Material({
            mode: renderMode,
            lineWidth: 1.0,
            pointSize: 5.0,
          });

          setMaterial(mat);

          cell = new Cell({
            geometry: geometry,
            material: mat,
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

  // 当渲染模式改变时，更新材质
  useEffect(() => {
    if (material) {
      material.setRenderMode({
        mode: renderMode,
        lineWidth: renderMode === RenderMode.WIREFRAME || renderMode === RenderMode.LINES ? 1.0 : undefined,
        pointSize: renderMode === RenderMode.POINTS ? 5.0 : undefined,
      });
    }
  }, [renderMode, material]);

  const renderModeOptions = [
    { value: RenderMode.SOLID, label: '实体 (SOLID)', description: '填充模式，显示完整表面' },
    { value: RenderMode.WIREFRAME, label: '线框 (WIREFRAME)', description: '只显示模型的边' },
    { value: RenderMode.POINTS, label: '点云 (POINTS)', description: '只显示顶点' },
    { value: RenderMode.LINES, label: '线条 (LINES)', description: '使用线条绘制' },
  ];

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
          渲染模式：
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {renderModeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setRenderMode(option.value)}
              style={{
                padding: '8px 16px',
                border: `2px solid ${renderMode === option.value ? '#1890ff' : '#d9d9d9'}`,
                borderRadius: 4,
                backgroundColor: renderMode === option.value ? '#e6f7ff' : '#fff',
                color: renderMode === option.value ? '#1890ff' : '#333',
                cursor: 'pointer',
                fontSize: 13,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (renderMode !== option.value) {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }
              }}
              onMouseLeave={(e) => {
                if (renderMode !== option.value) {
                  e.currentTarget.style.backgroundColor = '#fff';
                }
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
          {renderModeOptions.find((opt) => opt.value === renderMode)?.description}
        </div>
      </div>
      <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
        {status === 'loading' && '⏳ 加载中...'}
        {status === 'success' && '✅ 模型加载成功'}
        {status === 'error' && `❌ 加载失败: ${error}`}
      </div>
    </div>
  );
}
