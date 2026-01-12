import { vec3, mat4, vec4 } from "gl-matrix-esm";
import { Scene } from "../scene";
import { Camera } from "../camera";
import { Cell } from "../model/cell";
import { ViewMatrix } from "../camera/ViewMatrix";
import { ProjectMatrix } from "../camera/ProjectMatrix";

/**
 * 射线接口
 */
export interface Ray {
    origin: vec3;
    direction: vec3;
}

/**
 * 相交检测结果
 */
export interface Intersection {
    object: Cell;
    distance: number;
    point: vec3;
    face?: any;  // 命中的面（可选）
}

/**
 * 射线检测器
 * 用于从屏幕坐标创建射线并检测与 3D 对象的相交
 */
export class Raycaster {
    private scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
    }

    /**
     * 从屏幕坐标创建射线
     * @param screenX 屏幕坐标 X
     * @param screenY 屏幕坐标 Y
     * @param camera 相机对象
     * @returns 射线对象
     */
    setFromCamera(screenX: number, screenY: number, camera: Camera): Ray {
        const canvas = this.scene.context!.canvas;
        const rect = canvas.getBoundingClientRect();

        // 计算归一化设备坐标 (NDC) -1 到 1
        const x = ((screenX - rect.left) / rect.width) * 2 - 1;
        const y = -((screenY - rect.top) / rect.height) * 2 + 1;

        // 获取投影矩阵和视图矩阵
        const projectionMatrix = camera.defaultUniform.projectMatrix.matrix;
        const viewMatrix = camera.defaultUniform.viewMatrix.matrix;

        // 创建射线
        const ray: Ray = {
            origin: vec3.create(),
            direction: vec3.create()
        };

        // 计算射线起点和方向
        // 1. 将 NDC 坐标转换为裁剪空间坐标
        const clipCoords = vec4.fromValues(x, y, -1.0, 1.0);

        // 2. 转换为眼空间坐标（通过逆投影矩阵）
        const invProjectionMatrix = mat4.create();
        mat4.invert(invProjectionMatrix, projectionMatrix);
        const eyeCoords = vec4.create();
        vec4.transformMat4(eyeCoords, clipCoords, invProjectionMatrix);
        eyeCoords[2] = -1.0;  // 近裁剪面
        eyeCoords[3] = 0.0;   // 方向向量

        // 3. 转换为世界空间坐标（通过逆视图矩阵）
        const invViewMatrix = mat4.create();
        mat4.invert(invViewMatrix, viewMatrix);
        const worldCoords = vec4.create();
        vec4.transformMat4(worldCoords, eyeCoords, invViewMatrix);

        // 设置射线方向
        vec3.normalize(ray.direction, vec3.fromValues(worldCoords[0], worldCoords[1], worldCoords[2]));

        // 设置射线起点（相机位置）
        // 从视图矩阵中提取相机位置
        const cameraPos = vec3.fromValues(
            -viewMatrix[12],
            -viewMatrix[13],
            -viewMatrix[14]
        );
        vec3.copy(ray.origin, cameraPos);

        return ray;
    }

    /**
     * 检测射线与对象的相交
     * @param ray 射线
     * @param objects 要检测的对象数组
     * @returns 相交结果数组，按距离排序
     */
    intersectObjects(ray: Ray, objects: Cell[]): Intersection[] {
        const intersections: Intersection[] = [];

        for (const object of objects) {
            const intersection = this.intersectObject(ray, object);
            if (intersection) {
                intersections.push(intersection);
            }
        }

        // 按距离排序（最近的在前）
        intersections.sort((a, b) => a.distance - b.distance);

        return intersections;
    }

    /**
     * 检测射线与单个对象的相交
     * 当前实现：使用包围盒检测（简化版本）
     * TODO: 实现精确的几何体相交检测
     * @param ray 射线
     * @param object 对象
     * @returns 相交结果，如果没有相交则返回 null
     */
    private intersectObject(ray: Ray, object: Cell): Intersection | null {
        // 简化实现：假设对象在原点，使用简单的包围盒检测
        // 实际应用中需要：
        // 1. 计算对象的实际包围盒（AABB/OBB）
        // 2. 考虑对象的变换矩阵
        // 3. 与几何体的精确相交检测

        // 临时实现：假设对象在原点，半径为 1
        const center = vec3.fromValues(0, 0, 0);
        const radius = 1.0;

        // 射线与球体相交检测
        const oc = vec3.create();
        vec3.subtract(oc, ray.origin, center);

        const a = vec3.dot(ray.direction, ray.direction);
        const b = 2.0 * vec3.dot(oc, ray.direction);
        const c = vec3.dot(oc, oc) - radius * radius;

        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return null;  // 没有相交
        }

        const sqrtDiscriminant = Math.sqrt(discriminant);
        const t1 = (-b - sqrtDiscriminant) / (2 * a);
        const t2 = (-b + sqrtDiscriminant) / (2 * a);

        // 选择最近的交点（t > 0）
        let t = t1 > 0 ? t1 : t2;
        if (t <= 0) {
            return null;
        }

        // 计算交点
        const point = vec3.create();
        vec3.scaleAndAdd(point, ray.origin, ray.direction, t);

        return {
            object,
            distance: t,
            point
        };
    }

    /**
     * 获取场景中所有可交互的对象
     * @returns Cell 数组
     */
    getInteractableObjects(): Cell[] {
        // Scene 继承自 RenderList，而 RenderList 继承自 Array<Cell>
        // 所以可以直接返回 this.scene 作为数组
        return Array.from(this.scene);
    }
}
