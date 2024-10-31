import {uniqueId} from "lodash";

export  function createCanvasElement(div: HTMLDivElement) {
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.width = div.style.width;
    canvas.style.height = div.style.height;
    div.style.position = 'relative';
    canvas.setAttribute('id', uniqueId('canvas'));
    div.append(canvas);
    return canvas;
}
