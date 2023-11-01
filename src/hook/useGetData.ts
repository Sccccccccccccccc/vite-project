import type { Ref } from 'vue'
import { formatDate } from '@/utils/date'
import { percentage } from '@/utils/unit'
import type {
  IDataMapType,
  IReturnDataMapType,
  IDirListData,
  IGetDataMap,
  IList,
  componentType
} from '@/type'
export function useGetData(
  list: Ref<any>,
  dataMap: IDataMapType<typeof list.value>,
  name?: string,
  dirList?: Ref<IDirListData>
): IReturnDataMapType<typeof list.value>
export function useGetData(
  list: Ref<Array<any>>,
  dataMap: IGetDataMap<typeof list.value[number]>,
  name?: string
): IReturnDataMapType<typeof list.value>
// 格式化数据 cai
export function useGetData(
  list: Ref<any> | Ref<Array<any>>,
  dataMap: IDataMapType<typeof list.value> | IGetDataMap<typeof list.value>,
  name: string = 'title',
  dirList?: Ref<IDirListData>
): IReturnDataMapType<typeof list.value> {
  const listValue = list.value
  if (Array.isArray(listValue)) {
    const map = dataMap as IGetDataMap<typeof listValue>
    return listValue.map((item) => {
      const title = item[map.titleKey]
      let params = undefined
      if (map.paramsKey) {
        params = item[map.paramsKey]
      }
      const value = item[map.valueKey]
      return {
        [name]: title,
        value,
        params,
        ...dataMap
      }
    })
  } else {
    const map = dataMap as IDataMapType<typeof listValue>
    let res = map.map((item) => {
      let params
      let value = listValue[item.key]
      const list = (listValue.list as Array<IList>)?.filter((item) => item.num) || []
      let vItem = list.find((r) => r.name === item.title)
      if (vItem && vItem.num) {
        value = vItem.num
      }
      if (dirList && !vItem) {
        const c = dirList.value.find(
          (x) => x.dictLabel === item.dictLabel || x.dictLabel === item.title
        )
        if (c) {
          params = c.dictValue
        }
      }
      if (item.dirList) {
        const r = item.dirList.find((k) => +k.dictValue === value)
        if (r) {
          value = r.dictLabel
        }
      }
      if (item.format) {
        value = formatDate(item.format, value)
      }
      return {
        [name]: item.title,
        value,
        params,
        ...item
      }
    })
    res.forEach((r) => {
      if (r.percent) {
        const keyArr = r.percent
        const v = res.find((i) => i.key === keyArr[0])?.value
        const t = res.find((i) => i.key === keyArr[1])?.value
        r.value = percentage(v, t) + '%'
      }
    })
    const isTree = res.every((r) => r.id && r.parent_id)
    if (isTree) {
      res = arrayToTree(res, 0)
    }
    return res
  }
}

function arrayToTree(list: Array<any>, root: number) {
  const result = [] // 用于存放结果
  const map: componentType = {} // 用于存放 list 下的节点
  // 1. 遍历 list，将 list 下的所有节点以 id 作为索引存入 map
  for (const item of list) {
    map[item.id] = { ...item } // 浅拷贝
  }
  // 2. 再次遍历，将根节点放入最外层，子节点放入父节点
  for (const item of list) {
    // 3. 获取节点的 id 和 父 id
    const { id, parent_id } = item // ES6 解构赋值
    // 4. 如果是根节点，存入 result
    if (item.parent_id === root) {
      result.push(map[id])
    } else {
      // 5. 反之，存入到父节点
      map[parent_id].children
        ? map[parent_id].children.push(map[id])
        : (map[parent_id].children = [map[id]])
    }
  }
  // 将结果返回
  return result
}
