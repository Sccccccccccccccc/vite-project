<!-- 视频播放组件 -->
<template>
    <div class="main" ref="playWndBox">
        <div id="playWnd" class="playWnd" :style="{
            height: playWndHeight + 'px',
            width: playWndWidth + 'px',
        }"></div>
    </div>
</template>
   
<script setup>
import { ref, onMounted, onBeforeUnmount, getCurrentInstance, nextTick } from 'vue'

const playWndBox = ref(null)
let playWndHeight = ref('')
let playWndWidth = ref('')
let pubKey = ref('')
let oWebControl = ref(null)
let objData = ref({
    appkey: "",                 //海康提供的appkey
    ip: "",                     //海康提供的ip   
    secret: "",                 //海康提供的secret
    port: 443,
    playMode: 0,        // 0 预览 1回放
    layout: "1x1",      //页面展示的模块数【16】
})

onMounted(() => {

    // 获取页面的实例对象
    const pageInstance = getCurrentInstance();
    // 获取dom节点对象
    const tagDomObj = pageInstance.refs.playWndBox;
    playWndHeight.value = tagDomObj.clientHeight;
    playWndWidth.value = tagDomObj.clientWidth;

    // 监听scroll事件，使插件窗口尺寸跟随DIV窗口变化
    window.addEventListener("scroll", () => {
        console.log(5);

        // return
        if (oWebControl.value != null) {
            oWebControl.JS_Resize(
                tagDomObj.clientWidth,
                tagDomObj.clientHeight
            );
            this.setWndCover();
        }
    });

    // 监听resize事件，使插件窗口尺寸跟随DIV窗口变化
    window.addEventListener("resize", (e) => {
        if (oWebControl.value != null) {
            oWebControl.JS_Resize(
                tagDomObj.clientWidth,
                tagDomObj.clientHeight
            );
            this.setWndCover();
        }
    });

    // 初始化播放器插件
    nextTick(() => {
        initPlugin();
    })
})

onBeforeUnmount(() => {
    if (oWebControl.value != null) {
        // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
        oWebControl.JS_HideWnd();
        // 销毁当前播放的视频
        oWebControl.JS_RequestInterface({ funcName: "destroyWnd" });
        // 断开与插件服务连接
        oWebControl.JS_Disconnect();
    }
})



const initPlugin = () => {
    oWebControl = new WebControl({
        szPluginContainer: "playWnd", // 指定容器id
        iServicePortStart: 15900, // 指定起止端口号，建议使用该值
        iServicePortEnd: 15900,
        szClassId: "23BF3B0A-2C56-4D97-9C03-0CB103AA8F11", // 用于IE10使用ActiveX的clsid
        cbConnectSuccess: () => {
            // 创建WebControl实例成功
            oWebControl
                .JS_StartService("window", {
                    // WebControl实例创建成功后需要启动服务
                    // 值"./VideoPluginConnect.dll"写死
                    dllPath: "./VideoPluginConnect.dll",
                })
                .then(
                    function () {
                        // 设置消息回调
                        oWebControl.JS_SetWindowControlCallback({
                            // cbIntegrationCallBack: cbIntegrationCallBack,
                        });
                        //JS_CreateWnd创建视频播放窗口，宽高可设定
                        oWebControl
                            .JS_CreateWnd("playWnd", 1152, 581, { bEmbed: true })//这一部分很重要，两个参数为你盒子的宽高，这样是写死是防止组件加载之前出现白屏；bEmbed: true 防止窗口闪烁
                            .then(function () {
                                // 创建播放实例成功后初始化
                                init();
                            });
                    },
                    function () {
                        // 启动插件服务失败
                    }
                );
        },
        // 创建WebControl实例失败
        cbConnectError: function () {
            // 这里写创建WebControl实例失败时的处理步骤,下面的代码仅做参看，具体实现步骤根据个人需求进行编写！！！！！！！！


            // console.log(0);
            // oWebControl.value = null;
            // // 程序未启动时执行error函数，采用wakeup来启动程序
            // window.WebControl.JS_WakeUp("VideoWebPlugin://");
            // initCount++;
            // if (initCount < 3) {
            //   setTimeout(function () {
            //     initPlugin();
            //   }, 3000);
            // } else {
            //   setTimeout(function () {
            //     setTimeout(function () {
            //       $router.push('/home/PlugDown')
            //     }, 4000)
            //   }, 4000)
            // }
        },
        cbConnectClose: () => {
            // 异常断开：bNormalClose = false
            // JS_Disconnect正常断开：bNormalClose = true
            // console.log("cbConnectClose");
            oWebControl.value = null;
        },
    });
    // oWebControl.JS_CuttingPartWindow(500, 500, 500, 500);

}




// 初始化
const init = (callback) => {
    getPubKey(() => {
        let appkey = objData.value.appkey;                   //综合安防管理平台提供的appkey，必填
        let secret = setEncrypt(objData.value.secret); //综合安防管理平台提供的secret，必填
        let ip = objData.value.ip;                           //综合安防管理平台IP地址，必填
        let playMode = objData.value.playMode;                //初始播放模式：0-预览，1-回放
        let port = objData.value.port;                        //综合安防管理平台端口，若启用HTTPS协议，默认443
        let snapDir = "D:\\SnapDir";                        //抓图存储路径
        let videoDir = "D:\\VideoDir";                      //紧急录像或录像剪辑存储路径
        let layout = objData.value.layout;                   //playMode指定模式的布局
        let enableHTTPS = 1;                                //是否启用HTTPS协议与综合安防管理平台交互，这里总是填1
        let encryptedFields = "secret";                     //加密字段，默认加密领域为secret
        let showToolbar = 1;                                //是否显示工具栏，0-不显示，非0-显示
        let showSmart = 0;                                  //是否显示移动框线框，0-不显示，非0-显示
        let buttonIDs =
            "0,16,256,257,258,259,260,512,513,514,515,516,517,768,769"; //自定义工具条按钮
        // var toolBarButtonIDs = "2049,2304" // 工具栏上自定义按钮
        oWebControl
            .JS_RequestInterface({
                funcName: "init",
                argument: JSON.stringify({
                    appkey: appkey,         //API网关提供的appkey
                    secret: secret,         //API网关提供的secret
                    ip: ip,                 //API网关IP地址
                    playMode: playMode,      //播放模式（决定显示预览还是回放界面）
                    port: port,             //端口
                    snapDir: snapDir,       //抓图存储路径
                    videoDir: videoDir,     //紧急录像或录像剪辑存储路径
                    layout: layout,         //布局
                    enableHTTPS: enableHTTPS,   //是否启用HTTPS协议
                    encryptedFields: encryptedFields, //加密字段
                    showToolbar: showToolbar, //是否显示工具栏
                    showSmart: showSmart,   //是否显示智能信息
                    buttonIDs,              //自定义工具条按钮
                }),
            })
            .then(function (oData) {
                oWebControl.JS_Resize(playWndWidth.value, playWndHeight.value); // 初始化后resize一次，规避firefox下首次显示窗口后插件窗口未与DIV窗口重合问题
                if (callback) {
                    callback();
                }
                // 隐藏
                // oWebControl.JS_HideWnd()
            });
    });
}

// RSA 加密
let setEncrypt = (value) => {
    let encrypt = new window.JSEncrypt();
    encrypt.setPublicKey(pubKey);
    return encrypt.encrypt(value);
}
// 获取公钥
const getPubKey = (callback) => {
    oWebControl
        .JS_RequestInterface({
            funcName: "getRSAPubKey",
            argument: JSON.stringify({
                keyLength: 1024,
            }),
        })
        .then(function (oData) {
            if (oData.responseMsg.data) {
                pubKey = oData.responseMsg.data;
                callback();
            }
        });
}



// 调用这个函数可进行视频播放
// 视频预览功能
const previewVideo = (data) => {
    let cameraIndexCode = data;  // 获取输入的监控点编号值，必填
    let streamMode = 0;          // 主子码流标识：0-主码流，1-子码流
    let transMode = 1;           // 传输协议：0-UDP，1-TCP
    let gpuMode = 0;             // 是否启用GPU硬解，0-不启用，1-启用
    let wndId = -1;              // 播放窗口序号（在2x2以上布局下可指定播放窗口）

    oWebControl.JS_RequestInterface({
        funcName: "startPreview",
        argument: JSON.stringify({
            cameraIndexCode: cameraIndexCode, // 监控点编号
            streamMode: streamMode,                 // 主子码流标识
            transMode: transMode,                   // 传输协议
            gpuMode: gpuMode,                       // 是否开启GPU硬解
            wndId: wndId,                           // 可指定播放窗口
        }),
    })
        .then(function () {
            oWebControl.JS_SetWindowControlCallback({

            });
        });
}

</script>
   
<style lang="scss" scoped>
.main {
    position: fixed;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
    width: 60vw;
    height: 60vh;
    margin: auto;
    background-color: #ccc;
}
</style>