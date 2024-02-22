<script setup lang="ts">

import 'leaflet/dist/leaflet.css';
import { onMounted, watch, ref, computed } from 'vue';
import * as L from 'leaflet';
import 'leaflet.chinatmsproviders';
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'

let key: any = '2973b4ae6fc25a6f326754a6ffc6eccc'

// 地图的绘制
// 设置点类型：var greenIcon = L.icon({...
// 使用L.marker放置注记并存储到一个变量里：var marker = L.marker(location.coordinates, { icon: greenIcon })
// 将变量添加到layers里

let map: any;
// https://blog.csdn.net/w87574159/article/details/103202669
let initMap = () => {
    console.log("地图初始化");
    //卫星地图
    const leaflet = L.tileLayer(`http://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${key}`)
    //影像地图
    let satelliteTileLayer = L.layerGroup([
        L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
            key: key,
        }),
        L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
            key: key,
        })

    ]);

    const layers = L.layerGroup([ satelliteTileLayer]);
    map = L.map('theMap', {
        center: [23.9585, 107.201], // 多选框修改的地图中心点不能直接作用与这里，需要使用map.panTo()方法
        zoom: 7.5,
        maxZoom: 18,
        minZoom: 3,
        zoomControl: false,
        layers: [layers,],
        attributionControl: false
    });
    

    map.on('click', (event: any) => {
        L.popup().setLatLng(event.latlng).setContent(event.latlng.toString()).openOn(map);
    })

    // map.pm.addControls({
    //     position: "bottomright",
    //     drawPolygon: true, // 添加绘制多边形
    //     drawMarker: false, //添加按钮以绘制标记
    //     drawCircleMarker: true, //添加按钮以绘制圆形标记
    //     drawPolyline: false, //添加按钮绘制线条
    //     drawRectangle: true,	//添加按钮绘制矩形
    //     drawCircle: true, //  添加按钮绘制圆圈
    //     editMode: true, //  添加按钮编辑多边形
    //     dragMode: true, //   添加按钮拖动多边形
    //     cutPolygon: true, // 添加一个按钮以删除图层里面的部分内容
    //     removalMode: true  // 清除图层
    // });
    map.pm.setLang('zh');  //设置语言  en, de, it, ru, ro, es, fr, pt_br, zh , nl
}


onMounted(() => {
    initMap()
})


</script>

<template>
    <!-- 地图容器 -->
    <div id="theMap" style=" width:1920px ;  height:1080px ;z-index: 0"></div>
</template>

<style scoped></style>
 