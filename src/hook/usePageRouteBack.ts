import { toRefs, type Ref } from 'vue'
import { useGlobalStore } from '@/store/global'
const { curShowDetails } = toRefs(useGlobalStore())

export function usePageRouteBack(showDetail: Ref<boolean>) {
  if (showDetail.value === true) {
    curShowDetails.value.push(showDetail)
    showDetail.value = false
  }
}
