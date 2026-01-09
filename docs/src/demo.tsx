import React, { useEffect, useRef } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';

type CubeJson = {
  vertices: number[];
  indices: number[];
};

async function loadCubeJson(): Promise<CubeJson> {
  // `cube.json` 在项目根目录的 `public/` 下，dumi/umi 会以站点根路径提供静态资源
  const res = await fetch('/cube.json');
  if (!res.ok) throw new Error(`加载 cube.json 失败: ${res.status} ${res.statusText}`);
  return (await res.json()) as CubeJson;
}

export default function Demo() {
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
        const cubeJson = await loadCubeJson();
        if (disposed) return;

        const buffer = new Buffer(cubeJson);
        const cell = new Cell({
          geometry: new Geometry(buffer),
          material: new Material(),
        });

        scene.add(cell);
        scene.build();

        const render = () => {
          if (disposed) return;
          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      // 简单清理：移除创建的 canvas，避免热更新/切页叠加多个 canvas
      mountEl.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: 480,
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 8,
        overflow: 'hidden',
      }}
    />
  );
}
