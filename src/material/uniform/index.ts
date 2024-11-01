import {Tiny} from "../../context/co/tiny";
import {mat4, Mat4Like} from "gl-matrix-esm";
import {IUniformInfo, Program} from "../../context/program.ts";

export class Uniform  extends Tiny {
    constructor() {
        super()
    }
    name:string
    public matrix: Mat4Like = mat4.create()
    protected location
    protected findUniformInfo(): IUniformInfo {
        const program = Program.current;
        const locations = program.m_uniformLocations;
        return locations[this.name];
    }
    update(){
        const gl = Program.current.gl
        gl.uniformMatrix4fv(this.location, false, this.matrix);
    }
    updateMatrix(matrix:Mat4Like){
        this.matrix = matrix
    }
}
export class  UniformSet extends Set<Uniform> {
    constructor() {
        super();
    }
}
