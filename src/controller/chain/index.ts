import {CameraChain} from "./CameraChain.ts";

export interface IHandler<Request = MouseEvent, Result = MouseEvent|null> {
    setNext(handler: IHandler<Request, Result>): IHandler<Request, Result>;
    mousedown(request: Request): Result;
    mouseup(request: Request): Result;
    mousemove(request: Request): Result;
}



export abstract class AbstractHandler implements IHandler
{
    private nextHandler: IHandler;

    public setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    public mousedown(request: MouseEvent): MouseEvent|null {
        if (this.nextHandler) {
            return this.nextHandler.mousedown(request);
        }
        return null;
    }

    mouseup(request: MouseEvent):  MouseEvent|null  {
        if (this.nextHandler) {
            return this.nextHandler.mouseup(request);
        }
        return null;
    }
    mousemove(request: MouseEvent):  MouseEvent|null  {
        if (this.nextHandler) {
            return this.nextHandler.mousemove(request);
        }
        return null;
    }
}

export class Chain extends AbstractHandler{
}

