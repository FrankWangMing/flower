import { mat4, vec3 } from "gl-matrix-esm";
import { Uniform } from "../material/uniform";
import { Global } from "../utils/global";

export class ProjectMatrix extends Uniform {

  constructor() {
    super()
    // 设定透视矩阵
    const gl = Global.gl
    const fov = (45 * Math.PI) / 180; // 视角为 45 度
    const aspect = gl.canvas.width / gl.canvas.height;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspectiveNO(projectionMatrix, fov, aspect, zNear, zFar);
    this.matrix = projectionMatrix
  }
  name = "uProjectionMatrix"
  tie(gl: WebGL2RenderingContext) {
    this.location = this.findUniformInfo().location
    this.update()
  }

}
