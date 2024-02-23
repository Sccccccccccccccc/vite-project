import * as echarts from 'echarts'
import guangxi from '../../assets/GuangXiMapJson/guangxi.json'
import guilin from '../../assets/GuangXiMapJson/guilin.json'
import texture from './texture.png'

const imageDom = document.createElement("img")
imageDom.src = texture
console.log(imageDom);


echarts.registerMap('guangxi', guangxi);

export const getOptions = (props: any) => {
    return {
        geo: [
            {
                // animationDurationUpdate:0, //数据更新动画的时长。
                animation: false,
                zoom: 1,
                zlevel: 5,
                scaleLimit: {
                    min: 1,
                    max: 8,
                },
                center: [108.23, 23.63],
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
                animationDurationUpdate: 0, //数据更新动画的时长。
                animation: false,
                center: [108.23, 23.63],
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
                        borderWidth: 6,
                        borderColor: "rgba(29, 111, 165,0.8)",
                        shadowColor: "rgba(29, 111, 165,1)",
                        shadowBlur: 18, // 阴影大小
                        areaColor: "rgba(5,21,35)", // 地图背景色
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    },
                    areaColor: {
                        Color: '#eee',
                    },
                }
            },
            {
                animationDurationUpdate: 0, //数据更新动画的时长。
                animation: false,
                map: 'guangxi',
                center: [108.23, 23.63],
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
                        borderWidth: 6,
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
                geoIndex: 0,       //指定要用哪个geo的配置，这里使用第一个geo，因为第一个geo的显示级别zlevel更高，展示数据需要在最顶层展示
                //注意：当设置了geoindex以后，就会使用对应geo的label、itemstyle样式，当前series的label等样式就无效了，
                center: [108.23, 23.63],
                zoom: 1,
                zlevel: 4,
                aspectScale: 0.75, //长宽比
                left: 10,
                right: 0,
                top: 0,
                bottom: 2,
                showLegendSymbol: false, // 存在legend时显示
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: imageDom,
                        borderColor: '#0227ad',
                        borderWidth: 3,
                    },
                    emphasis: {
                        disabled: true,
                        areaColor: '#2B91B7'
                    }
                },
                animationDurationUpdate: 0,
                data: []
            }
        ]
    }
}