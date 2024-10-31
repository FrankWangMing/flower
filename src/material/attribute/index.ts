
import {Tiny} from "../../context/co/tiny";
import {Program} from "../../context/program.ts";

class Attribute  extends Tiny {
    constructor() {
        super()
    }

    tie(gl: WebGLRenderingContext) {
        const positionAttributeLocation = gl.getAttribLocation(
            Program.current,
            "aVertexPosition"
        );
        gl.enableVertexAttribArray(positionAttributeLocation);
    }
}

export class  AttributeSet extends Set<Attribute> {
    constructor() {
        super();
    }
}
