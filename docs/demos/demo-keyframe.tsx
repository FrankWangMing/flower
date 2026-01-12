import React, { useEffect, useRef } from 'react';
import { Scene } from "../../src";
import { Cell } from "../../src/model/cell";
import { Buffer, Geometry } from "../../src/model/geometry";
import { Material } from "../../src/material";
import cubeJson from '../../public/cube.json';
import { AnimationTrack, Keyframe, Easing } from "../../src/animation";

/**
 * 关键帧动画演示
 * 展示复杂的关键帧动画路径
 */
export default function DemoKeyframe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    scene.mount(containerRef.current);

    // 创建多个立方体，展示不同的关键帧路径
    const cells: Cell[] = [];

    // 立方体1：8字形路径
    const buffer1 = new Buffer(cubeJson);
    const geometry1 = new Geometry(buffer1);
    const material1 = new Material();
    material1.materialColor.color = [1.0, 0.2, 0.2]; // 红色
    const cell1 = new Cell({ geometry: geometry1, material: material1 });
    scene.add(cell1);
    cells.push(cell1);

    // 立方体2：波浪路径
    const buffer2 = new Buffer(cubeJson);
    const geometry2 = new Geometry(buffer2);
    const material2 = new Material();
    material2.materialColor.color = [0.2, 1.0, 0.2]; // 绿色
    const cell2 = new Cell({ geometry: geometry2, material: material2 });
    scene.add(cell2);
    cells.push(cell2);

    // 立方体3：螺旋路径
    const buffer3 = new Buffer(cubeJson);
    const geometry3 = new Geometry(buffer3);
    const material3 = new Material();
    material3.materialColor.color = [0.2, 0.2, 1.0]; // 蓝色
    const cell3 = new Cell({ geometry: geometry3, material: material3 });
    scene.add(cell3);
    cells.push(cell3);

    scene.build();

    const animationManager = scene.animationManager;

    // 立方体1：8字形路径
    const figure8Keyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [0, 0, 0], easing: Easing.easeInOut },
      { time: 0.25, value: [1, 1, 0], easing: Easing.easeInOut },
      { time: 0.5, value: [0, 0, 0], easing: Easing.easeInOut },
      { time: 0.75, value: [-1, 1, 0], easing: Easing.easeInOut },
      { time: 1, value: [0, 0, 0], easing: Easing.easeInOut },
    ];
    const track1 = new AnimationTrack(figure8Keyframes, 4000, (start, end, t) => [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t,
      start[2] + (end[2] - start[2]) * t,
    ]);
    track1.setLoop(true);
    track1.onUpdateCallback((value) => {
      cell1.getAnimation().setPosition(value);
    });
    track1.start();
    animationManager.addTrack(track1);

    // 立方体2：波浪路径
    const waveKeyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [-2, 0, 0] },
      { time: 0.25, value: [-1, 1, 0] },
      { time: 0.5, value: [0, 0, 0] },
      { time: 0.75, value: [1, 1, 0] },
      { time: 1, value: [2, 0, 0] },
    ];
    const track2 = new AnimationTrack(waveKeyframes, 3000, (start, end, t) => [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t,
      start[2] + (end[2] - start[2]) * t,
    ]);
    track2.setLoop(true);
    track2.onUpdateCallback((value) => {
      cell2.getAnimation().setPosition(value);
    });
    track2.start();
    animationManager.addTrack(track2);

    // 立方体3：螺旋路径（3D）
    const spiralKeyframes: Keyframe<[number, number, number]>[] = [
      { time: 0, value: [0, 0, 0] },
      { time: 0.25, value: [1, 0.5, 0] },
      { time: 0.5, value: [0, 1, 1] },
      { time: 0.75, value: [-1, 0.5, 0] },
      { time: 1, value: [0, 0, 0] },
    ];
    const track3 = new AnimationTrack(spiralKeyframes, 5000, (start, end, t) => [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t,
      start[2] + (end[2] - start[2]) * t,
    ]);
    track3.setLoop(true);
    track3.onUpdateCallback((value) => {
      cell3.getAnimation().setPosition(value);
    });
    track3.start();
    animationManager.addTrack(track3);

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
        }}
      >
        <h3 style={{ margin: '0 0 10px 0' }}>关键帧动画演示</h3>
        <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
          <div>🔴 红色：8字形路径</div>
          <div>🟢 绿色：波浪路径</div>
          <div>🔵 蓝色：3D螺旋路径</div>
        </div>
      </div>
    </div>
  );
}
