import { useSecondaryListStore } from '@/store/secondary_list'
import type { IDataMapType } from '@/type'
import { getDir } from '@/utils'
const secondaryListStore = useSecondaryListStore()
export const { getDirList } = secondaryListStore

export async function useDirDataList(map: IDataMapType<any>) {
  const filterMap = map.filter((item) => item.dirParams)
  filterMap.forEach(async (item) => {
    if (item.dirParams) {
      if (Array.isArray(item.dirParams)) {
        if (Array.isArray(item.dirParams[0])) {
          item.dirList = getDir(...(item.dirParams as [Array<string>, number]))
        } else {
          item.dirList = getDir(item.dirParams as Array<string>)
        }
      } else {
        const res = await getDirList(item.dirParams)
        item.dirList = res
      }
    }
  })
}
