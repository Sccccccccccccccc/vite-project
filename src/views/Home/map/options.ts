import { toRefs, type ShallowRef, type Ref, toRaw } from 'vue'
import type { IMapScreenJson } from '@/type'
import { useMapStore } from '../../../store/map'
import { useHomeStore } from '../../../store/home'
import { globalButtonMap, Theme } from '@/constant'
import { getText } from '@/utils'
import { useImageUrl } from '@/utils/files'
import { useGlobalButtonMap } from '@/hook/useGlobalButtonMap'
const mapStore = useMapStore()
const homeStore = useHomeStore()
const { theme } = toRefs(homeStore)
export const {
  mapEvent,
  villageMap,
  villageGrid,
  mapParams,
  houseVos,
  curDetailList,
  showMapDetail,
  showBuildingDetail,
  showGridDetail,
  curId,
  screenJsonList,
  screenApp,
  curResidentPage,
  mapDetailInstance,
  setLayers,
  mapInstance
} = toRefs(mapStore)

let layers: any
let texts: any
export function getIcon(type: number) {
  const icons = getText(type, globalButtonMap, 'icon')
  if (icons instanceof Map) {
    return icons.get(theme.value)
  } else {
    return icons
  }
}

export function setLayerOverview(map: ShallowRef<any>, AMap: ShallowRef<any>) {
  if (mapParams.value.type === -1) {
    setMarker(screenJsonList, map, AMap)
  }
}
export function setLayer(map: ShallowRef<any>, AMap: ShallowRef<any>) {
  // setTimeout(() => {
  if (mapParams.value.type === 4) {
    layers = setLayerByList(houseVos, map, AMap)
    texts = setText(houseVos, map, AMap)
  } else if (mapParams.value.type !== -1) {
    layers = setLayerByList(villageMap, map, AMap)
    texts = setText(villageMap, map, AMap)
  }
  // })
  return () => {
    if (layers) {
      map.value.remove(layers)
    }
    if (texts) {
      map.value.remove(texts)
    }
  }
}

function setMarkerEvent(marker: any, item: any) {
  marker.on('click', async function (a: any) {
    const buttonMap = useGlobalButtonMap(item.type)
    try {
      showMapDetail.value = false
      const fns = buttonMap.getFns('detailsMethod', { id: item.id })
      await Promise.allSettled(fns)
      buttonMap.save('detailsOption', curDetailList)
    } catch (error) {
      console.log(error)
    } finally {
      const option = buttonMap.getOption('detailsOption')
      setPosition(a, option)
    }
  })
}

function setPosition(a: any, option: any) {
  showMapDetail.value = true
  let x = a.target._points[0]
  let y = a.target._points[1]
  const attribute = option().style
  const bodyWidth = document.body.clientWidth
  const bodyHeight = document.body.clientHeight
  const boxWidth = +(attribute?.width.slice(0, -2) || 0)
  const boxHeight = +(attribute?.height.slice(0, -2) || 0)
  if (bodyWidth - boxWidth < x) {
    x = bodyWidth - boxWidth - 1
  }
  if (bodyHeight - boxHeight < y) {
    y = bodyHeight - boxHeight - 1
  }
  mapDetailInstance.value?.setAttribute(
    'style',
    `left:${x}px;top:${y}px;width:${attribute?.width};height:${attribute?.height}`
  )
}

function setLayerByList(list: Ref<Array<any>>, map: ShallowRef<any>, AMap: ShallowRef<any>) {
  const textStyleTypeOne = {
    fontSize: 12,
    fontWeight: 'normal',
    fillColor: '#66EFFF',
    fold: true,
    padding: '2, 5'
  }
  const textStyleTypeTwo = {
    fontSize: 12,
    fontWeight: 'normal',
    fillColor: '#FFFFFF',
    strokeColor: '#336DBD',
    fold: true,
    padding: '2, 5'
  }
  const allowCollision = false
  const layer = new AMap.value.LabelsLayer({
    zooms: [3, 20],
    zIndex: 1000,
    collision: false,
    allowCollision
    // 设置 allowCollision：true，可以让标注避让用户的标注
  })

  const markers = list.value.map((item) => {
    const position = [item.lon, item.lat]
    const icon = item.type === 4 ? setMapIcons(item, [16, 16]) : setMapIcons(item)
    const labelItem = {
      name: item.name,
      position,
      zooms: [3, 20],
      zIndex: 1000,
      icon,
      text: {
        // 要展示的文字内容
        content: item.name,
        // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
        direction: 'bottom',
        // 在 direction 基础上的偏移量
        // offset: [0, 0],
        // 文字样式
        style: theme.value === Theme.TYPE_1 ? textStyleTypeOne : textStyleTypeTwo
      }
    }
    const labelMarker = new AMap.value.LabelMarker(labelItem)
    return labelMarker
  })
  layer.add(markers)
  // 图层添加到地图
  map.value.add(layer)
  return layer
}

function setMarker(list: Ref<Array<any>>, map: ShallowRef<any>, AMap: ShallowRef<any>) {
  const maxCount = Math.max(...screenJsonList.value.map((item) => item.personCount))
  const icons = list.value.map((item) => {
    const marker = new AMap.value.Marker({
      anchor: 'top-center',
      content: `
            <div class="population-container">
              <div class="population">
                 <div>${item.personCount}<span style="font-size:10px;font-weight:400">人</span>
                 </div>
                </div>
                <div style="width:21px;height:${
                  (item.personCount / maxCount) * 69
                }px;margin-bottom:-10px">
                  <img src="${useImageUrl('population_icon')}"/>
                </div>
                <div style="width:32px;height:16px;">
                  <img src="${useImageUrl('population_icon_bottom')}"/>
                </div>
            </div>`,
      position: [item.lon, item.lat],
      zIndex: 1000
    })
    return marker
  })
  map.value.add(icons)
}

export function setMapJson(
  map: ShallowRef<any>,
  AMap: ShallowRef<any>,
  loca: ShallowRef<any>,
  Loca: ShallowRef<any>
) {
  const screenJsonData = screenJsonList.value
  screenJsonData.map((appMapData) => {
    if (appMapData.sideColor && appMapData.topColor) {
      const areas = appMapData.jsonData?.features?.map((r: any) => ({
        color1: appMapData.topColor, //楼顶颜色
        color2: appMapData.sideColor, //楼面颜色
        path: r.geometry.coordinates
      }))
      const buildingLayer = new AMap.value.Buildings({
        zIndex: 130
      })
      if (areas && areas.length) {
        const options = {
          hideWithoutStyle: true, //是否隐藏设定区域外的楼块
          areas: areas
        }
        buildingLayer.setStyle(options)
        map.value.setLayers([...map.value.getLayers(), buildingLayer])
      }
    }
    setBorder(appMapData, loca, Loca)

    const jsonArr: Array<Array<any>> = []
    const geoJSON = new AMap.value.GeoJSON({
      geoJSON: appMapData.jsonData,
      // 还可以自定义getMarker和getPolyline
      getPolygon: function (geojson: any, lnglats: Array<any>) {
        lnglats.forEach((item) => {
          jsonArr.push(item)
        })

        const polygon = new AMap.value.Polygon({
          path: lnglats,
          fillColor: appMapData.color || 'rgba(116,168,255,0.7)',
          strokeColor: appMapData.borderColor || 'rgb(90, 229, 243)',
          strokeWeight: 7,
          fillOpacity: 1,
          strokeOpacity: 0.8,
          zIndex: 1000,
          bubble: true
        })
        return polygon
      }
    })
    const outer = [
      [180, 90],
      [180, -90],
      [0, -90],
      [0, 90]
    ]
    let inner: Array<any> = []
    jsonArr.forEach((item) => {
      if (item.length > inner.length) {
        inner = item
      }
    })
    const pathArray = [outer, toRaw(inner)]
    const polygon = new AMap.value.Polygon({
      path: pathArray,
      strokeWeight: 0,
      fillColor: '#000',
      fillOpacity: 0.5
    })
    map.value.add(polygon)
    map.value.add(geoJSON)
  })
}

function setText(list: Ref<Array<any>>, map: ShallowRef<any>, AMap: ShallowRef<any>) {
  const texts = setMapText(AMap, list, (marker, item) => {
    if (item.type === 0) {
      marker.on('click', async function () {
        const params = { addressId: item.id }
        curId.value = item.id
        curResidentPage.value = 1
        showBuildingDetail.value = true
        const buttonMap = useGlobalButtonMap(item.type)
        const fns = buttonMap.getFns('detailsMethod', params)
        Promise.allSettled(fns)
      })
    } else if (item.type === 6) {
      marker.on('click', async function () {
        const params = { id: item.id }
        showGridDetail.value = true
        const buttonMap = useGlobalButtonMap(item.type)
        const fns = buttonMap.getFns('detailsMethod', params)
        Promise.allSettled(fns)
      })
    } else {
      setMarkerEvent(marker, item)
    }
  })
  map.value.add(texts)
  return texts
}

function setMapIcons(item: any, size: [number, number] = [38, 38]) {
  let image = getIcon(item.type)
  if (Array.isArray(image)) {
    image = image[item.houseType]
  }
  const icon = {
    // 图标类型，现阶段只支持 image 类型
    type: 'image',
    // 图片 url
    image,
    // 图片尺寸
    size,
    // 图片相对 position 的锚点，默认为 bottom-center
    anchor: 'center'
  }
  return icon
}

function setMapText(AMap: any, list: Ref<Array<any>>, event?: (marker: any, item: any) => void) {
  return list.value.map((item) => {
    const position = [item.lon, item.lat]
    const text = new AMap.value.Text({
      text: '  ',
      anchor: 'center', // 设置文本标记锚点
      cursor: 'pointer',
      offset: [0, 10],
      style: {
        'background-color': 'transparent',
        width: '40px',
        height: '60px',
        'border-width': 0
      },
      position
    })
    event && event(text, item)
    text.setzIndex(1)
    return text
  })
}

export function setGridMapText(map: ShallowRef<any>, AMap: ShallowRef<any>) {
  const textStyle = {
    fontSize: 16,
    fontWeight: 'normal',
    fillColor: '#ffffff',
    fold: true,
    opacity: 1,
    padding: '2, 5'
  }
  const allowCollision = false
  const layer = new AMap.value.LabelsLayer({
    zooms: [3, 20],
    zIndex: 500,
    // collision: false,
    allowCollision
    // 设置 allowCollision：true，可以让标注避让用户的标注
  })
  const markers = villageGrid.value.map((item, index) => {
    const position = [item.lon, item.lat]
    const labelItem = {
      name: item.wangGeName,
      position,
      // zooms: [10, 20],
      zIndex: index,
      eventSupport: true,
      text: {
        // 要展示的文字内容
        content: item.wangGeName,
        // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
        // direction: 'bottom',
        // 在 direction 基础上的偏移量
        // offset: [0, 0],
        // 文字样式
        style: textStyle
      }
    }

    const labelMarker = new AMap.value.LabelMarker(labelItem)

    return labelMarker
  })
  layer.add(markers)
  // 图层添加到地图
  map.value.add(layer)
}

function setBorder(item: IMapScreenJson, loca: ShallowRef<any>, Loca: ShallowRef<any>) {
  if (!item.isFence) return
  const json = item.jsonData
  const geo = new Loca.value.GeoJSONSource({
    data: json
  })
  const pl = new Loca.value.PolygonLayer({
    zIndex: 120,
    cullface: 'none',
    shininess: 10,
    opacity: 0.9,
    hasBottom: true,
    blockHide: false,
    hasSide: true,
    hasTop: false,
    depth: false,
    acceptLight: false
  })
  const layer = new Loca.value.LaserLayer({
    zIndex: 130,
    opacity: 1,
    visible: true,
    depth: true,
    zooms: [2, 26]
  })
  pl.setSource(geo)
  let height = +item.fenceHeight || 200
  if (item.isLaser) {
    const jsonArr = json.features.map((item: any) => {
      return item.geometry.coordinates
    })
    const features = jsonArr
      .flat(2)
      .map((coordinates: any) => {
        return {
          type: 'Feature',
          properties: { _draw_type: 'point' },
          geometry: { type: 'Point', coordinates }
        }
      })
      .filter((item: any, index: number) => index % 3 === 0)
    const jsonData = {
      type: 'FeatureCollection',
      features
    }
    const jsonList = new Loca.value.GeoJSONSource({
      data: jsonData
    })
    layer.setSource(jsonList, {
      unit: 'meter',
      height,
      color: item.laserColor || '#41DBFC',
      lineWidth: 8,
      trailLength: 600,
      angle: 0,
      duration: 700,
      interval: 700,
      repeat: Infinity,
      delay: () => {
        return Math.random() * 1000
      }
    })
    setTimeout(() => {
      loca.value.animate.start()
    })
  }
  pl.setStyle({
    topColor: 'rgba(16,128,165,0.1)',
    sideTopColor: item.onFenceColor || 'rgba(77,128,247,0.1)',
    sideBottomColor: item.underFenceColor || 'rgba(77,128,247,1)',
    height,
    altitude: 0
  })
  loca.value.add(pl)
  loca.value.add(layer)
}
