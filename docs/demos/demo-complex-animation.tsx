import React, { useEffect, useRef, useState } from 'react';
import { Scene } from "../../src";
import { Cell } from "../../src/model/cell";
import { Buffer, Geometry } from "../../src/model/geometry";
import { Material } from "../../src/material";
import cubeJson from '../../public/cube.json';
import { Tween, Easing, AnimationTrack, Keyframe } from "../../src/animation";

/**
 * 复杂动画演示
 * 展示多个动画同时进行，包括位置、旋转、缩放
 */
export default function DemoComplexAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    scene.mount(containerRef.current);

    // 创建一个立方体，应用多个动画
    const buffer = new Buffer(cubeJson);
    const geometry = new Geometry(buffer);
    const material = new Material();
    material.materialColor.color = [0.8, 0.4, 0.9]; // 紫色
    const cell = new Cell({ geometry, material });
    cell.getAnimation().setPosition([0, 0, 0]);
    scene.add(cell);

    scene.build();

    const animationManager = scene.animationManager;

    // 位置动画：圆形路径
    const positionKeyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [2, 0, 0] },
      { time: 0.25, value: [0, 0, 2] },
      { time: 0.5, value: [-2, 0, 0] },
      { time: 0.75, value: [0, 0, -2] },
      { time: 1, value: [2, 0, 0] },
    ];
    const positionTrack = new AnimationTrack(positionKeyframes, 4000, (start, end, t) => [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t,
      start[2] + (end[2] - start[2]) * t,
    ]);
    positionTrack.setLoop(true);
    positionTrack.onUpdateCallback((value) => {
      const currentPos = cell.getAnimation().getPosition();
      // 保持Y轴位置，只更新X和Z
      cell.getAnimation().setPosition([value[0], currentPos[1], value[2]]);
    });
    positionTrack.start();
    animationManager.addTrack(positionTrack);

    // Y轴上下浮动
    const floatTween = new Tween(-0.5, 0.5, 2000, Easing.easeInOut);
    floatTween.onUpdateCallback((value) => {
      const currentPos = cell.getAnimation().getPosition();
      cell.getAnimation().setPosition([currentPos[0], value, currentPos[2]]);
    });
    floatTween.onCompleteCallback(() => {
      const reverseTween = new Tween(0.5, -0.5, 2000, Easing.easeInOut);
      reverseTween.onUpdateCallback((value) => {
        const currentPos = cell.getAnimation().getPosition();
        cell.getAnimation().setPosition([currentPos[0], value, currentPos[2]]);
      });
      reverseTween.onCompleteCallback(() => {
        floatTween.reset().start();
      });
      animationManager.addTween(reverseTween);
    });
    animationManager.addTween(floatTween);

    // 旋转动画
    const rotationKeyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [0, 0, 0] },
      { time: 0.5, value: [0, Math.PI, 0] },
      { time: 1, value: [0, Math.PI * 2, 0] },
    ];
    cell.getAnimation().setRotationTrackLoop(rotationKeyframes, 3000, true);
    if (cell.getAnimation().rotationTrack) {
      animationManager.addTrack(cell.getAnimation().rotationTrack);
    }

    // 缩放动画：呼吸效果
    const scaleKeyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [1, 1, 1] },
      { time: 0.5, value: [1.3, 1.3, 1.3] },
      { time: 1, value: [1, 1, 1] },
    ];
    cell.getAnimation().setScaleTrackLoop(scaleKeyframes, 1500, true);
    if (cell.getAnimation().scaleTrack) {
      animationManager.addTrack(cell.getAnimation().scaleTrack);
    }

    // 渲染循环
    let raf: number;
    const render = () => {
      scene.render();
      raf = requestAnimationFrame(render);
    };
    render();

    // 保存引用以便控制
    const refs = {
      animationManager,
      cell,
    };
    (window as any).__animationRefs = refs;

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scene.destroy();
      delete (window as any).__animationRefs;
    };
  }, []);

  const handlePause = () => {
    const refs = (window as any).__animationRefs;
    if (refs) {
      if (isPaused) {
        refs.animationManager.resumeAll();
        if (refs.cell.getAnimation().rotationTrack) {
          refs.cell.getAnimation().rotationTrack.start();
        }
        if (refs.cell.getAnimation().scaleTrack) {
          refs.cell.getAnimation().scaleTrack.start();
        }
        setIsPaused(false);
      } else {
        refs.animationManager.pauseAll();
        if (refs.cell.getAnimation().rotationTrack) {
          refs.cell.getAnimation().rotationTrack.pause();
        }
        if (refs.cell.getAnimation().scaleTrack) {
          refs.cell.getAnimation().scaleTrack.pause();
        }
        setIsPaused(true);
      }
    }
  };

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
        <h3 style={{ margin: '0 0 10px 0' }}>复杂动画演示</h3>
        <div style={{ fontSize: '12px', lineHeight: '1.6', marginBottom: '10px' }}>
          <div>🟣 同时进行多个动画：</div>
          <div>• 圆形路径移动</div>
          <div>• Y轴上下浮动</div>
          <div>• 持续旋转</div>
          <div>• 呼吸式缩放</div>
        </div>
        <button
          onClick={handlePause}
          style={{
            padding: '8px 16px',
            background: isPaused ? '#52c41a' : '#ff4d4f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          {isPaused ? '▶ 继续' : '⏸ 暂停'}
        </button>
      </div>
    </div>
  );
}
