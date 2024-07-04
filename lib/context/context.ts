import {createCanvasElement} from "./utils";

export class Context {
    canvas:HTMLCanvasElement
    gl!:WebGLRenderingContext
    constructor(mount:HTMLDivElement) {
        const dpr = window.devicePixelRatio||1
        const canvas =createCanvasElement(mount)
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl', {
            stencil: false,
        }) as WebGLRenderingContext;
        const extensions = new Set<string>();
        extensions.add('OES_element_index_uint');
        extensions.add('OES_vertex_array_object');
        extensions.add('WEBGL_depth_texture');
        extensions.forEach((extension: string): void => {
            this.gl.getExtension(extension);
        });
        const gl = this.gl
        // 设置清除颜色
        gl.clearColor(161/255, 153/255, 153/255, 1.0);
        // 开启深度测试
        gl.enable(gl.DEPTH_TEST);
        // 设置深度测试函数
        gl.depthFunc(gl.LEQUAL);
        // 清除颜色缓冲区和深度缓冲区
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // 顶点着色器程序
        const vsSource = `
            attribute vec4 aVertexPosition;
            uniform mat4 UModalMatrix;
            void main(void) {
                gl_Position = UModalMatrix*aVertexPosition;
            }
        `;

        // 片元着色器程序
        const fsSource = `
            void main(void) {
                gl_FragColor = vec4(0.5, 1.0, 1.0, 1.0);
            }
        `;

        // 创建顶点着色器对象
        const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
        gl.shaderSource(vertexShader, vsSource);
        gl.compileShader(vertexShader);

        // 创建片元着色器对象
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
        gl.shaderSource(fragmentShader, fsSource);
        gl.compileShader(fragmentShader);

        // 创建 WebGL 程序对象
        const shaderProgram = gl.createProgram() as WebGLShader;
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        console.log(shaderProgram)
        gl.useProgram(shaderProgram);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        // 定义三角形顶点数据
        var vertices = [
            0.0,  1.0,  0.0,
            -1.0, -1.0,  0.0,
            1.0, -1.0,  0.0,
        ];

        // 创建顶点缓冲区对象
        var vertexBuffer = gl.createBuffer();
        // 绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        // 将顶点数据传入缓冲区
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        // 获取顶点着色器中的位置变量
        const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');

        // 启用顶点属性数组
        gl.enableVertexAttribArray(vertexPosition);
        // 指定顶点属性数组的数据源
        gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);


        const UModalMatrix = gl.getUniformLocation(shaderProgram, 'UModalMatrix');
        // 设置 u_matrix 的值
        const matrix = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);

        gl.uniformMatrix4fv(UModalMatrix, false, matrix);


        // 清除颜色缓冲区和深度缓冲区
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // 绘制三角形
        gl.drawArrays(gl.TRIANGLES, 0, 3);


    }
    init(){}
}
