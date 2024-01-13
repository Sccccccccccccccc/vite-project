<script setup lang="ts">
import EZUIKit from 'ezuikit-js';
import Header from '../Home/header-container/header-container.vue'
import { ref } from 'vue';

const videoShow = ref(false);
var player = null;
function showVideoModel(data) {
    console.log(data)
    videoShow.value = true
    player = new EZUIKit.EZUIKitPlayer({
        id: 'video', // 视频容器ID
        accessToken: 'at.4h5iu5oc0xivmqpv0985pdvm3wxgnks2-5fk8x0iidl-0mx7u37-vtja1mffy',
        url: 'ezopen://open.ys7.com/D38048794/5.live',
        // simple - 极简版; pcLive-pc直播；pcRec-pc回放；mobileLive-移动端直播；mobileRec-移动端回放;security - 安防版;voice-语音版;
        //template: 'simple',
        plugin: ['talk'], // 加载插件，talk-对讲
        width: 710,
        height: 370,
    });
}




</script>

<template>
    <Header></Header>

    <div class="container">
        <div class="video">

            this is a blankPage

        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.video {
    width: 500px;
    height: 500px;
    text-align: center;
    background-color: rgb(91, 121, 149);


}
</style>
 