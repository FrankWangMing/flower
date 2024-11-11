import {Controller} from "../index.ts";

export abstract class State {
    protected context: Controller;
    public setContext(context: Controller) {
        this.context = context;
    }
    public abstract start(): void;
    public abstract end(): void;
}
