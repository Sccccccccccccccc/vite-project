import * as echarts from 'echarts'
import guangxi from '../../assets/GuangXiMapJson/guangxi.json'
import  guilin  from '../../assets/GuangXiMapJson/guilin.json'

echarts.registerMap('guangxi', guangxi );

export const getOptions = ( props: any ) => {
    return {
        geo: [
            {
                // animationDurationUpdate:0, //数据更新动画的时长。
                animation : false,
                zoom: 1,
                zlevel: 5,
                scaleLimit: {
                    min: 1,
                    max: 8,
                },
                center:[108.23, 23.63],
                show: true,
                map: 'guangxi',
                roam: true,//是否允许缩放
                layoutCenter: ["50%", "50%"],
                layoutSize: "90%",
                label: {
                    normal: {
                        show: true,
                        color: 'white',
                    },
                    emphasis: {
                        show: true,
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: "rgba(188, 165, 66)",
                        shadowColor: "rgba(29, 111, 165,1)",
                        shadowBlur: 18, // 阴影大小
                        areaColor: "rgba(5,21,35,0.03)", // 地图背景色
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            {
                animationDurationUpdate:0, //数据更新动画的时长。
                animation : false,
                center:[108.23, 23.63],
                zoom: 1,
                zlevel: 4,
                scaleLimit: {
                    min: 1,
                    max: 8,
                },
                show: true,
                map: 'guangxi',
                roam: true,//是否允许缩放
                layoutCenter: ["50.3%", "50.3%"],
                layoutSize: "90%",
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: "rgba(29, 111, 165,0.8)",
                        shadowColor: "rgba(29, 111, 165,1)",
                        shadowBlur: 18, // 阴影大小
                        areaColor: "rgba(5,21,35,0.03)", // 地图背景色
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            {
                animationDurationUpdate:0, //数据更新动画的时长。
                animation : false,
                map: 'guangxi',
                center:[108.23, 23.63],
                zoom: 1,
                zlevel: 3,
                scaleLimit: {
                    min: 1,
                    max: 8,
                },
                show: true,
                roam: true,//是否允许缩放
                layoutCenter: ["50.6%", "50.6%"],
                layoutSize: "90%",
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: "rgba(29, 111, 165,0.8)",
                        shadowColor: "rgba(29, 111, 165,1)",
                        shadowBlur: 18, // 阴影大小
                        areaColor: "rgba(5,21,35,0.03)", // 地图背景色
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
        ],
        series: [
            {
                type: 'map',
                map: 'guangxi',
                center:[108.23, 23.63],
                zoom: 1,
                zlevel: 4,
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                left: 10,
                right: 0,
                top: 0,
                bottom: 2,
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
                        borderWidth: 3,
                    },
                    emphasis: {
                        disabled: true,
                        areaColor: '#2B91B7'
                    }
                },
                animationDurationUpdate:0,
                data: []
            }
        ]
    }
}