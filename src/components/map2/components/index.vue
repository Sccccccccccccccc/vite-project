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

function throttle(func: any, delay: any) {
    let lastCallTime = 0;

    return function (...args: Array<any>) {
        const now = Date.now();

        if (now - lastCallTime >= delay) {
            func.apply(this, args);
            lastCallTime = now;
        }
    };
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

        let mo = _option.geo[0].zoom //获取当前地图的缩放大小
        let _center = _option.geo[0].center //获取当前地图的中心点
        console.log("_center", _center);

        if (props.zoom != null && props.zoom != undefined) {
            //触发缩放
            for (let i = 1; i < _option.series.length; i++) { //循环遍历series数组
                _option.geo[i].zoom = mo; //下层geo的缩放等级跟着上层的geo一起改变
                _option.geo[i].center = mo; //下层的geo的中心位置随着上层geo一起改变
            }
        } else {
            //监听到拖拽结束，重新设置地图的中心点和缩放大小
            for (let i = 0; i < _option.series.length; i++) { //循环遍历series数组
                _option.geo[i].center = _center; //下层的geo的中心位置随着上层geo一起改变
            }

        }

        myChart.setOption(_option)
    })

}

</script>


<!-- 地图容器 -->
<template>
    <div class="mapChart" id="mapChart" ref="mapChart3d"
        style="width: 1920px; height: 1080px;  position: relative; left: 50%; transform: translateX(-50%);">
    </div>
</template>