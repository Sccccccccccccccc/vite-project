import { globalButtonMap } from '@/constant'
import type { Ref } from 'vue'
import type { IToggleButton, IMapImgType } from '@/type'

// 声明WeakMap
export const toggleButtonMap = new WeakMap<
  IMapImgType<number>,
  Map<keyof IToggleButton, Set<any>>
>()
// 给WeakMap添加以globalButtonMap元素为key,空map为值
globalButtonMap.forEach((r) => {
  const toggleFn = new Map<keyof IToggleButton, any>()
  toggleButtonMap.set(r, toggleFn)
})
// 返回个方法对象
export function useGlobalButtonMap(type: number) {
  // 根据类型从constant 找出对应类型的对象 WeakMap的key
  const globalButton = globalButtonMap.find((r) => r.value === type)
  // 根据key找出weakMap的值map
  const globalButtonOptions = toggleButtonMap.get(globalButton as any)
  return {
    get(key: keyof IToggleButton) {
      return globalButtonOptions?.get(key)
    },
    set(key: keyof IToggleButton, options: any) {
      if (globalButtonOptions) {
        // 判断有没有key
        if (!globalButtonOptions.has(key)) {
          // 根据key设置一个空set
          globalButtonOptions!.set(key, new Set())
        }
        // 拿出这个空set
        const getButtonFns = globalButtonOptions.get(key)
        // 参数是个数组，就把元素丢进 空set
        if (Array.isArray(options)) {
          options.forEach((r) => {
            getButtonFns?.add(r)
          })
        } else {
          getButtonFns?.add(options)
        }
        return true
      } else {
        return false
      }
    },
    save(key: keyof IToggleButton, v?: Ref<any>) {
      if (globalButtonOptions && globalButtonOptions.get(key)) {
        if (v) {
          for (let r of globalButtonOptions.get(key) as any) {
            v.value = r
          }
        }
      }
    },
    getFns(key: keyof IToggleButton, params?: any) {
      const fns: Array<any> = []
      if (globalButtonOptions && globalButtonOptions.get(key)) {
        globalButtonOptions.get(key)?.forEach((fn) => fns.push(fn(params)))
      }
      return fns
    },
    getOption(key: keyof IToggleButton) {
      let options: any
      if (globalButtonOptions && globalButtonOptions.get(key)) {
        globalButtonOptions.get(key)?.forEach((r) => {
          options = r
        })
      }
      return options
    }
  }
}
