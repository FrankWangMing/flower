import React, { useEffect, useRef, useState } from 'react';
import { Scene } from '../../src';
import { Cell } from '../../src/model/cell';
import { Buffer, Geometry } from '../../src/model/geometry';
import { Material } from '../../src/material';
import { ShaderSet } from '../../src/shader';
import { VertexShader, FragmentShader } from '../../src/context/FragmentShader';
import { Uniform } from '../../src/material/uniform';
import { vec3 } from 'gl-matrix-esm';

/**
 * 自定义渐变 Shader
 */
class GradientShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(
            `#version 300 es
            in vec3 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            out float vHeight;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                vHeight = worldPos.y;
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
            }
            `
        )

        this.fragmentShader = new FragmentShader(
            `#version 300 es
            precision highp float;
            in float vHeight;
            out vec4 outColor;

            uniform vec3 uColorTop;
            uniform vec3 uColorBottom;
            uniform float uMinHeight;
            uniform float uMaxHeight;

            void main() {
                float t = (vHeight - uMinHeight) / (uMaxHeight - uMinHeight);
                t = clamp(t, 0.0, 1.0);
                vec3 color = mix(uColorBottom, uColorTop, t);
                outColor = vec4(color, 1.0);
            }
            `
        )

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}

/**
 * 渐变顶部颜色 Uniform
 */
class GradientTopColor extends Uniform {
    name = "uColorTop"
    color: vec3 = vec3.fromValues(1.0, 0.0, 0.0) // 红色

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform3fv(this.location, this.color)
    }
}

/**
 * 渐变底部颜色 Uniform
 */
class GradientBottomColor extends Uniform {
    name = "uColorBottom"
    color: vec3 = vec3.fromValues(0.0, 0.0, 1.0) // 蓝色

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform3fv(this.location, this.color)
    }
}

/**
 * 最小高度 Uniform
 */
class MinHeight extends Uniform {
    name = "uMinHeight"
    value: number = -1.0

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.value)
    }
}

/**
 * 最大高度 Uniform
 */
class MaxHeight extends Uniform {
    name = "uMaxHeight"
    value: number = 1.0

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        gl.uniform1f(this.location, this.value)
    }
}

/**
 * 示例: 自定义 Shader
 *
 * 展示如何创建和使用自定义 Shader 实现渐变效果
 */
export default function DemoCustomShader() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const mountEl = containerRef.current;
    if (!mountEl) return;

    const scene = new Scene();
    scene.mount(mountEl);

    let raf = 0;
    let disposed = false;

    (async () => {
      try {
        setStatus('loading');

        // 加载立方体数据
        const cubeRes = await fetch('/cube.json');
        if (!cubeRes.ok) throw new Error('无法加载 cube.json');
        const cubeJson = await cubeRes.json();

        if (disposed) return;

        const buffer = new Buffer(cubeJson);
        const geometry = new Geometry(buffer);

        // 创建自定义 Material
        const material = new Material();

        // 使用自定义 Shader
        material.shader = new GradientShaderSet();

        // 添加自定义 Uniform
        const topColor = new GradientTopColor();
        const bottomColor = new GradientBottomColor();
        const minHeight = new MinHeight();
        const maxHeight = new MaxHeight();

        // 清空默认 uniform（但保留必要的，因为 renderList 会从 camera.defaultUniform 添加矩阵）
        // 注意：uModelMatrix, uViewMatrix, uProjectionMatrix 会从 camera.defaultUniform 自动添加
        // 我们只需要添加自定义的 uniform

        // 移除默认的材质 uniform（因为自定义 shader 不需要）
        material.uniform.clear();

        // 添加渐变相关的 uniform
        material.uniform.add(topColor);
        material.uniform.add(bottomColor);
        material.uniform.add(minHeight);
        material.uniform.add(maxHeight);

        // 注意：矩阵 uniform（uModelMatrix, uViewMatrix, uProjectionMatrix）
        // 会在 renderList.createQueue() 中从 camera.defaultUniform 自动添加

        const cell = new Cell({
          geometry: geometry,
          material: material,
        });

        scene.add(cell);
        scene.build();
        setStatus('success');

        const render = () => {
          if (disposed) return;
          scene.render();
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
      } catch (e) {
        setStatus('error');
        setError(e instanceof Error ? e.message : '未知错误');
        console.error('加载失败:', e);
      }
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      mountEl.innerHTML = '';
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: 480,
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 8,
          overflow: 'hidden',
          backgroundColor: '#1a1a1a',
        }}
      />
      <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
        {status === 'loading' && '⏳ 加载中...'}
        {status === 'success' && '✅ 自定义渐变 Shader 渲染成功（红色到蓝色渐变）'}
        {status === 'error' && `❌ 加载失败: ${error}`}
      </div>
      <div style={{ marginTop: 8, fontSize: 11, color: '#999' }}>
        这个示例展示了如何继承 ShaderSet 创建自定义 Shader，实现基于 Y 坐标的渐变效果
      </div>
    </div>
  );
}
