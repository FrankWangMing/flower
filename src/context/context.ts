import {createCanvasElement} from "./utils";
import {Global} from "../utils/global.ts";

export class Context {
    canvas:HTMLCanvasElement
    gl!:WebGL2RenderingContext
    constructor(mount:HTMLDivElement) {
        const dpr = window.devicePixelRatio||1
        const canvas =createCanvasElement(mount)
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl2', {
            stencil: false,
        }) as WebGL2RenderingContext;
        Global.gl = this.gl
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
