<script setup lang="ts">
import "highlight.js/styles/github.css";
import 'highlight.js/styles/atom-one-dark.css'

import icon1 from "@/components/icon/tempSVG.vue";

let code = `let a = 1;import hljs-containerVuePlugin from '@highlightjs/vue-plugin';import hljs-containerVuePlugin from '@highlightjs/vue-plugin';
import hljs-containerVuePlugin from '@highlightjs/vue-plugin';
import hljs-containerVuePlugin from '@highlightjs/vue-plugin';

<template>
<div style="background-color: aliceblue; width: 50%; position: relative; left: 50%; transform: translateX(-50%); top: 34%;">
  <div class="dataList-group-box">
    <el-row :gutter="20" class="dataList-group">
      <el-col :lg="12" :md="24" class="dataList">
        <scrollTable :tableDataList="inboundDataList" :tableScrollSpeed="1" tableTitle="⬆️近20条入库记录" :itemNumber="10">
        </scrollTable>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="dataList-group"> </el-row>
  </div>
</div>
</template>
`;

import { useLeafletMap } from "@/hook/useLeafLetMap";
import { onMounted } from "vue";

import icon_green from '@/assets/img/icon_ld.png'
import { title } from "process";

import * as L from 'leaflet';
import '@/assets/leafLetPlug/leaflet.canvas-markers.js'

// 引入
const {
    mapInit,
    setMapCenter,
    setMapScale,
    setMapBounds,
    setZoomLevels,
    addMapImgOverLay,
    addMapMarker,
    addMapLine,
    addMapPolygon,
    addMapPopup,
    getTemplateNode,
    getPopupObj,
    addMapOverLay,
    removeMapOverLay,
    removeMapAllOverLay,
    getMap,

    addManyMarker

} = useLeafletMap('map')

// 初始化地图
onMounted(() => {

    // addManyMarker()

    mapInit().then(() => {
        // 地图初始化完毕后回调操作
        console.log("地图初始化完毕后回调操作");
        // 启动插入标记的过程
        // setTimeout(() => {
        //     add();
        // }, 0);
    })

    const total = 1000;
    const batchSize = 20; // 一次插入20条
    let countOfRender = 0;
    function add() {
        // for (let i = 0; i < batchSize && countOfRender < total; i++) {
        //     addMapMarker(
        //         { lat: Math.random() * 180 - 90, lng: Math.random() * 360 - 180 },
        //         {
        //             title: '测试',
        //         },
        //         {
        //             iconUrl: icon_green,
        //         },
        //         (e: any) => {
        //             console.log("event", e);
        //         }
        //     );
        //     countOfRender++;
        // }
        // // 如果还有未渲染的标记，继续请求下一帧
        // if (countOfRender < total) {
        //     window.requestAnimationFrame(add);
        // }
    }

})

</script>


<template>

    <!-- <div class="hljs-container" codetype="js">
        <highlightjs language="js" :autodetect="true" :code="code"></highlightjs>
        
        <icon1></icon1>
    </div> -->

    <div id="map">

    </div>

</template>

<style scoped lang="scss">
#map {
    width: 1920px;
    height: 1080px;
}

/* 语法高亮 */
.hljs-container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 20%;
    display: block;
    width: 800px;
    padding: 30px 5px 2px;
    overflow-x: auto;
    line-height: 20px;
    text-align: left;
    background: #21252b;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 40%);
    border-radius: 6px;
}

/** 3个点 */
.hljs-container::before {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 12px;
    height: 12px;
    overflow: visible;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    white-space: nowrap;
    text-indent: 75px;
    background-color: #fc625d;
    border-radius: 16px;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: attr(codetype);
}

/** 滚动条 */
:deep(.hljs) {
    overflow-x: auto;
}

:deep(.hljs::-webkit-scrollbar) {
    width: 12px !important;
    height: 12px !important;
}

:deep(.hljs::-webkit-scrollbar-thumb) {
    height: 30px !important;
    background: #d1d8e6;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 19px;
    opacity: 0.8;
}

:deep(.hljs::-webkit-scrollbar-thumb:hover) {
    background: #a5b3cf;
    background-clip: content-box;
    border: 2px solid transparent;
}

:deep(.hljs::-webkit-scrollbar-track-piece) {
    width: 30px;
    height: 30px;
    background: #333;
}

::-webkit-scrollbar-button {
    display: none;
}
</style>