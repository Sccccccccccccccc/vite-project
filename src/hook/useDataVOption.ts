import { watchEffect, computed, shallowRef, type ComputedRef, type Ref } from 'vue'
import type { IDataMapType } from '@/type'

export function useDataVOption(
  dataArr: ComputedRef<Array<any>> | Ref<Array<any>>,
  dataMap: IDataMapType<typeof dataArr.value[number]>,
  options?: any
) {
  let data = shallowRef()

  watchEffect(() => {
    data.value = dataArr.value.map((item: any) =>
      dataMap.map((o) => {
        const title = item[o.key]
        let returnString = `<div>${title}</div>`
        if (o.styleList) {
          const style = o.styleList.find((k) => k.value === title)?.style
          if (style) {
            const color = style.color
            const fontFamily = style.fontFamily
            const fontSize = style.fontSize
            const fontWeight = style.fontWeight
            returnString = `<div style="color:${color};font-family:${fontFamily};font-sizeL${fontSize};font-weight:${fontWeight}">${
              item[o.key]
            }</div>`
          }
        }
        if (o.title === '操作') {
          return `<div class="details-button" >详情</div>`
        } else {
          return returnString
        }
      })
    )
  })
  const header = dataMap.map((item) => item.title)
  const width = Math.floor(1332 / dataMap.length)
  return computed(() => {
    const originOption = {
      header,
      data: data.value,
      align: Array(header.length).fill('center'),
      headerHeight: 55,
      headerBGC: 'rgb(26, 65, 109,0.9)',
      oddRowBGC: 'rgb(5, 36, 67,0.8)',
      evenRowBGC: 'rgb(5, 36, 67,0.8)',
      waitTime: 999999999,
      rowNum: 9,
      columnWidth: Array(header.length).fill(width)
    }
    return { ...originOption, ...options }
  })
}
