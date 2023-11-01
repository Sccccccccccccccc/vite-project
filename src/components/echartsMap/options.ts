import * as echarts from 'echarts'
import 'echarts-gl'; 
import { onMounted, ref } from 'vue';
import axios from 'axios';



// 定义echarts方法
const chartMap = async () => {
    // 初始化dom
    const myChart = echarts.init(
        <HTMLElement>document.getElementById("mapEchart")
    );
    // 初始化map
    initMap(myChart, "map", "100000");
    // 添加点击事件
    myChart.on("click", (e: any) => {
        console.log(e);
        const newName: string = e.name;
        if (e.value.level === "district") return alert("该地区已经无法下钻");
        // 添加历史记录
        historyMapData.value.push(e.value);
        // 初始化地图
        initMap(myChart, newName, e.value.adcode);
    });
    //让可视化地图跟随浏览器大小缩放
    window.addEventListener("resize", () => {
        myChart.resize();
    });
};

// 初始化图表
const initMap = async (
    chartDOM: echarts.ECharts,
    geoName: string,
    adcode: string
) => {
    // 清除echarts实例
    chartDOM.clear();
    // 请求map的json
    const mapData = await getMapJSON(adcode, geoName);
    // 图表配置项
    const option = getOption(geoName, mapData);
    // 渲染配置
    chartDOM.setOption(option);
};


// 请求地图json数据，并过滤成地图data配置项
const getMapJSON = async (adcode: string = "100000", geoName: string) => {
    const res = await axios.get(
        `https://geo.datav.aliyun.com/areas_v2/bound/${adcode}_full.json`
    );
    console.log("res", res);

    // 重新注册地图
    echarts.registerMap(geoName, <any>res.data);
    // 过滤json数据

    const mapData = res.data.features.map((item: any) => {
        return {
            value: item.properties,
            name: item.properties.name,
        };
    });

    return mapData;
};

// 图表生成配置项
const getOption = (geoName: string, mapData: any) => {
    // 图表配置项
    const option = {
        geo3D: {
            zlevel: -100,
            show: true,
            map: geoName, // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同
            regionHeight: 2,
            shading: "realistic",
            realisticMaterial: {
                detailTexture: "./1.png",
            },
            itemStyle: {
                borderWidth: 1.5,
                borderColor: "#5FB9DA",
                color: "#6597D0",
                opacity: 1,
            },
            label: {
                show: true, // 是否显示标签。
                textStyle: {
                    color: "#fff", // 地图初始化区域字体颜色
                    fontSize: 40,
                },
                formatter: (e: any) => {
                    return ` ${e.name} `;
                },
            },
        },
        series: [
            {
                zlevel: -10,
                regionHeight: 2,
                type: "map3D",
                map: geoName, // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同
                data: mapData, //这里比较重要：获得过滤后的data，这样点击事件时就能获得这个data的值
                emphasis: {
                    label: { show: false },
                    itemStyle: {
                        color: "transparent",
                    },
                },
                shading: "realistic",
                realisticMaterial: {
                    detailTexture: "./4.png",
                    textureTiling: 2,
                },
                itemStyle: {
                    color: "transparent",
                },
            },
        ],
    };
    return option;
};


type HistoryData = {
    name: string;
    adcode: string | undefined;
};
// 地图下钻历史记录
const historyMapData = ref<HistoryData[]>([{ name: "map", adcode: "100000" }]);
// 返回上级地图
const backMap = () => {
    const myChart = echarts.init(
        <HTMLElement>document.getElementById("mapEchart")
    );
    // 去除当前的地图信息
    historyMapData.value.pop();
    const len = historyMapData.value.length;
    // 获取上一级的地图信息
    const newdata = historyMapData.value[len - 1];
    // 重新渲染地图
    initMap(myChart, newdata?.name || "map", newdata?.adcode || "100000");
};

onMounted(() => {
    // 挂载echart
    chartMap();
});
