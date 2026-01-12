// 导出类型
export type {
    GLBChunkType,
    GLBParseResult,
    GltfMeshPrimitive,
    GltfMesh,
    GltfBufferView,
    GltfAccessor,
    MinimalGLTF,
    GLBLoadInput,
    GLBToGeometryResult,
} from './types';

// 导出工具函数
export { getNumComponents, getComponentSize, getTypedArrayCtor, readComponent } from './common/utils';

// 导出 GLB 解析器
export { parseGLB } from './common/glbParser';

// 导出 Accessor 读取器
export { readAccessor, readAccessorAsFloat32, readAccessorAsUint16 } from './common/accessorReader';

// 导出 GLB 加载器（API 入口）
export { GLBLoader, fetchArrayBuffer } from './api/glbLoader';

// 导出 Loader 类（保持向后兼容）
import { GLBLoader, fetchArrayBuffer } from './api/glbLoader';
import { parseGLB } from './common/glbParser';
import { readAccessor, readAccessorAsFloat32, readAccessorAsUint16 } from './common/accessorReader';
import { getNumComponents, getComponentSize, getTypedArrayCtor, readComponent } from './common/utils';

export class Loader {
    static GLBLoader = GLBLoader;
    static fetchArrayBuffer = fetchArrayBuffer;
    static parseGLB = parseGLB;
    static readAccessor = readAccessor;
    static readAccessorAsFloat32 = readAccessorAsFloat32;
    static readAccessorAsUint16 = readAccessorAsUint16;
    static getNumComponents = getNumComponents;
    static getComponentSize = getComponentSize;
    static getTypedArrayCtor = getTypedArrayCtor;
    static readComponent = readComponent;
}
