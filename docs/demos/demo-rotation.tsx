import { useEffect, useRef } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';
import { mat4 } from 'gl-matrix-esm';

/**
 * 示例 6: 动画旋转
 *
 * 展示如何实现简单的动画效果
 * 通过每帧更新 ModelMatrix 实现旋转动画
 */
export default function DemoRotation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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

        const render = () => {
          if (disposed) return;

          // 计算旋转角度（基于时间）
          const elapsed = (Date.now() - startTime) / 1000; // 转换为秒
          const rotationSpeed = 0.5; // 旋转速度（弧度/秒）
          const angle = elapsed * rotationSpeed;

          // 更新 ModelMatrix 实现旋转
          // 注意：当前需要访问 camera.defaultUniform.modelMatrix
          if (scene.camera?.defaultUniform?.modelMatrix) {
            const modelMatrix = mat4.create();
            mat4.rotateY(modelMatrix, modelMatrix, angle);
            scene.camera.defaultUniform.modelMatrix.updateMatrix(modelMatrix);
          }

          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        console.error('创建旋转动画失败:', e);
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
        🔄 立方体正在绕 Y 轴旋转（如果 ModelMatrix 更新正常工作）
      </div>
    </div>
  );
}
