import React, { useState, useEffect } from 'react';
import { DemoConfig } from '../config/demos';
import { getDemoComponent } from './demoComponents';

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

    // 从静态映射中获取组件（生产环境安全）
    const Comp = getDemoComponent(demo.src);

    if (Comp) {
      setComponent(() => Comp);
      setLoading(false);
    } else {
      // Fallback: 尝试动态导入（开发环境）
      let normalizedSrc = demo.src;
      if (normalizedSrc.startsWith('./src/')) {
        normalizedSrc = normalizedSrc.replace('./src/', '../');
      } else if (normalizedSrc.startsWith('./') && !normalizedSrc.startsWith('./src/')) {
        normalizedSrc = normalizedSrc.replace('./', '../');
      } else if (!normalizedSrc.startsWith('./') && !normalizedSrc.startsWith('../')) {
        normalizedSrc = `../${normalizedSrc}`;
      }

      import(/* @vite-ignore */ normalizedSrc)
        .then((module) => {
          const DynamicComp = module.default || module;
          setComponent(() => DynamicComp);
          setLoading(false);
        })
        .catch((err) => {
          console.error(`Failed to load demo: ${demo.src}`, err);
          setError(`无法加载组件: ${demo.title}`);
          setLoading(false);
        });
    }
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
