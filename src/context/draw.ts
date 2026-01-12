import { Tiny } from "./co/tiny";

export class BasicDraw extends Tiny {
    constructor() {
        super()
    }
    tie(gl: WebGL2RenderingContext): void {
        this.draw(gl)
    }
    draw(gl: WebGL2RenderingContext) {
    }
}


export class DrawArray extends BasicDraw {
    constructor(
        mode: GLenum,
        count: number,
        // type:,
        offset: number
    ) {
        super();
    }
    tie(gl: WebGL2RenderingContext) {
        this.draw(gl)
    }
    draw(gl: WebGL2RenderingContext) {
        gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
}

export class DrawElements extends BasicDraw {
    indexCount: number
    mode: GLenum
    constructor(indexCount: number, mode: GLenum = WebGL2RenderingContext.prototype.TRIANGLES) {
        super();
        this.indexCount = indexCount
        this.mode = mode
    }
    tie(gl: WebGL2RenderingContext) {
        this.draw(gl)
    }
    draw(gl: WebGL2RenderingContext) {
        gl.drawElements(this.mode, this.indexCount, gl.UNSIGNED_SHORT, 0);
    }
}


export class DrawerSet extends Set<BasicDraw> {

}
