<script setup lang="ts">

import '@/assets/leafLetPlug/leaflet.canvas-markers.js'
// https://blog.csdn.net/Sakura1998gis/article/details/130014148
// https://blog.csdn.net/YueMiaoL/article/details/140720140

import 'leaflet/dist/leaflet.css';
import { onMounted, watch, ref, computed } from 'vue';
import * as L from 'leaflet';
import 'leaflet.chinatmsproviders';
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import icon_green from '@/assets/img/icon_ld.png'
import { local } from '@/utils/storage';
import { usePermissionStore } from '@/store/permission';
import { storeToRefs } from 'pinia';
const permissionStore = usePermissionStore()
const { mapCenter } = storeToRefs(permissionStore)


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

    // 定义一个生成标签HTML的函数
    function generateLabelHtml(address: any) {
        return `<div style="background-color:transition;color:#fff; width:63px; text-align: center;">${address}</div>`;
    }

    var greenIcon = L.icon({
        iconUrl: icon_green,
        //shadowUrl: 'leaf-shadow.png',

        iconSize: [63, 74], // size of the icon
        iconAnchor: [31, 74], // point of the icon which will correspond to marker's location
        //shadowSize: [50, 64], // size of the shadow
        //shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [0, -73], // point from which the popup should open relative to the iconAnchor

    });

    var locations = [
        { coordinates: [24.6438, 110.6467], name: '制药厂' },
        { coordinates: [24.6385, 110.6410], name: '平乐一小' },
        { coordinates: [24.6350, 110.6449], name: '民族中学' },
        { coordinates: [24.638688, 110.638291], name: '马河市场' },
        { coordinates: [24.636005, 110.632957], name: '印山亭' },
    ];

    // 批量添加模拟数据
    // for (let i = 0; i < 10000; i++) {
    //     let lng = Math.random() * 360 - 180;
    //     let lat = Math.random() * 180 - 90;
    //     locations.push({ coordinates: [lat, lng], name: '模拟数据' + i });
    // }

    var markers = [];
    var labels = [];
    // https://leafletjs.cn/reference.html#map-option
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];

        var marker = L.marker(location.coordinates, { icon: greenIcon }).bindPopup(location.name);
        var label = L.marker(location.coordinates, {
            icon: L.divIcon({
                iconSize: 1,
                iconAnchor: [31, 74],
                html: generateLabelHtml(location.name), // 调用函数生成HTML
            })
        });

        markers.push(marker);
        labels.push(label);
    }



    const layers = L.layerGroup([leaflet, leafletText, satelliteTileLayer]);
    map = L.map('myMap', {
        center: [24.6385, 110.641], // 多选框修改的地图中心点不能直接作用与这里，需要使用map.panTo()方法
        zoom: 16,
        maxZoom: 18,
        minZoom: 3,
        zoomControl: false,
        layers: [layers, ...markers, ...labels],
        attributionControl: false
    });

    var latlngs = [//多边形坐标点按顺时针排列
        [
            [24.638632, 110.640044],
            [24.638705, 110.641853],
            [24.63804, 110.642204],
            [24.63776, 110.641091],
            [24.638053, 110.640901],
            [24.6381, 110.640297]
        ],
        [
            [24.638964, 110.642246],
            [24.63895, 110.642565],
            [24.638541, 110.642603],
        ]
    ];

    for (let index = 0; index < latlngs.length; index++) {
        L.polygon(latlngs[index], { color: 'lime' }).addTo(map);
    }


    // 设置绘制后的线条颜色等
    map.pm.setPathOptions({
        color: "orange",
        fillColor: "green",
        fillOpacity: 0.8
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

    watch(() => mapCenter.value,
        (newValue) => {
            setTimeout(() => {
                map.panTo(newValue)
            }, 100)
        }
        // 多选框改变地图中心点的过程：
        // 1.选中多选框触发了pinia里的setCenterLocation;
        // 2.setCenterLocation会将传入的值转化为坐标，并存储到state里的mapCenter;
        // 3.在该界面引入mapCenter，并使用storeToRef()将其转化为响应式数据(storeTorefs是pinia提供的一个方法，用于将store里的数据转化为响应式数据);
        // 4.在watch中监听mapCenter的变化，当其值发生变化时，调用setTimeout()方法(不使用setTimeout()方法，有可能会导致地图中心点无法正常显示）；
        // 5.在setTimeout()方法中，调用map.panTo()方法，将新的中心点坐标传入，实现地图中心点的更新
    )

})


</script>

<template>
    <!-- 地图容器 -->
    <div id="myMap" style=" width:1920px ;  height:1080px ;z-index: 2"></div>
</template>

<style scoped></style>