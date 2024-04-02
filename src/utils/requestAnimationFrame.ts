let lastTime = 0;
const prefixes = 'webkit moz ms o'.split(' '); // 各浏览器前缀

type FrameRequestCallback = (time: number) => void;

let requestAnimationFrame: (callback: FrameRequestCallback) => number;
let cancelAnimationFrame: (handle: number) => void;

// 判断是否是服务器环境
const isServer: boolean = typeof window === 'undefined';
if (isServer) {
    requestAnimationFrame = function () {
        return 0;
    };
    cancelAnimationFrame = function () {
        return;
    };
} else {
    requestAnimationFrame = window.requestAnimationFrame ||
        function (callback: FrameRequestCallback) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));
            let id = window.setTimeout(() => {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;
    
    // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
    for (let i = 0; i < prefixes.length; i++) {
        if (requestAnimationFrame !== undefined && cancelAnimationFrame !== undefined) {
            break;
        }
        const prefix: string = prefixes[i];
        requestAnimationFrame = requestAnimationFrame || (window as any)[prefix + 'RequestAnimationFrame'];
        cancelAnimationFrame = cancelAnimationFrame || (window as any)[prefix + 'CancelAnimationFrame'] || (window as any)[prefix + 'CancelRequestAnimationFrame'];
    }

    // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function (callback: FrameRequestCallback): number {
            let currTime: number = new Date().getTime();
            let timeToCall: number = Math.max(0, 16 - (currTime - lastTime));
            let id: number = window.setTimeout(() => {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

        cancelAnimationFrame = function (id: number): void {
            window.clearTimeout(id);
        };
    }
}

export { requestAnimationFrame, cancelAnimationFrame };
