import React from 'react';
import { DemoConfig, demosByCategory } from '../config/demos';

interface DemoListProps {
  selectedDemoId: string | null;
  onSelectDemo: (demo: DemoConfig) => void;
}

export default function DemoList({ selectedDemoId, onSelectDemo }: DemoListProps) {
  return (
    <div className="demo-list">
      <div className="demo-list-header">
        <h2>示例列表</h2>
        <p className="demo-list-subtitle">选择下方示例查看效果</p>
      </div>
      <div className="demo-list-content">
        {Object.entries(demosByCategory).map(([category, demos]) => (
          <div key={category} className="demo-category">
            <h3 className="demo-category-title">{category}</h3>
            <div className="demo-items">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  className={`demo-item ${selectedDemoId === demo.id ? 'active' : ''}`}
                  onClick={() => onSelectDemo(demo)}
                >
                  <div className="demo-item-title">{demo.title}</div>
                  {demo.description && (
                    <div className="demo-item-description">{demo.description}</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
