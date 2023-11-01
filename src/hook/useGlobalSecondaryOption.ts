import { computed, toRaw, markRaw, type Ref, type ComputedRef } from 'vue'
import type { IDataMapType, componentType } from '@/type'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/select/style/css'
import { type InputInstance, ElInput, ElSelect } from 'element-plus'
interface IKey<T> extends Partial<InputInstance> {
  key: keyof T
}

interface ISearchList<T> {
  component: string
  options?: Array<any>
  componentOptions: IKey<T>
}

interface IOptions<T> {
  title: string
  searchList: Array<ISearchList<T>>
  searchFn: (params: T) => Promise<void>
  clickFn: (row: any, column: any) => void
  total: ComputedRef<number>
}

export function useGlobalSecondaryOption(
  params: Ref<any>,
  dataList: Ref<Array<any>>,
  map: IDataMapType<typeof dataList.value[number]>,
  options: IOptions<typeof params.value>
) {
  const { title, searchList, searchFn, clickFn, total } = options
  return computed(() => {
    return {
      title,
      params: params.value,
      searchOptions: {
        searchList: searchList.map((item) => {
          const k = item.componentOptions.key
          return {
            component: item.component === 'input' ? markRaw(ElInput) : markRaw(ElSelect),
            options: item.options,
            componentOptions: {
              ...item.componentOptions,
              modelValue: params.value[k],
              'onUpdate:modelValue': (value: any) => {
                params.value[k] = value
              }
            }
          }
        }),
        searchFn() {
          searchFn(toRaw(params as any))
        }
      },
      listOptions: {
        dataList,
        mapList: map,
        clickFn
      },
      pagerOptions: {
        total: total.value,
        pageSize: 10
      }
    }
  })
}
