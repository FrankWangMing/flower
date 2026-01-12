# 模型文件目录

这个目录用于存放文档站点使用的 3D 模型文件。

## 支持的文件格式

- `.glb` - GLTF 二进制格式
- `.gltf` - GLTF JSON 格式
- `.json` - JSON 格式的几何数据（如 cube.json）
- `.obj` - OBJ 格式
- `.fbx` - FBX 格式

## 使用方法

将模型文件放在此目录下，然后通过 `/models/文件名` 路径访问。

### 示例

```typescript
// 加载 GLB 模型
const result = await Loader.GLBLoader('/models/chair.glb');

// 加载 JSON 几何数据
const res = await fetch('/models/cube.json');
const cubeJson = await res.json();
```

## 注意事项

- 文件会自动在开发服务器和构建后的站点中可用
- 建议使用相对较小的模型文件，以提升加载速度
- 大文件建议使用 CDN 或外部存储
