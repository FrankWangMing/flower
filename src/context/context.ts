import {createCanvasElement} from "./utils";
import {Global} from "../utils/global.ts";

export class Context {
    canvas:HTMLCanvasElement
    gl!:WebGLRenderingContext
    constructor(mount:HTMLDivElement) {
        const dpr = window.devicePixelRatio||1
        const canvas =createCanvasElement(mount)
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl2', {
            stencil: false,
        }) as WebGLRenderingContext;
        Global.gl = this.gl
        console.log(Global.gl)
        const extensions = new Set<string>();
        extensions.add('OES_element_index_uint');
        extensions.add('OES_vertex_array_object');
        extensions.add('WEBGL_depth_texture');
        extensions.forEach((extension: string): void => {
            this.gl.getExtension(extension);
        });
    }
    init(){


    }
}
