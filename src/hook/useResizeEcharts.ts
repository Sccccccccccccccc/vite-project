import { watchEffect, onMounted, onUnmounted } from 'vue'
import type { ComputedRef } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill';
type echartsType = echarts.ECharts
export function useResizeEcharts(
  elementId: string,
  echartsOption: ComputedRef<any>,
  fn?: (myChart: echartsType) => void
) {
  onUnmounted(() => {
    myChart.dispose()
  })
  onMounted(() => {
    chartPanel = document.getElementById(elementId)
    if (chartPanel) {
      myChart = echarts.init(chartPanel as HTMLElement)
      fn && fn(myChart)
      myChart.setOption(echartsOption.value)
    }
  })
  let chartPanel: HTMLElement | null
  let myChart: echartsType
  watchEffect(() => {
    const option = echartsOption.value
    if (myChart) {
      fn && fn(myChart)
      myChart.setOption(option)
    }
  })
  addEventListener('resize', () => {
    myChart.resize()
  })
}
