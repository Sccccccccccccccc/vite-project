import { watch, ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type {
  IDataType,
  IDataVOption,
  IDataVFnType,
  fnType,
  IString,
  DataType,
  IHuaSaoType,
  IShowType
} from '@/type'
type allDataListType = IDataType | IHuaSaoType | IShowType
export function useDataVOption<T extends allDataListType, K extends IString>(
  dataArr: Ref<Array<T>> | ComputedRef<Array<T>>,
  dataMap: K,
  options: IDataVOption = {},
  fns: IDataVFnType<T, K> = {}
): ComputedRef<IDataVOption> {
  let data = ref<DataType>()
  watch(dataArr, () => {
    data.value = dataArr.value.map((item) =>
      Object.keys(dataMap).map((key) => {
        const value = item[key]
        const fn = fns[key]
        const commonStyle = `cursor: pointer;`
        let res: fnType = {
          value
        }
        if (fn) {
          res = fn(value, item)
        }
        if (res.html) return res.html
        return `<span style="${commonStyle}${res.styles || ''}">${res.value}</span>`
      })
    )
  })
  const header = Object.values(dataMap)
  return computed(() => {
    console.log(dataArr.value?.length)
    const originOption = {
      header,
      indexHeader: '序号',
      data: data.value,
      index: true,
      columnWidth: [100, 210, 270, 150],
      align: Array(header.length).fill('center'),
      headerHeight: 40,
      rowNum: dataArr.value?.length,
      headerBGC: 'rgba(32, 66, 106, 0.5)',
      oddRowBGC: 'rgba(32,66,106,0.5)',
      evenRowBGC: 'rgba(32,66,106,0)'
    }
    return { ...originOption, ...options }
  })
}
