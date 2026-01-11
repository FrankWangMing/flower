import {State} from "./index.ts";
import {CameraChain} from "../chain/CameraChain.ts";

export class CameraState extends State {
    constructor() {
        super();
    }

    end(): void {
    }

    start(): void {
        this.context.chain.setNext(this.context.cameraChain)
    }
}
