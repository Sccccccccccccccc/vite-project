import { ref, nextTick } from 'vue'

export default function useReload() {
  const isRouterAlive = ref(true)
  const reload = () => {
    isRouterAlive.value = false
    nextTick(() => {
      isRouterAlive.value = true
    })
  }
  return {
    isRouterAlive,
    reload
  }
}
