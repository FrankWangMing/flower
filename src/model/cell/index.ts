import {Material} from "../../material";
import {Geometry} from "../geometry";
import {Event} from "../basic.ts";

export class Cell extends Event{
    material:Material
    geometry:Geometry
    constructor(
        params: { geometry: Geometry ; material: Material; }
    ) {
        super()
        this.geometry = params.geometry
        this.material = params.material
    }


}
