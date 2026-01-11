import {Tiny} from "./co/tiny";

export class BasicDraw extends Tiny{
    constructor() {
        super()
    }
    tie(gl: WebGLRenderingContext): void {
        this.draw(gl)
    }
    draw(gl:WebGLRenderingContext){
    }
}


export class DrawArray extends BasicDraw{
    constructor(
        mode: GLenum,
        count: number,
        // type:,
        offset: number
    ) {
        super();
    }
    tie(gl: WebGLRenderingContext) {
        this.draw(gl)
    }
    draw(gl: WebGLRenderingContext) {
        gl.drawArrays(gl.TRIANGLES, 0,3)
    }
}

export class DrawElements extends BasicDraw {
    indexCount: number
    constructor(indexCount: number) {
        super();
        this.indexCount = indexCount
    }
    tie(gl: WebGLRenderingContext) {
        this.draw(gl)
    }
    draw(gl: WebGLRenderingContext) {
        gl.drawElements(gl.TRIANGLES, this.indexCount, gl.UNSIGNED_SHORT, 0);
    }
}


export class DrawerSet extends Set<BasicDraw>{

}
