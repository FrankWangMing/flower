import React, { useEffect, useRef, useState } from 'react';
import { Scene } from "../../src";
import { Cell } from "../../src/model/cell";
import { Buffer, Geometry } from "../../src/model/geometry";
import { Material } from "../../src/material";
import cubeJson from '../../public/cube.json';
import { Tween, Easing, AnimationTrack, Keyframe } from "../../src/animation";
import { vec3 } from "gl-matrix-esm";

export default function DemoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const [animationType, setAnimationType] = useState<'tween' | 'keyframe' | 'transform'>('tween');

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    scene.mount(containerRef.current);

    // 创建多个立方体用于演示不同的动画
    const cells: Cell[] = [];

    // 立方体1：补间动画（位置）
    const buffer1 = new Buffer(cubeJson);
    const geometry1 = new Geometry(buffer1);
    const material1 = new Material();
    material1.materialColor.color = [1.0, 0.2, 0.2]; // 红色
    const cell1 = new Cell({ geometry: geometry1, material: material1 });
    cell1.getAnimation().setPosition([-2, 0, 0]);
    scene.add(cell1);
    cells.push(cell1);

    // 立方体2：关键帧动画（位置）
    const buffer2 = new Buffer(cubeJson);
    const geometry2 = new Geometry(buffer2);
    const material2 = new Material();
    material2.materialColor.color = [0.2, 1.0, 0.2]; // 绿色
    const cell2 = new Cell({ geometry: geometry2, material: material2 });
    cell2.getAnimation().setPosition([0, 0, 0]);
    scene.add(cell2);
    cells.push(cell2);

    // 立方体3：变换动画（旋转+缩放）
    const buffer3 = new Buffer(cubeJson);
    const geometry3 = new Geometry(buffer3);
    const material3 = new Material();
    material3.materialColor.color = [0.2, 0.2, 1.0]; // 蓝色
    const cell3 = new Cell({ geometry: geometry3, material: material3 });
    cell3.getAnimation().setPosition([2, 0, 0]);
    scene.add(cell3);
    cells.push(cell3);

    scene.build();

    // 设置动画
    setupAnimations(scene, cells);

    // 渲染循环
    let raf: number;
    const render = () => {
      scene.render();
      raf = requestAnimationFrame(render);
    };
    render();

    sceneRef.current = scene;

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scene.destroy();
    };
  }, [animationType]);

  const setupAnimations = (scene: Scene, cells: Cell[]) => {
    const animationManager = scene.animationManager;

    // 立方体1：补间动画 - 上下移动
    const cell1 = cells[0];
    const tween1 = new Tween(-1, 1, 2000, Easing.easeInOut);
    tween1.onUpdateCallback((value) => {
      cell1.getAnimation().setPosition([-2, value, 0]);
    });
    tween1.onCompleteCallback(() => {
      // 反向动画
      const reverseTween = new Tween(1, -1, 2000, Easing.easeInOut);
      reverseTween.onUpdateCallback((value) => {
        cell1.getAnimation().setPosition([-2, value, 0]);
      });
      reverseTween.onCompleteCallback(() => {
        tween1.reset().start();
      });
      animationManager.addTween(reverseTween);
    });
    animationManager.addTween(tween1);

    // 立方体2：关键帧动画 - 圆形路径
    const cell2 = cells[1];
    const keyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [0, 0, 0] },
      { time: 0.25, value: [1, 0, 0] },
      { time: 0.5, value: [0, 0, 1] },
      { time: 0.75, value: [-1, 0, 0] },
      { time: 1, value: [0, 0, 0] },
    ];
    const track = new AnimationTrack(keyframes, 3000, (start, end, t) => [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t,
      start[2] + (end[2] - start[2]) * t,
    ]);
    track.setLoop(true);
    track.onUpdateCallback((value) => {
      cell2.getAnimation().setPosition(value);
    });
    track.start();
    animationManager.addTrack(track);

    // 立方体3：变换动画 - 旋转和缩放
    const cell3 = cells[2];
    const rotationKeyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [0, 0, 0] },
      { time: 0.5, value: [0, Math.PI, 0] },
      { time: 1, value: [0, Math.PI * 2, 0] },
    ];
    const scaleKeyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [1, 1, 1] },
      { time: 0.5, value: [1.5, 1.5, 1.5] },
      { time: 1, value: [1, 1, 1] },
    ];
    
    cell3.getAnimation().setRotationTrackLoop(rotationKeyframes, 2000, true);
    cell3.getAnimation().setScaleTrackLoop(scaleKeyframes, 2000, true);
    
    // 将轨道添加到动画管理器
    if (cell3.getAnimation().positionTrack) {
      animationManager.addTrack(cell3.getAnimation().positionTrack);
    }
    if (cell3.getAnimation().rotationTrack) {
      animationManager.addTrack(cell3.getAnimation().rotationTrack);
    }
    if (cell3.getAnimation().scaleTrack) {
      animationManager.addTrack(cell3.getAnimation().scaleTrack);
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
        <h3 style={{ margin: '0 0 10px 0' }}>动画系统演示</h3>
        <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
          <div>🔴 红色立方体：补间动画（上下移动）</div>
          <div>🟢 绿色立方体：关键帧动画（圆形路径）</div>
          <div>🔵 蓝色立方体：变换动画（旋转+缩放）</div>
        </div>
      </div>
    </div>
  );
}
