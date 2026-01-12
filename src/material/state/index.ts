import { Tiny } from "../../context/co/tiny";

export class State extends Tiny {
    constructor() {
        super()
    }
}

export class DepthState extends State {
    constructor() {
        super();
    }
    static default() {
        return new DepthState()
    }
}

export class BlendState extends State {
    constructor() {
        super();
    }
}

export { RenderModeState } from "./RenderModeState";

export class StateSet extends Set<State> {

}
