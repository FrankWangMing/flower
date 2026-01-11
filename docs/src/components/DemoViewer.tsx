import React, { useState, useEffect } from 'react';
import { DemoConfig } from '../config/demos';

interface DemoViewerProps {
  demo: DemoConfig | null;
}

export default function DemoViewer({ demo }: DemoViewerProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!demo) {
      setComponent(null);
      return;
    }

    setLoading(true);
    setError(null);
    setComponent(null);

    // 处理路径：如果路径是 ./src/xxx，需要转换为相对于 components 目录的路径
    let normalizedSrc = demo.src;
    if (normalizedSrc.startsWith('./src/')) {
      normalizedSrc = normalizedSrc.replace('./src/', '../');
    } else if (normalizedSrc.startsWith('./') && !normalizedSrc.startsWith('./src/')) {
      normalizedSrc = normalizedSrc.replace('./', '../');
    } else if (!normalizedSrc.startsWith('./') && !normalizedSrc.startsWith('../')) {
      normalizedSrc = `../${normalizedSrc}`;
    }

    // 动态导入组件
    import(/* @vite-ignore */ normalizedSrc)
      .then((module) => {
        const Comp = module.default || module;
        setComponent(() => Comp);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Failed to load demo: ${demo.src}`, err);
        setError(`无法加载组件: ${demo.title}`);
        setLoading(false);
      });
  }, [demo]);

  if (!demo) {
    return (
      <div className="demo-viewer-empty">
        <div className="demo-viewer-empty-content">
          <h3>选择一个 Demo</h3>
          <p>从左侧列表中选择一个示例来查看</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="demo-viewer-loading">
        <div className="demo-viewer-loading-content">
          <div className="spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="demo-viewer-error">
        <div className="demo-viewer-error-content">
          <h3>加载失败</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-viewer">
      <div className="demo-viewer-header">
        <h2 className="demo-viewer-title">{demo.title}</h2>
        {demo.description && (
          <p className="demo-viewer-description">{demo.description}</p>
        )}
      </div>
      <div className="demo-viewer-content">
        {Component && <Component />}
      </div>
    </div>
  );
}
