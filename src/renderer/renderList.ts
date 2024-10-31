import {Tiny} from "../context/co/tiny";
import {Cell} from "../model/cell";
import {Program} from "../context/program";
import {DepthState} from "../material/state";
import {DrawArray} from "../context/draw";

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
            i.geometry.drawers.forEach(
                drawer=>{
                    queue.push(drawer)
                }
            )
        })
        this.queue = queue
    }

    destroyQueue(gl:WebGLRenderingContext){

    }

    queue:Tiny[]=[]

    render(gl:WebGLRenderingContext){
        this.destroyQueue(gl)
        this.createQueue(gl)
        this.queue.forEach(i=>{
            i.tie(gl)
        })

        console.log(this.queue)
    }

}
