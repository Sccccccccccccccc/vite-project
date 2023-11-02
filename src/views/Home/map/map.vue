<script setup lang="ts">
import { ref,shallowRef,toRefs,watchEffect,watch } from 'vue'
import { session, local } from '../../../utils/storage'
import AMapLoader from '@amap/amap-jsapi-loader'
import gcoord from 'gcoord'
import {
  setMapJson,
  screenApp,
  setLayer,
  setGridMapText,
  mapEvent,
  setLayerOverview,
  mapParams,
  setLayers,
  mapInstance
} from './options'

import { useGlobalStore } from '../../../store/global'
const globalStore = useGlobalStore()
const { globalButtonList } = toRefs(globalStore)
const map = shallowRef()
const AMap = shallowRef()
const loca = shallowRef()
const LocaMap = shallowRef()
const isInitMap = shallowRef(false)
const mapRef = ref<HTMLElement>()




function initMap() {
  if (isInitMap.value) return
  isInitMap.value = true
    ; (window as any)._AMapSecurityConfig = {
      securityJsCode: 'b0df3d3dfed3ac0032fb61064f47f4b7'
    }
  AMapLoader.load({
    key: '98231224adea792ff590d0d955c28b31', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      'AMap.Scale', //工具条，控制地图的缩放、平移等
      'AMap.ToolBar', //比例尺，显示当前地图中心的比例尺
      'AMap.Geolocation', //定位，提供了获取用户当前准确位置、所在城市的方法
      'AMap.HawkEye',
      'AMap.GeoJSON',
      'AMap.LabelMarker',
      'AMap.LabelsLayer',
      'AMap.Buildings'
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    Loca: {
      // 是否加载 Loca， 缺省不加载
      version: '2.0' // Loca 版本，缺省 1.3.2
    }
  })
    .then((AMaps) => {
      AMap.value = AMaps
      let lat = local.get('currenScreenLat')
      let lon = local.get('currenScreenLon')

      // console.log(appMapData)
      // 将GCJ02坐标转换为WGS84坐标
      var center = gcoord.transform([lon, lat], gcoord.GCJ02, gcoord.WGS84);
      mapInstance.value = map.value = new AMap.value.Map('map-container', {
        //设置地图容器id
        viewMode: '3D', //是否为3D地图模式
        zoom: 14.3, //初始化地图级别
        center: center, //初始化地图中心点位置[120.25804, 30.243] [lon, lat]
        mapStyle: 'amap://styles/darkblue'
      })


      mapEvent.value = () => {
        const mapItem = globalButtonList.value.find((r) => r?.value === mapParams.value.type)
        const mapLvl = mapItem?.mapLvl
        const lon = mapItem?.lon
        const lat = mapItem?.lat
        if (mapLvl) {
          map.value.setZoom(mapLvl)
        }
        if (lon && lat) {
          // 将GCJ02坐标转换为WGS84坐标
          var center = gcoord.transform([lon, lat], gcoord.GCJ02, gcoord.WGS84);
          map.value.setCenter(center)
        }
      }
      
      setLayers.value = () => setLayer(map, AMap)
      loca.value = new (window as any).Loca.Container({
        map: map.value
      })
      LocaMap.value = (window as any).Loca
      map.value.setDefaultCursor('pointer') //使用CSS默认样式定义地图上的鼠标样式（default/pointer/move/crosshair）

    })
    .catch((e) => {
      console.log(e)
    })
};


watch(
  [() => screenApp, () => map],
  (value) => {
    initMap()
    
    const appMapData = screenApp.value
    if (map.value && appMapData) {
      if (appMapData.lon && appMapData.lat) {
        const position = [appMapData.lon, appMapData.lat]
        map.value.setCenter(position)
      }
      if (appMapData.isSatelliteMap) {
        map.value.setLayers([
          new AMap.value.TileLayer.Satellite(),
          new AMap.value.TileLayer.RoadNet()
        ])
      }
      if (appMapData.mapStyle) {
        setTimeout(() => {
          map.value.setMapStyle(appMapData.mapStyle)
        }, 500)
      }
      if (appMapData.mapLvl) {
        map.value.setZoom(appMapData.mapLvl)
      }
      if (appMapData.yangle) {
        map.value.setPitch(+appMapData.yangle)
      }
      if (appMapData.xangle) {
        map.value.setRotation(+appMapData.xangle)
      }
    }
  },
  {
    deep: true,
    immediate: true
  }
)

watchEffect((effect) => {
  if (map.value) {
    setLayer(map, AMap)
    setLayerOverview(map, AMap)
    setMapJson(map, AMap, loca, LocaMap)
    setGridMapText(map, AMap)
  }
  effect(() => {
    map.value?.clearMap()
    loca.value?.clear()
  })
})
</script>


<template>
    <div>
      <div id="map-container" ref="mapRef"></div>
      <div class="backMap" >返回</div>
    </div>
</template>

<style lang="less">
  #map-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .population-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .population {
      background: url(@/assets/img/population.png);
      width: 120px;
      height: 26px;
      text-align: center;
      line-height: 26px;
      font-family: Arial;
      font-weight: bold;
    }
  }
}

</style>