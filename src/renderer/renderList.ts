import { Tiny } from "../context/co/tiny";
import { Cell } from "../model/cell";
import { Program } from "../context/program";
import { DepthState } from "../material/state";


export class RenderList extends Array<Cell> {
    constructor() {
        super();
    }


    build(gl: WebGL2RenderingContext) {
        this.createQueue(gl)
    }

    createQueue(gl: WebGL2RenderingContext) {
        const queue: Tiny[] = []
        queue.push(
            DepthState.default()
        )

        this.forEach(cell => {
            // 根据 Material 的渲染模式更新 Geometry 的绘制模式
            if (cell.material.renderMode) {
                cell.geometry.updateDrawMode(cell.material.renderMode.mode)
            }

            queue.push(
                new Program(gl, cell.material.shader)
            )
            
            // 添加相机的默认uniform（除了modelMatrix，使用cell自己的）
            this.camera.defaultUniform.forEach(uniform => {
                // 跳过全局的modelMatrix，使用cell自己的
                if (uniform.name !== 'uModelMatrix') {
                    queue.push(uniform)
                }
            })
            
            // 添加cell自己的modelMatrix
            queue.push(cell.modelMatrix)
            
            cell.material.state.forEach(state => {
                queue.push(state)
            })
            cell.material.uniform.forEach(uniform => {
                queue.push(uniform)
            })
            cell.geometry.vbos.forEach(
                vbo => {
                    queue.push(vbo)
                }
            )
            cell.geometry.drawers.forEach(
                drawer => {
                    queue.push(drawer)
                }
            )
        })
        this.queue = queue
    }

    destroyQueue(gl: WebGL2RenderingContext) {

    }

    queue: Tiny[] = []

    render(gl: WebGL2RenderingContext) {
        this.destroyQueue(gl)
        this.createQueue(gl)

        gl.clearColor(0.0, 0.0, 0.0, 0.5);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.queue.forEach(i => {
            i.tie(gl)
        })
        const error = gl.getError();
        if (error !== gl.NO_ERROR) {
            console.error('WebGL Error:', error);
        }

    }

}
