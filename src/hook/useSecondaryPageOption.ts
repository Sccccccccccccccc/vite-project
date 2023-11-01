import { computed, toRaw, markRaw, type ComputedRef, type Ref } from 'vue'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/select/style/css'
import { type InputInstance, ElInput, ElSelect } from 'element-plus'
import type { IDataMapType, componentType } from '@/type'
import { useDataVOption } from '@/hook/useDataVOption'

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
  clickFn: (item: any) => void
  total: number
}

export function useSecondaryPageOption(
  params: Ref<any>,
  dataList: Ref<Array<any>>,
  map: IDataMapType<typeof dataList.value[number]>,
  options: IOptions<typeof params.value>,
  mapOption?: any
) {
  const { title, searchList, searchFn, clickFn, total } = options
  const config = useDataVOption(dataList, map, mapOption)
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
              modelValue: computed(() => params.value[k]),
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
        config,
        clickFn(item: any) {
          const title = map[item.columnIndex].title
          if (title === '操作') {
            const checkItem = map.find((item) => item.title === '操作')
            const key = checkItem?.key
            const keyArr = checkItem?.keyArr
            const obj: componentType = {}
            if (keyArr?.length) {
              for (let key of keyArr) {
                const value = dataList.value[item.rowIndex][key]
                obj[key as string] = value
              }
              return clickFn(obj)
            }
            if (key) {
              const value = dataList.value[item.rowIndex][key]
              obj.id = value
              clickFn(obj)
            }
          }
        }
      },
      pagerOptions: {
        total,
        pageSize: 9
      }
    }
  })
}
