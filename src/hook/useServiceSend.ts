import { onUnmounted } from 'vue'
import type { IServiceType } from '@/type'
export function useServiceSend(
  service: Array<IServiceType>,
  time: number = 60000000,
  immediate: boolean = false
) {
  if (immediate) {
    
    service.forEach((fn) => fn && fn())
    
  }
  const timer = setInterval(() => {
    service.forEach((fn) => fn && fn())
  }, time)
  return timer
}
