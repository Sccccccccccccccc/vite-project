import { defineStore } from 'pinia'
import { session, local } from '@/utils/storage'
import { Theme } from '@/constant'
export interface IHome {
  loading: boolean
  showBigMap: boolean
  theme: Theme
}

export const useHomeStore = defineStore('home', {
  state: (): IHome => ({
    loading: true,
    showBigMap: !!session.get('SHOW_BIG_MAP') || false,
    theme: local.get('THEME') || Theme.TYPE_1
  }),
  getters: {},
  actions: {
    setLoading(flag:boolean){
      this.loading = flag
    },
    setShowBigMap(flag: boolean) {
      this.showBigMap = flag
      session.set('SHOW_BIG_MAP', flag)
    },
    setTheme(type: Theme) {
      this.theme = type
      local.set('THEME', type)
    }
  }
})
