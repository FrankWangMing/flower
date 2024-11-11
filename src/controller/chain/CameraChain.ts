import {AbstractHandler} from "./index.ts";
import {MouseEvent} from "react";
import {ViewTools} from "../../utils/ViewTools.ts";
import Rotate = ViewTools.Rotate;
import {ViewMatrix} from "../../camera/ViewMatrix.ts";


export class CameraChain extends AbstractHandler {
    constructor() {
        super();
    }

    mousedown(request: MouseEvent): MouseEvent | null {
        console.log(request)
        const pos = [request.clientX,request.clientY]
        const viewMatrix = ViewMatrix.current
        viewMatrix.pos = pos
        // Rotate.update(request)
        return null
    }
    mouseup(request: MouseEvent): MouseEvent | null {
        const viewMatrix = ViewMatrix.current
        viewMatrix.pos = undefined
        return super.mouseup(request);
    }
    mousemove(request: MouseEvent): MouseEvent | null {
        const pos = [request.clientX,request.clientY]
        Rotate.update(pos)
        return  null
    }
}
