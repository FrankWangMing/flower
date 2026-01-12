import type { GltfAccessor } from '../types';

/**
 * 获取 accessor type 对应的组件数量
 */
export function getNumComponents(type: GltfAccessor['type']): number {
    switch (type) {
        case 'SCALAR':
            return 1;
        case 'VEC2':
            return 2;
        case 'VEC3':
            return 3;
        case 'VEC4':
            return 4;
        case 'MAT2':
            return 4;
        case 'MAT3':
            return 9;
        case 'MAT4':
            return 16;
    }
}

/**
 * 获取 componentType 对应的字节大小
 */
export function getComponentSize(componentType: number): number {
    // glTF 2.0 componentType
    switch (componentType) {
        case 5120: // BYTE
        case 5121: // UNSIGNED_BYTE
            return 1;
        case 5122: // SHORT
        case 5123: // UNSIGNED_SHORT
            return 2;
        case 5125: // UNSIGNED_INT
        case 5126: // FLOAT
            return 4;
        default:
            throw new Error(`不支持的 accessor.componentType: ${componentType}`);
    }
}

/**
 * 根据 componentType 获取对应的 TypedArray 构造函数
 */
export function getTypedArrayCtor(componentType: number):
    | Int8ArrayConstructor
    | Uint8ArrayConstructor
    | Int16ArrayConstructor
    | Uint16ArrayConstructor
    | Uint32ArrayConstructor
    | Float32ArrayConstructor {
    switch (componentType) {
        case 5120:
            return Int8Array;
        case 5121:
            return Uint8Array;
        case 5122:
            return Int16Array;
        case 5123:
            return Uint16Array;
        case 5125:
            return Uint32Array;
        case 5126:
            return Float32Array;
        default:
            throw new Error(`不支持的 accessor.componentType: ${componentType}`);
    }
}

/**
 * 从 DataView 中读取单个组件值
 */
export function readComponent(dv: DataView, byteOffset: number, componentType: number): number {
    switch (componentType) {
        case 5120:
            return dv.getInt8(byteOffset);
        case 5121:
            return dv.getUint8(byteOffset);
        case 5122:
            return dv.getInt16(byteOffset, true);
        case 5123:
            return dv.getUint16(byteOffset, true);
        case 5125:
            return dv.getUint32(byteOffset, true);
        case 5126:
            return dv.getFloat32(byteOffset, true);
        default:
            throw new Error(`不支持的 accessor.componentType: ${componentType}`);
    }
}
