import {Tiny} from "./co/tiny";

export class BasicDraw extends Tiny{
    constructor() {
        super()
    }
    draw(gl:WebGLRenderingContext){

    }
}


export class DrawArray extends BasicDraw{
    constructor() {
        super();
    }
    tie(gl: WebGLRenderingContext) {
        this.draw(gl)
    }
    draw(gl: WebGLRenderingContext) {
        gl.drawArrays(gl.TRIANGLES, 0,3)
    }
}

export class DrawIndex extends BasicDraw{
    constructor() {
        super();
    }
    draw(gl: WebGLRenderingContext) {
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
}
