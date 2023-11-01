import type { IDataMapType } from '@/type'
export function useTertiaryOption(
  dataList: Array<any> = [],
  map: IDataMapType<any> = [],
  type?: string
) {
  if (type === 'type-1') {
    return dataList.map((i) =>
      map.map((k) => ({
        ...k,
        value: i[k.key]
      }))
    )
  } else {
    const newArr = map.map((i) =>
      dataList.map((k) => ({
        ...i,
        value: k[i.key]
      }))
    )
    const length = newArr.length
    if (newArr.length < 5) {
      newArr.length = 5
      newArr.fill(
        [
          {
            value: '',
            title: '',
            key: ''
          }
        ],
        length,
        5
      )
    }
    return newArr
  }
}
