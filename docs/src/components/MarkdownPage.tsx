import React, { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface MarkdownPageProps {
  path: string;
}

export default function MarkdownPage({ path }: MarkdownPageProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // 动态导入 Markdown 文件
    // 路径应该是相对于 docs/ 目录的，例如 './index.md'
    import(/* @vite-ignore */ path)
      .then((module) => {
        // 如果模块有 default 导出（通常是原始字符串），使用它
        if (typeof module.default === 'string') {
          setContent(module.default);
          setLoading(false);
        } else {
          // 如果 default 不是字符串，尝试从 URL 获取
          const urlPath = path.startsWith('./') ? path.slice(2) : path;
          fetch(`/${urlPath}`)
            .then((res) => {
              if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
              return res.text();
            })
            .then((text) => {
              setContent(text);
              setLoading(false);
            })
            .catch((err) => {
              setError(err.message);
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        // 如果 import 失败，尝试直接 fetch
        const urlPath = path.startsWith('./') ? path.slice(2) : path;
        fetch(`/${urlPath}`)
          .then((res) => {
            if (!res.ok) throw new Error(`Failed to load: ${res.status} ${res.statusText}`);
            return res.text();
          })
          .then((text) => {
            setContent(text);
            setLoading(false);
          })
          .catch((fetchErr) => {
            setError(`无法加载 Markdown 文件: ${path}。错误: ${fetchErr.message}`);
            setLoading(false);
          });
      });
  }, [path]);

  if (loading) {
    return (
      <div style={{ padding: '32px', textAlign: 'center', color: '#666' }}>
        加载中...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '32px', background: '#fee', border: '1px solid #fcc', borderRadius: '8px' }}>
        <h3>加载错误</h3>
        <p>{error}</p>
      </div>
    );
  }

  return <MarkdownRenderer content={content} />;
}
