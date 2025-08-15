import {Global} from "./global.ts";
import {Program} from "../context/program.ts";
import {ViewMatrix} from "../camera/ViewMatrix.ts";
import {mat4, quat, vec2, vec3} from "gl-matrix-esm";

export namespace ViewTools{

    export class Zoom {

        public static ZoomIn(){

        }
        public static ZoomOut(){

        }
    }

    export class Rotate{
        public static update(pos)
        {

            const viewMatrix = ViewMatrix.current
            viewMatrix.obr(pos)
        }
    }
}
