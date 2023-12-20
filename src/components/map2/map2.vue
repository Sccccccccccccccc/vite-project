
<!-- 地图容器 -->
<template>
    <div class="mapChart" id="mapChart" ref="mapChart" style="height: 100%; background-color: aliceblue;"></div>

</template>

<script lang="ts">

import { ref } from 'vue'
import guangxi from '../../assets/GuangXiMapJson/GuangXi.json'
import guilin from '../../assets/GuangXiMapJson/guilin.json'
// import pingle from '../../assets/GuangXiMapJson/pingle.json'


export default {
    name: "guangxiCityToDistrict",
    data() {
        return {
            mapOption: {
                geo: {
                    zoom: 1,
                    scaleLimit:{
                        min:1,
                        max:8,
                    },
                    show: true,
                    map: 'city',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    roam: true,//是否允许缩放
                    itemStyle: {
                        normal: {
                            areaColor: '#fff',
                            borderColor: '#3B5077',

                        },
                        emphasis: {
                            areaColor: '#2B91B7',
                        }
                    }
                },
                series: [

                    {
                        
                        type: 'map',
                        map: 'guangxi',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false


                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#0227ad',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: []
                    }
                ]
            },
            mapCityCode: 'guangxi',
            guangxiCity: {
                name: '南宁市',
                name: '河池市',
                name: '柳州市',
                name: '桂林市',
                name: '玉林市',
                name: '梧州市',
                name: '来宾市',
                name: '崇左市',
                name: '贵港市',
                name: '防城港市',
                name: '百色市',
                name: '贺州市',
                name: '钦州市',
            }

        }
    },
    methods: {

        drawMapChart() {
            // debugger
            switch (this.mapCityCode) {
                case "guangxi":
                    this.$echarts.registerMap('city', guangxi);
                    break;
                case "guilin":
                    this.$echarts.registerMap('city', guilin);
                    break;
            }
            // 初始化
            var mapChart = this.$echarts.init(document.getElementById('mapChart'));

            // if (mapChart != null && mapChart != '' && mapChart != undefined){
            //     mapChart.dispose();
            // }

            //地图数据（用于鼠标悬停显示的数据源）
            var data = []

            //将城市数据整理到地图数据中
            // this.guangxiCity.forEach(function (v) {
            //     // 地区名称
            //     var name = v.name;
            //     data.push({
            //         name: name,
            //         value: Math.round(Math.random() * 10 + 10)
            //     })
            // });

            this.mapOption.series[0].data = data;
            mapChart.setOption(this.mapOption, true);

            var that = this;
            var provinces = ['nanning', 'hechi', 'liuzhou', 'guilin', 'baise', 'liuzhou', 'wuzhou', 'laibin', 'guigang', 'chongzuo', 'fangchengang', 'qinzhou', 'guifang', 'yulin'];
            var provincesText = ['南宁市', '河池市', '柳州市', '桂林市', '百色市', '贺州市', '梧州市', '来宾市', '贵港市', '崇左市', '防城港市', '钦州市', '贵港市', '玉林市'];
      
            mapChart.on('click', function (param) {
                // console.log("param", param.name);
                that.mapCityCode = provinces[provincesText.indexOf(param.name)] || 'guangxi'
                that.getCityMapOpt()
            })
        },

        //显示各市地图
        getCityMapOpt() {
            console.log("now city",this.mapCityCode);
            switch (this.mapCityCode) {
                case "guangxi":   //此处代表省级回跳全国，也可下跳各市县，同理全国点击跳转省
                    this.$echarts.registerMap('city', guangxi);
                    break;
                case "guilin":
                    this.$echarts.registerMap('city', guilin);
                    break;
                default:
                    console.log("未录入地图数据");
                    
            }
            if (mapChart == null) { // 如果不存在，就进行初始化。
                var mapChart = this.$echarts.init(document.getElementById('mapChart'));
            } else{
                mapChart.dispose();
            }      

            mapChart.setOption(this.mapOption, true);

            var that = this;
            var city = ['pingle'];
            var cityText = ['平乐县'];

            mapChart.on('click', function (param) { 
                console.log("？", param.name);
                that.mapCityCode = city[cityText.indexOf(param.name)] || 'guangxi'
                // that.getCityMapOpt()
            })

        },

        //显示到区县
        // getCityMapOpt_District() {
        //     // console.log("now_District",this.mapCityCode);
        //     switch (this.mapCityCode) {
        //         case "guilin":  
        //             this.$echarts.registerMap('city', guilin);
        //             break;
        //         case "pingle":
        //             this.$echarts.registerMap('city', pingle);
        //             break;
        //         default:
        //             console.log("未录入地图数据");
        //     }

        //     var mapChart = this.$echarts.init(document.getElementById('mapChart'));
        //     mapChart.setOption(this.mapOption, true);
        // },





    },
    mounted() {
        this.drawMapChart();
        this.getCityMapOpt();
        // this.getCityMapOpt_District()
    }
}

</script>