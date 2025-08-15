import {vec3, mat4, Vec2Like, vec2, quat} from 'gl-matrix-esm'
import {Tiny} from "../context/co/tiny.ts";
import {Uniform} from "../material/uniform";
import {DefaultUniform} from "./DefaultUniform.ts";

export class ViewMatrix extends Uniform {
    static current:ViewMatrix
    defaultUniform:DefaultUniform
    constructor(defaultUniform:DefaultUniform) {
        super()
        this.defaultUniform = defaultUniform
        const camera = vec3.fromValues(0, 5, 5);
        const target =  vec3.fromValues(0, 0, 0);
        const up = vec3.fromValues(0, 1, 0);
        const cameraMatrix = mat4.create()
        mat4.lookAt(cameraMatrix,camera, target, up);
        this.matrix = cameraMatrix
    }
    name="uViewMatrix"
    tie(gl: WebGLRenderingContext) {
        const Uniform = this.findUniformInfo()
        this.location = Uniform.location
        this.update()
    }

    pos:Vec2Like|undefined

    obr(pos){
        if(!this.pos)return
        const delta = vec2.create();
        vec2.subtract(delta, pos, this.pos);
        delta[1] = -delta[1];
        this.pos = pos;
        const viewportSize = [100,100];
        const e = this.matrix;
        const right = vec3.fromValues(e[0], e[4], e[8]);
        const up = vec3.fromValues(e[1], e[5], e[9]);
        const dir = vec3.fromValues(e[2], e[6], e[10]);
        const distance = (vec2.length(delta) / viewportSize[1]) * Math.PI * 2.0;
        vec2.normalize(delta, delta);

        vec3.normalize(right, right);
        for (let i = 0; i < right.length; ++i) {
            right[i] *= delta[0];
        }

        vec3.normalize(up, up);
        for (let i = 0; i < up.length; ++i) {
            up[i] *= delta[1];
        }

        const rollDir = vec3.create();
        vec3.add(rollDir, rollDir, right);
        vec3.add(rollDir, rollDir, up);

        const axis = vec3.clone(dir);
        vec3.cross(axis, axis, rollDir);
        vec3.normalize(axis, axis);

        const rotQuat = quat.create();
        quat.setAxisAngle(rotQuat, axis, distance);

        const trans1 =  this.defaultUniform.orbitPoint;
        const trans2 = vec3.clone(trans1);
        vec3.negate(trans2, trans2);

        const orbitMatrix = mat4.create();
        mat4.translate(orbitMatrix, orbitMatrix, trans1);
        const rotateMatrix = mat4.create();
        mat4.fromQuat(rotateMatrix, rotQuat);
        mat4.multiply(orbitMatrix, orbitMatrix, rotateMatrix);
        mat4.translate(orbitMatrix, orbitMatrix, trans2);
        mat4.multiply(e, e, orbitMatrix);

        this.matrix = e
        this.update()
    }

    wheel(pos){
        if(!this.pos)return
        const delta = vec2.create();
        vec2.subtract(delta, pos, this.pos);
        delta[1] = -delta[1];
        this.pos = pos;
        const viewportSize = [100,100];
        const e = this.matrix;
        const right = vec3.fromValues(e[0], e[4], e[8]);
        const up = vec3.fromValues(e[1], e[5], e[9]);
        const dir = vec3.fromValues(e[2], e[6], e[10]);
        const distance = (vec2.length(delta) / viewportSize[1]) * Math.PI * 2.0;
        vec2.normalize(delta, delta);

        vec3.normalize(right, right);
        for (let i = 0; i < right.length; ++i) {
            right[i] *= delta[0];
        }

        vec3.normalize(up, up);
        for (let i = 0; i < up.length; ++i) {
            up[i] *= delta[1];
        }

        const rollDir = vec3.create();
        vec3.add(rollDir, rollDir, right);
        vec3.add(rollDir, rollDir, up);

        const axis = vec3.clone(dir);
        vec3.cross(axis, axis, rollDir);
        vec3.normalize(axis, axis);

        const rotQuat = quat.create();
        quat.setAxisAngle(rotQuat, axis, distance);

        const trans1 =  this.defaultUniform.orbitPoint;
        const trans2 = vec3.clone(trans1);
        vec3.negate(trans2, trans2);

        const orbitMatrix = mat4.create();
        mat4.translate(orbitMatrix, orbitMatrix, trans1);
        const rotateMatrix = mat4.create();
        mat4.fromQuat(rotateMatrix, rotQuat);
        mat4.multiply(orbitMatrix, orbitMatrix, rotateMatrix);
        mat4.translate(orbitMatrix, orbitMatrix, trans2);
        mat4.multiply(e, e, orbitMatrix);

        this.matrix = e
        this.update()
    }


}
