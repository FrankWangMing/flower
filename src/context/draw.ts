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
    constructor() {
        super();
    }
    tie(gl: WebGLRenderingContext) {
        this.draw(gl)
    }
    draw(gl: WebGLRenderingContext) {
        const vertexCount = 24;
        gl.drawElements(gl.TRIANGLES, vertexCount, gl.UNSIGNED_SHORT, 0);
    }
}


export class DrawerSet extends Set<BasicDraw>{

}
