import {Tiny} from "../context/co/tiny";
import {Cell} from "../model/cell";
import {Program} from "../context/program";
import {DepthState} from "../material/state";
import {DrawArray} from "../context/draw";
import {uModelViewMatrix, uProjectionMatrix} from "../context/channel.ts";

export class RenderList extends Array<Cell>{
    constructor() {
        super();
    }


    build(gl:WebGLRenderingContext){
        this.createQueue(gl)
    }

    createQueue(gl:WebGLRenderingContext){
        const queue:Tiny[] = []
        queue.push(
            DepthState.default()
        )
        this.forEach(i=>{
            queue.push(
                new Program(gl,i.material.shader)
            )
            i.material.state.forEach(i=>{
                queue.push(i)
            })
            i.material.uniform.forEach(i=>{
                queue.push(i)
            })
            i.geometry.vbos.forEach(
                vbo=>{
                    queue.push(vbo)
                }
            )

            queue.push(
                new uProjectionMatrix(gl)
            )

            queue.push(
                new uModelViewMatrix()
            )

            i.geometry.drawers.forEach(
                drawer=>{
                    queue.push(drawer)
                }
            )



        })
        console.log(queue)
        this.queue = queue
    }

    destroyQueue(gl:WebGLRenderingContext){

    }

    queue:Tiny[]=[]

    render(gl:WebGLRenderingContext){
        this.destroyQueue(gl)
        this.createQueue(gl)

        gl.clearColor(0.0, 0.0, 0.0, 0.5);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.queue.forEach(i=>{
            i.tie(gl)
        })
        const error = gl.getError();
        if (error !== gl.NO_ERROR) {
            console.error('WebGL Error:', error);
        }

        console.log(this.queue)
    }

}
