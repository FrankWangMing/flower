import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { getDemoComponent } from './demoComponents';
// highlight.js 样式会在运行时动态加载，避免 SSR 问题
// import 'highlight.js/styles/github-dark.css';

// 组件缓存
const componentCache = new Map<string, React.ComponentType>();

async function loadComponent(src: string): Promise<React.ComponentType> {
  if (componentCache.has(src)) {
    return componentCache.get(src)!;
  }

  // 首先尝试从静态映射中获取（生产环境安全）
  const staticComp = getDemoComponent(src);
  if (staticComp) {
    componentCache.set(src, staticComp);
    return staticComp;
  }

  // Fallback: 动态导入（开发环境）
  let normalizedSrc = src;
  if (normalizedSrc.startsWith('./')) {
    normalizedSrc = normalizedSrc.replace('./', '../');
  } else if (!normalizedSrc.startsWith('./') && !normalizedSrc.startsWith('../')) {
    normalizedSrc = `../${normalizedSrc}`;
  }

  try {
    const module = await import(/* @vite-ignore */ normalizedSrc);
    const Component = module.default || module;
    componentCache.set(src, Component);
    return Component;
  } catch (error) {
    console.error(`Failed to load component from ${src} (normalized: ${normalizedSrc}):`, error);
    return () => (
      <div style={{ padding: '16px', background: '#fee', border: '1px solid #fcc', borderRadius: '4px' }}>
        无法加载组件: {src}
        <br />
        <small>{String(error)}</small>
      </div>
    );
  }
}

// Demo 组件占位符（在 Markdown 中会被替换）
function DemoPlaceholder({ src, title, description }: { src: string; title?: string; description?: string }) {
  const [Component, setComponent] = React.useState<React.ComponentType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadComponent(src).then((Comp) => {
      setComponent(() => Comp);
      setLoading(false);
    });
  }, [src]);

  if (loading) {
    return (
      <div style={{ padding: '16px', textAlign: 'center', color: '#666' }}>
        加载组件中...
      </div>
    );
  }

  if (!Component) {
    return null;
  }

  return (
    <div style={{ margin: '24px 0' }}>
      {title && <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>{title}</h3>}
      {description && (
        <p style={{ marginBottom: '12px', color: 'rgba(0,0,0,0.56)', fontSize: '13px' }}>{description}</p>
      )}
      <div
        style={{
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <Component />
      </div>
    </div>
  );
}

interface MarkdownRendererProps {
  content: string;
  basePath?: string;
}

export default function MarkdownRenderer({ content, basePath = '' }: MarkdownRendererProps) {
  // 处理自定义的 <Demo> 标签
  const processedContent = useMemo(() => {
    // 匹配 <Demo src="..." title="..." description="..." /> 或 <Demo src="...">...</Demo>
    const demoPattern = /<Demo\s+src=["']([^"']+)["'](?:\s+title=["']([^"']*)["'])?(?:\s+description=["']([^"']*)["'])?\s*\/?>/g;

    let processed = content;
    const demos: Array<{ id: string; src: string; title?: string; description?: string }> = [];
    let demoIndex = 0;

    processed = processed.replace(demoPattern, (match, src, title, description) => {
      const id = `demo-${demoIndex++}`;
      demos.push({ id, src, title, description });
      // 替换为占位符，稍后在渲染时处理
      return `<div data-demo-id="${id}" data-demo-src="${src}" data-demo-title="${title || ''}" data-demo-description="${description || ''}"></div>`;
    });

    return { processed, demos };
  }, [content]);

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          // 处理自定义的 demo 占位符
          div: ({ node, ...props }) => {
            const demoId = props['data-demo-id'];
            if (demoId) {
              const demo = processedContent.demos.find((d) => d.id === demoId);
              if (demo) {
                // 确保路径正确：如果已经是相对路径就保持，否则添加 ./
                // 路径应该是相对于 docs/ 目录的
                let normalizedSrc = demo.src;
                if (!normalizedSrc.startsWith('./') && !normalizedSrc.startsWith('../')) {
                  normalizedSrc = `./${normalizedSrc}`;
                }
                return (
                  <DemoPlaceholder
                    src={normalizedSrc}
                    title={demo.title}
                    description={demo.description}
                  />
                );
              }
            }
            return <div {...props} />;
          },
          // 自定义代码块样式
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <pre className={className} style={{ background: '#f6f8fa', padding: '16px', borderRadius: '6px', overflow: 'auto' }}>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className={className} style={{ background: '#f6f8fa', padding: '2px 6px', borderRadius: '3px', fontSize: '0.9em' }} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {processedContent.processed}
      </ReactMarkdown>
    </div>
  );
}
