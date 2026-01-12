# 自定义 Shader 指南

## 概述

Flower 支持通过继承 `ShaderSet` 类来创建自定义 Shader，实现特殊的渲染效果。

## 基础结构

### ShaderSet 类结构

```typescript
export class ShaderSet extends Set<BasicShader> {
    vertexShader: VertexShader
    fragmentShader: FragmentShader

    constructor() {
        super()
        // 初始化 vertexShader 和 fragmentShader
        this.vertexShader = new VertexShader(vertexSource)
        this.fragmentShader = new FragmentShader(fragmentSource)
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
```

---

## 创建自定义 Shader

### 方法 1: 继承 ShaderSet

```typescript
import { ShaderSet } from 'flower';
import { VertexShader, FragmentShader } from 'flower';

export class CustomShaderSet extends ShaderSet {
    constructor() {
        super() // 调用父类构造函数（可选，如果需要默认行为）

        // 覆盖默认 Shader
        this.vertexShader = new VertexShader(`
            #version 300 es
            in vec3 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
            }
        `);

        this.fragmentShader = new FragmentShader(`
            #version 300 es
            precision highp float;
            out vec4 outColor;

            uniform vec3 uCustomColor;

            void main() {
                outColor = vec4(uCustomColor, 1.0);
            }
        `);

        // 更新 Set
        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
```

### 方法 2: 完全自定义（不继承）

```typescript
import { ShaderSet } from 'flower';
import { VertexShader, FragmentShader } from 'flower';

export class MyCustomShader extends ShaderSet {
    constructor() {
        // 不调用 super()，完全自定义
        super() // 仍然需要调用以初始化 Set

        this.vertexShader = new VertexShader(this.getVertexSource())
        this.fragmentShader = new FragmentShader(this.getFragmentSource())

        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }

    private getVertexSource(): string {
        return `#version 300 es
            // 自定义顶点着色器代码
        `;
    }

    private getFragmentSource(): string {
        return `#version 300 es
            // 自定义片元着色器代码
        `;
    }
}
```

---

## 实际示例

### 示例 1: 简单颜色 Shader

```typescript
import { ShaderSet } from '../../src/shader';
import { VertexShader, FragmentShader } from '../../src/context/FragmentShader';

/**
 * 简单的单色 Shader
 * 只显示单一颜色，不计算光照
 */
export class SolidColorShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(`
            #version 300 es
            in vec3 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
            }
        `);

        this.fragmentShader = new FragmentShader(`
            #version 300 es
            precision highp float;
            out vec4 outColor;

            uniform vec3 uColor;

            void main() {
                outColor = vec4(uColor, 1.0);
            }
        `);

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
```

**使用方式**:
```typescript
import { Material } from 'flower';
import { SolidColorShaderSet } from './SolidColorShaderSet';

const material = new Material();
material.shader = new SolidColorShaderSet();

// 需要创建对应的 Uniform
// material.uniform.add(new ColorUniform())
```

---

### 示例 2: 渐变 Shader

```typescript
import { ShaderSet } from '../../src/shader';
import { VertexShader, FragmentShader } from '../../src/context/FragmentShader';

/**
 * 基于 Y 坐标的渐变 Shader
 */
export class GradientShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(`
            #version 300 es
            in vec3 aVertexPosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            out float vHeight;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                vHeight = worldPos.y; // 传递 Y 坐标
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
            }
        `);

        this.fragmentShader = new FragmentShader(`
            #version 300 es
            precision highp float;
            in float vHeight;
            out vec4 outColor;

            uniform vec3 uColorTop;
            uniform vec3 uColorBottom;
            uniform float uMinHeight;
            uniform float uMaxHeight;

            void main() {
                // 归一化高度到 0-1
                float t = (vHeight - uMinHeight) / (uMaxHeight - uMinHeight);
                t = clamp(t, 0.0, 1.0);

                // 混合颜色
                vec3 color = mix(uColorBottom, uColorTop, t);
                outColor = vec4(color, 1.0);
            }
        `);

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
```

---

### 示例 3: 纹理 Shader

```typescript
import { ShaderSet } from '../../src/shader';
import { VertexShader, FragmentShader } from '../../src/context/FragmentShader';

/**
 * 支持纹理的 Shader
 */
export class TextureShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(`
            #version 300 es
            in vec3 aVertexPosition;
            in vec2 aTexCoord;

            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;

            out vec2 vTexCoord;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
                vTexCoord = aTexCoord;
            }
        `);

        this.fragmentShader = new FragmentShader(`
            #version 300 es
            precision highp float;
            in vec2 vTexCoord;
            out vec4 outColor;

            uniform sampler2D uTexture;
            uniform vec3 uTintColor;
            uniform float uTintStrength;

            void main() {
                vec4 texColor = texture(uTexture, vTexCoord);
                vec3 finalColor = mix(texColor.rgb, uTintColor, uTintStrength);
                outColor = vec4(finalColor, texColor.a);
            }
        `);

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
```

---

### 示例 4: 卡通渲染 Shader (Toon Shading)

```typescript
import { ShaderSet } from '../../src/shader';
import { VertexShader, FragmentShader } from '../../src/context/FragmentShader';

/**
 * 卡通渲染 Shader
 * 使用阶梯式光照实现卡通效果
 */
export class ToonShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(`
            #version 300 es
            in vec3 aVertexPosition;
            in vec3 aNormal;

            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;
            uniform mat3 uNormalMatrix;

            out vec3 vNormal;
            out vec3 vWorldPosition;

            void main() {
                vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
                vWorldPosition = worldPos.xyz;
                vNormal = normalize(uNormalMatrix * aNormal);
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
            }
        `);

        this.fragmentShader = new FragmentShader(`
            #version 300 es
            precision highp float;
            in vec3 vNormal;
            in vec3 vWorldPosition;
            out vec4 outColor;

            uniform vec3 uMaterialColor;
            uniform vec3 uLightDirection;
            uniform vec3 uLightColor;
            uniform vec3 uCameraPosition;

            void main() {
                vec3 normal = normalize(vNormal);
                vec3 lightDir = normalize(-uLightDirection);

                // 计算光照强度
                float NdotL = dot(normal, lightDir);

                // 卡通效果：将光照强度量化为几个级别
                float toonLevels = 4.0;
                NdotL = floor(NdotL * toonLevels) / toonLevels;
                NdotL = max(NdotL, 0.2); // 确保有基础亮度

                // 边缘光效果
                vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
                float rim = 1.0 - max(dot(normal, viewDir), 0.0);
                rim = smoothstep(0.5, 1.0, rim);

                vec3 color = uMaterialColor * uLightColor * NdotL;
                color += vec3(0.1, 0.1, 0.2) * rim; // 蓝色边缘光

                outColor = vec4(color, 1.0);
            }
        `);

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
```

---

### 示例 5: 基于时间的动画 Shader

```typescript
import { ShaderSet } from '../../src/shader';
import { VertexShader, FragmentShader } from '../../src/context/FragmentShader';

/**
 * 支持时间动画的 Shader
 */
export class AnimatedShaderSet extends ShaderSet {
    constructor() {
        super()

        this.vertexShader = new VertexShader(`
            #version 300 es
            in vec3 aVertexPosition;
            in vec3 aNormal;

            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;
            uniform float uTime;
            uniform float uWaveAmplitude;

            out vec3 vNormal;
            out float vTime;

            void main() {
                // 基于时间的顶点动画（波浪效果）
                vec3 pos = aVertexPosition;
                pos.y += sin(pos.x * 2.0 + uTime) * uWaveAmplitude;

                vec4 worldPos = uModelMatrix * vec4(pos, 1.0);
                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
                vNormal = aNormal;
                vTime = uTime;
            }
        `);

        this.fragmentShader = new FragmentShader(`
            #version 300 es
            precision highp float;
            in vec3 vNormal;
            in float vTime;
            out vec4 outColor;

            uniform vec3 uMaterialColor;
            uniform float uSpeed;

            void main() {
                // 基于时间的颜色变化
                vec3 color = uMaterialColor;
                color.r += sin(vTime * uSpeed) * 0.3;
                color.g += cos(vTime * uSpeed) * 0.3;

                outColor = vec4(color, 1.0);
            }
        `);

        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}
```

---

## 使用自定义 Shader

### 方式 1: 直接在 Material 中使用

```typescript
import { Material } from 'flower';
import { CustomShaderSet } from './CustomShaderSet';

const material = new Material();
material.shader = new CustomShaderSet();
```

### 方式 2: 创建自定义 Material 类

```typescript
import { Material } from 'flower';
import { CustomShaderSet } from './CustomShaderSet';

export class CustomMaterial extends Material {
    constructor() {
        super()
        // 替换默认 Shader
        this.shader = new CustomShaderSet()
    }
}
```

---

## 创建对应的 Uniform

自定义 Shader 通常需要自定义 Uniform。例如，渐变 Shader 需要：

```typescript
import { Uniform } from '../../src/material/uniform';
import { vec3 } from 'gl-matrix-esm';

export class GradientTopColor extends Uniform {
    name = "uColorTop"
    color: vec3 = vec3.fromValues(1.0, 0.0, 0.0) // 红色

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniform3fv(this.location, this.color)
    }
}

export class GradientBottomColor extends Uniform {
    name = "uColorBottom"
    color: vec3 = vec3.fromValues(0.0, 0.0, 1.0) // 蓝色

    tie(gl: WebGL2RenderingContext) {
        const uniformInfo = this.findUniformInfo()
        if (!uniformInfo) return
        this.location = uniformInfo.location
        const gl2 = gl as WebGL2RenderingContext
        gl2.uniform3fv(this.location, this.color)
    }
}
```

**使用**:
```typescript
const material = new Material();
material.shader = new GradientShaderSet();

// 添加自定义 Uniform
const topColor = new GradientTopColor();
const bottomColor = new GradientBottomColor();
material.uniform.add(topColor);
material.uniform.add(bottomColor);
```

---

## 注意事项

### 1. 保持兼容性

如果自定义 Shader 需要与现有系统兼容，确保：

- 使用标准的 uniform 名称（如 `uModelMatrix`, `uViewMatrix`, `uProjectionMatrix`）
- 保持标准的 attribute 名称（如 `aVertexPosition`）

### 2. 错误处理

```typescript
constructor() {
    super()
    try {
        this.vertexShader = new VertexShader(vertexSource)
        this.fragmentShader = new FragmentShader(fragmentSource)
        // ...
    } catch (error) {
        console.error('Shader compilation failed:', error)
        // 回退到默认 Shader
        this.vertexShader = new VertexShader(defaultVertexSource)
        this.fragmentShader = new FragmentShader(defaultFragmentSource)
    }
}
```

### 3. 性能考虑

- 避免在 Shader 中使用过多的分支（if/else）
- 尽量使用内置函数（如 `mix`, `smoothstep`）
- 避免在 Fragment Shader 中进行复杂计算

### 4. 调试技巧

```typescript
// 在 Shader 编译后检查错误
this.vertexShader.tie(gl)
if (!gl.getShaderParameter(this.vertexShader.shader, gl.COMPILE_STATUS)) {
    console.error('Vertex Shader Error:',
        gl.getShaderInfoLog(this.vertexShader.shader))
}
```

---

## 完整示例：自定义 Material + Shader

```typescript
import { Material } from 'flower';
import { ShaderSet } from 'flower';
import { VertexShader, FragmentShader } from 'flower';
import { Uniform, UniformSet } from 'flower';

// 1. 创建自定义 Shader
class MyCustomShaderSet extends ShaderSet {
    constructor() {
        super()
        this.vertexShader = new VertexShader(/* ... */)
        this.fragmentShader = new FragmentShader(/* ... */)
        this.clear()
        this.add(this.vertexShader)
        this.add(this.fragmentShader)
    }
}

// 2. 创建自定义 Uniform
class MyCustomUniform extends Uniform {
    name = "uMyValue"
    value: number = 1.0

    tie(gl: WebGL2RenderingContext) {
        const info = this.findUniformInfo()
        if (!info) return
        this.location = info.location
        gl.uniform1f(this.location, this.value)
    }
}

// 3. 创建自定义 Material
export class MyCustomMaterial extends Material {
    myUniform: MyCustomUniform

    constructor() {
        super()
        this.shader = new MyCustomShaderSet()
        this.myUniform = new MyCustomUniform()
        this.uniform.add(this.myUniform)
    }
}

// 4. 使用
const material = new MyCustomMaterial();
material.myUniform.value = 2.0;
```

---

## 最佳实践

1. **模块化**: 将 Shader 代码分离到单独的文件
2. **可配置**: 通过 Uniform 参数化 Shader 行为
3. **文档化**: 为自定义 Shader 编写文档说明
4. **测试**: 在不同场景下测试自定义 Shader
5. **性能**: 监控自定义 Shader 的性能影响

---

## 相关文档

- [Shader 设计文档](./SHADER_DESIGN.md) - 了解默认 Shader 的设计
- [Uniform 系统](./ARCHITECTURE_DESIGN.md#uniform-扩展) - 了解如何创建自定义 Uniform
- [Material API](../api/material.md) - 了解 Material 的使用方法
