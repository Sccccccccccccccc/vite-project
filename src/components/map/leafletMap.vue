<script setup lang="ts">

import 'leaflet/dist/leaflet.css';
import { onMounted } from 'vue';
import * as L from 'leaflet';
import 'leaflet.chinatmsproviders';
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'

let key: any = '2973b4ae6fc25a6f326754a6ffc6eccc'

const initMap = () => {
    
    //卫星地图
    const leaflet = L.tileLayer(`http://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${key}`)
    
    //标注
    const leafletText = L.tileLayer(`http://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${key}`)

    //影像地图
    let satelliteTileLayer = L.layerGroup([
        L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
            key: key,
        }),
        L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
            key: key,
        })

    ]);
    //标点
    var marker = L.marker([	24.6438, 110.6467])
    var greenIcon = L.icon({
    iconUrl: '@/assets/img/icon_ld.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [24.6438, 110.6467], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [24.6438, 110.6467] // point from which the popup should open relative to the iconAnchor
    });


    const layers = L.layerGroup([leaflet, leafletText])
    

    let map = L.map('myMap', {//绑定地图容器的id
        center: [24.8, 110.5], //缩放等级
        zoom: 8,
        maxZoom: 18,
        minZoom: 3,
        zoomControl: false,
        layers: [layers,marker],
        attributionControl: false,  // 移除右下角leaflet标识
    })

    satelliteTileLayer.addTo(map);


    // 设置绘制后的线条颜色等
    map.pm.setPathOptions({
        color: "orange",
        fillColor: "green",
        fillOpacity: 0.8
    });

    // map.pm.addControls({
    //     position: "topleft",
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
    <div id="myMap" style=" width:1920px ; height:1080px ;z-index: 2"></div>
    
</template>

<style scoped></style>
 