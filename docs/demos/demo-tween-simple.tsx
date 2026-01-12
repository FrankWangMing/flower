import React, { useEffect, useRef, useState } from 'react';
import { Scene } from "../../src";
import { Cell } from "../../src/model/cell";
import { Buffer, Geometry } from "../../src/model/geometry";
import { Material } from "../../src/material";
import cubeJson from '../../public/cube.json';
import { Tween, Easing } from "../../src/animation";

/**
 * 简单补间动画演示
 * 展示如何使用补间动画控制对象位置
 */
export default function DemoTweenSimple() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [easingType, setEasingType] = useState<keyof typeof Easing>('easeInOut');

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    scene.mount(containerRef.current);

    const buffer = new Buffer(cubeJson);
    const geometry = new Geometry(buffer);
    const material = new Material();
    material.materialColor.color = [0.2, 0.8, 1.0]; // 青色
    const cell = new Cell({ geometry, material });
    cell.getAnimation().setPosition([-2, 0, 0]);
    scene.add(cell);

    scene.build();

    const animationManager = scene.animationManager;

    const createAnimation = () => {
      const tween = new Tween(-2, 2, 2000, Easing[easingType]);
      tween.onUpdateCallback((value) => {
        cell.getAnimation().setPosition([value, 0, 0]);
      });
      tween.onCompleteCallback(() => {
        // 反向动画
        const reverseTween = new Tween(2, -2, 2000, Easing[easingType]);
        reverseTween.onUpdateCallback((value) => {
          cell.getAnimation().setPosition([value, 0, 0]);
        });
        reverseTween.onCompleteCallback(() => {
          createAnimation(); // 循环
        });
        animationManager.addTween(reverseTween);
      });
      return tween;
    };

    animationManager.addTween(createAnimation());

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
  }, [easingType]);

  const easingOptions: (keyof typeof Easing)[] = [
    'linear',
    'easeIn',
    'easeOut',
    'easeInOut',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'elastic',
    'bounce',
  ];

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
        }}
      >
        <h3 style={{ margin: '0 0 10px 0' }}>简单补间动画</h3>
        <div style={{ fontSize: '12px', marginBottom: '10px' }}>
          选择缓动函数：
        </div>
        <select
          value={easingType}
          onChange={(e) => setEasingType(e.target.value as keyof typeof Easing)}
          style={{
            padding: '6px',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            fontSize: '12px',
            width: '100%',
          }}
        >
          {easingOptions.map(opt => (
            <option key={opt} value={opt} style={{ background: '#333' }}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
