import { toRefs, computed } from 'vue'
import { useVillageStore } from '@/store/village'
import type { MODULE_NAME } from '@/type'
import type { IBaseMap } from '@/components/base-map'
import { BASE_MAP_HEIGHT } from '@/constant'

const villageStore = useVillageStore()
const { moduleList } = toRefs(villageStore)

export function useModuleTitleAndHeight(module: MODULE_NAME, height: string = BASE_MAP_HEIGHT) {
  return computed<IBaseMap>(() => {
    const title = moduleList.value.find((item) => item.module === module)?.title ?? ''
    return {
      height,
      title
    }
  })
}
