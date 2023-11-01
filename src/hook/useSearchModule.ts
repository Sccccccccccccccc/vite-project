import { toRefs, computed } from 'vue'
import { moduleMap } from '@/constant'
import type { MODULE_NAME, IModule } from '@/type'
import { useVillageStore } from '@/store/village'
const villageStore = useVillageStore()
const { villageModuleList } = toRefs(villageStore)

// 组合式函数 复用公共任务的逻辑  返回一个过滤的villageModuleList  计算属性

export function useSearchModule(title: MODULE_NAME, v: keyof IModule = 'showName') {
  return computed(() => {
    const value = moduleMap.find((item) => item.title === title)?.value
    return villageModuleList.value.find((item) => item.module === value)?.[v] ?? ''
  })
}
