import {Material} from "../../material";
import {Geometry} from "../geometry";

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