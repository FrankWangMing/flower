import {vec3,mat4} from 'gl-matrix-esm'

export class ViewMatrix {

    constructor() {
        // Compute the camera's matrix
        const camera = vec3.fromValues(100, 150, 200);
        const target =  vec3.fromValues(0, 35, 0);
        const up = vec3.fromValues(0, 1, 0);
        const cameraMatrix = mat4.create()
        mat4.lookAt(cameraMatrix,camera, target, up);
    }



}
