import {createCanvasElement} from "./utils";

export class Context {
    canvas:HTMLCanvasElement
    gl:WebGLRenderingContext|null
    constructor(mount:HTMLDivElement) {
        const dpr = window.devicePixelRatio||1
        const canvas =createCanvasElement(mount)
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl', {
            stencil: false,
        });
    }
}
