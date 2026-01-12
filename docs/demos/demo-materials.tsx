import React, { useEffect, useRef } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';

/**
 * 示例 5: 材质系统展示
 *
 * 展示如何创建和使用不同的材质
 * 注意：当前 Material 系统还不支持自定义颜色，
 * 所有对象都会显示为红色（shader 中硬编码）
 *
 * 未来可以扩展为：
 * - 支持自定义颜色
 * - 支持纹理贴图
 * - 支持光照参数（粗糙度、金属度等）
 */
export default function DemoMaterials() {
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

        // 创建多个立方体，每个使用不同的 Material 实例
        // 虽然当前所有 Material 都显示红色，但展示了如何创建多个材质
        const materials = [
          new Material(), // 材质 1
          new Material(), // 材质 2
          new Material(), // 材质 3
        ];

        materials.forEach((material, index) => {
          const buffer = new Buffer(cubeJson);
          const cell = new Cell({
            geometry: new Geometry(buffer),
            material: material,
          });

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
        console.error('创建材质示例失败:', e);
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
        🎨 场景中包含 3 个使用不同 Material 实例的立方体
        <br />
        <span style={{ color: '#999', fontSize: 11 }}>
          ⚠️ 当前限制：所有材质都显示红色（shader 硬编码），需要扩展 Material 系统支持自定义颜色
        </span>
      </div>
    </div>
  );
}
