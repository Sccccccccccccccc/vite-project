import { computed, toRaw, type Ref, type CSSProperties, type ComputedRef } from 'vue'
import type { IDataMapType } from '@/type'
interface IOptions<T> {
  curPage: any
  title: string
  searchFn: (params: T) => Promise<void>
  style: CSSProperties
  clickFn: (item: any, index: number) => void
  total: any
}

export function useGlobalMultilevel(
  params: Ref<any>,
  dataList: any,
  map: IDataMapType<typeof dataList.value[number]>,
  options: IOptions<typeof params.value>
) {
  const { title, searchFn, clickFn, total, style, curPage } = options
  return {
    curPage,
    title,
    params: params.value,
    style,
    searchOptions: {
      searchFn() {
        searchFn(toRaw(params as any))
      }
    },
    listOptions: {
      config: {
        dataList,
        mapList: map
      },
      clickFn
    },
    pagerOptions: {
      total,
      pageSize: 4
    }
  }
}
