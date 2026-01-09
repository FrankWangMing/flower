import React from 'react';
import Demo from './demo';

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="title">flower</div>
        <div className="subtitle">最小可运行渲染示例（Vite + React）</div>
      </header>

      <section className="card">
        <div className="cardTitle">渲染 Demo</div>
        <div className="cardDesc">
          创建 Scene → 挂载到容器 → 加载 /cube.json → requestAnimationFrame 持续渲染。
        </div>
        <Demo />
      </section>
    </div>
  );
}

