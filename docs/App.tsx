import React, { useState, useEffect } from 'react';
import MarkdownPage from './components/MarkdownPage';
import DemoList from './components/DemoList';
import DemoViewer from './components/DemoViewer';
import { DemoConfig, demos } from './config/demos';
import './styles.css';

// 定义文档路由
interface Route {
  path: string;
  title: string;
  file?: string;
}

const routes: Route[] = [
  { path: '/', file: './index.md', title: '首页' },
  { path: '/getting-started', file: './getting-started.md', title: '快速开始' },
  { path: '/api', file: './api/index.md', title: 'API' },
  { path: '/demos', title: '示例演示' },
];

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selectedDemo, setSelectedDemo] = useState<DemoConfig | null>(null);
  const currentRoute = routes.find((r) => r.path === currentPath) || routes[0];
  const isDemoPage = currentPath === '/demos';

  useEffect(() => {
    // 监听浏览器前进/后退和 hash 变化
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    const handleHashChange = () => {
      if (isDemoPage) {
        const hash = window.location.hash.slice(1);
        const demo = hash ? demos.find((d) => d.id === hash) : demos[0];
        setSelectedDemo(demo || null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isDemoPage]);

  useEffect(() => {
    // 如果是 demo 页面，从 URL hash 或默认选择第一个 demo
    if (isDemoPage) {
      const hash = window.location.hash.slice(1);
      const demo = hash ? demos.find((d) => d.id === hash) : demos[0];
      setSelectedDemo(demo || null);
      // 如果没有 hash，设置默认的 hash
      if (!hash && demos[0]) {
        window.history.replaceState({}, '', `/demos#${demos[0].id}`);
      }
    } else {
      setSelectedDemo(null);
    }
  }, [isDemoPage]);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const handleSelectDemo = (demo: DemoConfig) => {
    setSelectedDemo(demo);
    // 更新 URL hash
    window.history.pushState({}, '', `/demos#${demo.id}`);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="title">flower</div>
        <div className="subtitle">WebGL 3D 渲染引擎文档</div>
        <nav className="nav">
          {routes.map((route) => (
            <button
              key={route.path}
              className={`nav-link ${currentPath === route.path ? 'active' : ''}`}
              onClick={() => navigate(route.path)}
            >
              {route.title}
            </button>
          ))}
        </nav>
      </header>

      {isDemoPage ? (
        <div className="demo-layout">
          <aside className="demo-sidebar">
            <DemoList selectedDemoId={selectedDemo?.id || null} onSelectDemo={handleSelectDemo} />
          </aside>
          <main className="demo-main">
            <DemoViewer demo={selectedDemo} />
          </main>
        </div>
      ) : currentRoute.file ? (
        <main className="main">
          <MarkdownPage path={currentRoute.file} />
        </main>
      ) : null}
    </div>
  );
}

export default App;
