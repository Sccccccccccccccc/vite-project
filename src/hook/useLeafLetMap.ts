import { createVNode, render } from "vue";
import * as L from 'leaflet';

import 'leaflet.chinatmsproviders';
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet";

import {CanvasMarkerLayer} from "@panzhiyue/leaflet-canvasmarker"

import icon_green from '@/assets/img/icon_ld.png'

// https://blog.csdn.net/YueMiaoL/article/details/140720140
export const useLeafletMap = (id: any) => {

    let map: any = null;
    const mapInit = ( mapOption = {} ) => {
        
        // 申请的天地图key
        const TDT_KEY = '2973b4ae6fc25a6f326754a6ffc6eccc';

        const normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
            key: TDT_KEY,
            maxZoom: 18,
			minZoom: 3
        })

        const normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
			key: TDT_KEY,
			maxZoom: 18,
			minZoom: 3
		})

		//影像地图
		let satelliteTileLayer = L.layerGroup([
			L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
				key: TDT_KEY,
			}),
			L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
				key: TDT_KEY,
			})
		]);

		const canvasLayer = new CanvasMarkerLayer({
			collisionFlg: false // 是否开启碰撞检测 
		})

        const normal = L.layerGroup([
			// normalm, 
			// normala, 
			satelliteTileLayer, 
			canvasLayer
		])

		// 地图默认配置
		const defaultMapOption = {
			// renderer: L.canvas(), // 默认矢量图层绘制方法
			// collisionFlg: true, // 是否开启碰撞检测
			perferCanvas: true, // 使用canvas渲染
			center: [24.6385, 110.641],
			zoom: 16,
			layers: [normal],
			zoomControl: false, // 缩放组件
			logoControl: false, // 去掉logo
			attributionControl: false, // 去掉右下角logo
			minZoom: 6,
			maxZoom: 18, //最大显示层级
			preferCanvas: true,
			doubleClickZoom: false, // 取消双击放大
			closePopupOnClick: false // 默认点击地图关闭popup行为
		}
		map = new L.Map(id, Object.assign(defaultMapOption, mapOption))

		// 在canvasLayer上绘制marker
		var icon = L.icon({
			iconUrl: icon_green,
			iconSize: [54, 63],
			iconAnchor: [28, 9]
		});

		for (var i = 0; i < 100000; i++) {
			var lat = 24.6385 + Math.random() * 1.8; // 修改为合理的范围
			var lng = 110.641 + Math.random() * 3.6;
			var marker = L.marker([lat, lng], {
				icon: icon,
				zIndex: 5,
				pane: 'markerPane'
			}).bindPopup('Marker ' + i);
			console.log("marker", i, lat, lng); // 输出坐标
			canvasLayer.addLayer(marker);
		}
		canvasLayer.addTo(map);

		return Promise.resolve() // 回调地图初始化完成


		// 渲染10W个marker不卡顿
		// 1. 使用canvas绘制
		// 2. 使用canvasMarkerLayer插件，设置canvasLayer图层
		// 3. 将图层添加到地图上
		// 4. 将marker添加到canvasLayer图层上
		// 5. 将canvasLayer图层添加到地图上

    }

	// 地图平移
	const setMapCenter = (coordinate: any) => {
		const { lng, lat } = coordinate
		map.panTo(L.latLng(lat, lng), { animate: true })
	}
	// 地图缩放
	const setMapScale = (coordinate: any, zoom: number) => {
		const { lng, lat } = coordinate
		map.setView(L.latLng(lat, lng), zoom, { animate: true })
	}

	// 地图显示范围 coordinate1：范围点位1 coordinate2：范围点位2
	const setMapBounds = (coordinate1 :any, coordinate2 :any) => {
		const { lng: lng1, lat: lat1 } = coordinate1
		const { lng: lng2, lat: lat2 } = coordinate2
		map.setMaxBounds(L.latLngBounds(L.latLng(lat1, lng1), L.latLng(lat2, lng2)))
	}

	// 地图设置显示级别
	const setZoomLevels = (minLevels = 1, maxLevels = 18) => {
		map.setMinZoom(minLevels)
		map.setMaxZoom(maxLevels)
	}

	
	/**
	 * 添加图片覆盖物类
	 * params:
	 *  coordinate1: 经纬度 格式：默认
	 *  coordinate2: 经纬度 格式：默认
	 *  imgUrl: 点位显示图标
	 *  option: 图片覆盖物属性，{ opacity: 图片透明度, alt: 如果无法显示图像，浏览器将显示替代文本 }
	 */
	const addMapImgOverLay = (coordinate1: any, coordinate2: any, imgUrl: any, option = {}) => {
		const { lng: lng1, lat: lat1 } = coordinate1
		const { lng: lng2, lat: lat2 } = coordinate2
		let bd = L.latLngBounds(L.latLng(lat1, lng1), L.latLng(lat2, lng2))
		let imgMarker = L.imageOverlay(imgUrl, bd, option)
		imgMarker.addTo(map)
		return imgMarker
	}


	/**
	 * 地图添加自定义点位并返回该点位对象
	 * params:
	 *  coordinate: 经纬度 格式：默认
	 *  markerOption: 地图图标对象配置
	 *  iconOption: 地图ICON图标配置
	 *   格式：{
	 *   	 iconUrl: String, 图标地址
	 *       iconSize: [30, 30], 图标大小，非必需配置
	 *       iconAnchor: [15, 30] 图标偏移，非必需配置
	 *   }
	 *  clickEvent: 监听点击事件回调
     * tips：iconOption本可直接写入markerOption配置里，但因其配置直接使用L，故另封装一个入参，
     * 可考虑单独对ICON封装函数                                  
	 */
    const addMapMarker = (
        coordinate: any, 
        markerOption: any, 
        iconOption: any, 
        clickEvent: any
    ) => {
        const { lng, lat } = coordinate
		let option = {
            icon: null,
        }
        if (iconOption) {
            let icon = L.icon(
                Object.assign({
                    iconSize: [30, 30],
                    iconAnchor: [15, 30]
                }, iconOption)
            )
            option.icon = icon
        }
        let marker = L.marker(L.latLng(lat, lng), Object.assign(option, markerOption))
        if(clickEvent) {
            marker.on('click', clickEvent)
        }
        marker.addTo(map)
        return marker
    }

	const addManyMarker = () => {

		const markersCanvas = new L.MarkersCanvas(); // 创建一个MarkersCanvas实例
		console.log(markersCanvas);
		
	}


	/**
	 * 地图添加自定义线并返回该线对象
	 * params:
	 *  coordinateList: 线的各点位经纬度数组 格式：[{ lng: 'lng', lat: 'lat' }]
	 *  polylineOption: 线(polyline)配置项
	 *  clickEvent: 监听点击事件回调
	 */
	const addMapLine = (coordinateList: any, polylineOption = null, clickEvent = null) => {
		let points = coordinateList.map((item: any) => {
			return L.latLng(item.lat, item.lng)
		})
		let marker = L.polyline(points, polylineOption)
		if (clickEvent) {
			marker.on('click', clickEvent)
		}
		marker.addTo(map)
		return marker
	}


	/**
	 * 地图添加自定义面并返回该面对象
	 * params:
	 *  coordinateList: 面的各点位经纬度数组 格式：[[{ lng: 'lng', lat: 'lat' }], [{ lng: 'lng', lat: 'lat' }]]
	 *  格式说明：处理面内环情况 外环位置是逆时针定义 内环位置值是顺时针定义
	 *  polylineOption: 面(polygon)配置项
	 *  clickEvent: 监听点击事件回调
	 */
	const addMapPolygon = (coordinateList: any, polygonOption = null, clickEvent = null) => {
		let polygon = coordinateList.map((item: any) => {
			return item.map((pointItem: any) => {
				return L.latLng(pointItem.lat, pointItem.lng)
			})
		})
		let marker = L.polygon(polygon, polygonOption)
		if (clickEvent) {
			marker.on('click', clickEvent)
		}
		marker.addTo(map)
		return marker
	}


	/**
	 * 地图添加自定义窗口并返回窗口对象
	 * params:
	 *  coordinate: 弹出窗口经纬度 格式：默认
	 *  popupOption: 弹出窗口(popup)配置项
	 *  template: 自定义模板组件
	 *  params: 传入组件自定义参数
	 *  clickEvent: 监听点击事件回调
	 */
	const addMapPopup = (coordinate: any, popupOption = {}, template: any, params = {}, clickEvent = null) => {
		// 弹窗默认配置，请根据业务需求参考leaflet文档自定义设置
		const defaultOption = {
			autoPan: false, // 地图做平移动画，如果同时展示多个弹出窗口则默认不做平移
			interactive: true // popup将监听鼠标事件
		}
		// 创建虚拟节点并传参
		const popupContent = getTemplateNode(template, params)
		// 监听组件自定义handleClick事件
		clickEvent && popupContent.el.addEventListener('click', clickEvent)
		// 创建天地图弹出窗口 popupContent.el：test模板dom
		let popup = getPopupObj(popupContent.el, coordinate, Object.assign(defaultOption, popupOption))
		// 地图添加弹出窗口
		addMapOverLay(popup)
		return popup
	}


	/**
	 * 生成一个模板节点并传参
	 * params:
	 *  template: 自定义模板组件
	 *  params: 传入组件自定义参数
	 */
	const getTemplateNode = (template: any, params: any) => {
		// 创建虚拟节点并传参
		const popupContent = createVNode(template, params)
		let node = document.createElement('div') // 创建一个div节点
		render(popupContent, node) // 实例组件挂载到node节点上
		return popupContent
	}
	// 生成弹出窗口对象
	const getPopupObj = (el: any, coordinate: any, popupOption: any) => {
		const { lng, lat } = coordinate
		let popup = L.popup(popupOption).setLatLng(L.latLng(lat, lng)).setContent(el)
		return popup
	}


	// 地图添加覆盖物 obj: 覆盖物对象
	const addMapOverLay = (obj: any) => {
		map.addLayer(obj)
	}
	// 地图移除覆盖物 obj: 覆盖物对象
	const removeMapOverLay = (obj: any) => {
		map.removeLayer(obj)
	}
	// 地图移除所有覆盖物
	const removeMapAllOverLay = () => {
        // 地图图层遍历移除
		map.eachLayer((layer: any) => {
			removeMapOverLay(layer)
		})
	}

    
	// 获取map
	const getMap = () => {
		return map
	}

    return {
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

    }

}

