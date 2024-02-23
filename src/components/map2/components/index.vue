<script setup lang="ts">

import { computed, toRefs, defineProps, watch, ref } from 'vue'
// import pingle from '../../assets/GuangXiMapJson/pingle.json'
// import leafletMap1 from './components/leafletMap1.vue'
import { getOptions } from '../options.ts'
import { useResizeEcharts } from '@/hook/useResizeEcharts'
let props = defineProps(['echartsData'])
type echartsType = echarts.ECharts
let mChart: any = null;
console.log("props", props);

const option = computed(() => {
    return getOptions(props.echartsData)
})

// 节流
function throttle(func :any, delay :number) {
	let timer: any = null;
	return function () {
		let context = this;
		let args = arguments;
		if (!timer) {
			timer = setTimeout(function () {
				func.apply(context, args);
				timer = null;
			}, delay);
		}
	}
}

// 防抖
function debounce(func :any, delay :any) {
	// 维护一个定时器
	let timer: any = null;
	return function () {
		let context = this;
		let args = arguments;
		timer && clearTimeout();
		timer = setTimeout(function () {
			func.apply(context, args);
		}, delay);
	}
}

useResizeEcharts('mapChart', option, setChartClick)
function setChartClick(myChart: echartsType) {
    mChart = myChart
    myChart.off('click')
    myChart.off('legendselectchanged')
    myChart.off('georoam')
    myChart.on('legendselectchanged', (item: any) => {
    })

    myChart.on('georoam', (props: any) => {
        let _option: any = myChart.getOption(); //获取option配置
        _option.geo[1].zoom = _option.geo[0].zoom //同步缩放大小zoom
        _option.geo[1].center = _option.geo[0].center //同步中心点center
        _option.geo[2].zoom = _option.geo[0].zoom //同步缩放大小zoom
        _option.geo[2].center = _option.geo[0].center //同步中心点center

        myChart.setOption(_option); //重新设置option数据
    })

}

</script>


<!-- 地图容器 -->
<template>
    <div class="mapChart" id="mapChart" ref="mapChart3d"
        style="width: 1920px; height: 1080px; background-image: url('../texture.png');
         position: relative; left: 50%; transform: translateX(-50%);">
    </div>
</template>