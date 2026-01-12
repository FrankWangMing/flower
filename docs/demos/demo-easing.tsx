import React, { useEffect, useRef } from 'react';
import { Scene } from "../../src";
import { Cell } from "../../src/model/cell";
import { Buffer, Geometry } from "../../src/model/geometry";
import { Material } from "../../src/material";
import cubeJson from '../../public/cube.json';
import { Tween, Easing } from "../../src/animation";

/**
 * 缓动函数演示
 * 展示不同的缓动函数效果
 */
export default function DemoEasing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    scene.mount(containerRef.current);

    const easingTypes = [
      { name: 'Linear', easing: Easing.linear, color: [1.0, 0.2, 0.2] },
      { name: 'EaseIn', easing: Easing.easeIn, color: [0.2, 1.0, 0.2] },
      { name: 'EaseOut', easing: Easing.easeOut, color: [0.2, 0.2, 1.0] },
      { name: 'EaseInOut', easing: Easing.easeInOut, color: [1.0, 1.0, 0.2] },
      { name: 'EaseInCubic', easing: Easing.easeInCubic, color: [1.0, 0.2, 1.0] },
      { name: 'EaseOutCubic', easing: Easing.easeOutCubic, color: [0.2, 1.0, 1.0] },
      { name: 'Elastic', easing: Easing.elastic, color: [1.0, 0.5, 0.2] },
      { name: 'Bounce', easing: Easing.bounce, color: [0.5, 0.2, 1.0] },
    ];

    const cells: Cell[] = [];
    const spacing = 2.5;
    const startX = -(easingTypes.length - 1) * spacing / 2;

    // 创建多个立方体，每个使用不同的缓动函数
    easingTypes.forEach((type, index) => {
      const buffer = new Buffer(cubeJson);
      const geometry = new Geometry(buffer);
      const material = new Material();
      material.materialColor.color = type.color as [number, number, number];
      
      const cell = new Cell({ geometry, material });
      const x = startX + index * spacing;
      cell.getAnimation().setPosition([x, 0, 0]);
      scene.add(cell);
      cells.push(cell);
    });

    scene.build();

    // 为每个立方体设置动画
    const animationManager = scene.animationManager;
    
    cells.forEach((cell, index) => {
      const easingType = easingTypes[index];
      
      const createAnimation = () => {
        const tween = new Tween(-1.5, 1.5, 2000, easingType.easing);
        tween.onUpdateCallback((value) => {
          const x = startX + index * spacing;
          cell.getAnimation().setPosition([x, value, 0]);
        });
        tween.onCompleteCallback(() => {
          // 反向动画
          const reverseTween = new Tween(1.5, -1.5, 2000, easingType.easing);
          reverseTween.onUpdateCallback((value) => {
            const x = startX + index * spacing;
            cell.getAnimation().setPosition([x, value, 0]);
          });
          reverseTween.onCompleteCallback(() => {
            createAnimation(); // 循环
          });
          animationManager.addTween(reverseTween);
        });
        return tween;
      };

      // 延迟启动，形成波浪效果
      setTimeout(() => {
        animationManager.addTween(createAnimation());
      }, index * 100);
    });

    // 渲染循环
    let raf: number;
    const render = () => {
      scene.render();
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scene.destroy();
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%' }}
      />
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          maxWidth: '300px',
        }}
      >
        <h3 style={{ margin: '0 0 10px 0' }}>缓动函数演示</h3>
        <div style={{ fontSize: '12px', lineHeight: '1.8' }}>
          <div>🔴 Linear - 线性</div>
          <div>🟢 EaseIn - 缓入</div>
          <div>🔵 EaseOut - 缓出</div>
          <div>🟡 EaseInOut - 缓入缓出</div>
          <div>🟣 EaseInCubic - 三次缓入</div>
          <div>🔷 EaseOutCubic - 三次缓出</div>
          <div>🟠 Elastic - 弹性</div>
          <div>🟪 Bounce - 弹跳</div>
        </div>
      </div>
    </div>
  );
}
