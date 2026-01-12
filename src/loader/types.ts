export type GLBChunkType = 'JSON' | 'BIN';

export type GLBParseResult = {
    gltf: any;
    bin: ArrayBuffer | null;
    chunks: Array<{ type: GLBChunkType | string; byteLength: number }>;
};

export type GltfMeshPrimitive = {
    attributes: Record<string, number>;
    indices?: number;
};

export type GltfMesh = {
    primitives: GltfMeshPrimitive[];
};

export type GltfBufferView = {
    buffer: number;
    byteOffset?: number;
    byteLength: number;
    byteStride?: number;
};

export type GltfAccessor = {
    bufferView?: number;
    byteOffset?: number;
    componentType: number;
    count: number;
    type: 'SCALAR' | 'VEC2' | 'VEC3' | 'VEC4' | 'MAT2' | 'MAT3' | 'MAT4';
};

export type MinimalGLTF = {
    buffers?: Array<{ byteLength: number; uri?: string }>;
    bufferViews?: GltfBufferView[];
    accessors?: GltfAccessor[];
    meshes?: GltfMesh[];
};

export type GLBLoadInput = string | ArrayBuffer;

export type GLBToGeometryResult = {
    gltf: MinimalGLTF;
    bin: ArrayBuffer;
    vertices: number[];
    indices: number[];
    meshIndex: number;
    primitiveIndex: number;
};
