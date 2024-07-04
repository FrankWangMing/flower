import {Material} from "../../material";
import {Geometry} from "../Geometry";
import {VertexBufferObject} from "../Geometry/vertexBufferObject";

export class Cell {
    material:Material
    geometry:Geometry
    constructor(
        params: { geometry: Geometry ; material: Material; }
    ) {
        this.geometry = params.geometry
        this.material = params.material
    }











}
