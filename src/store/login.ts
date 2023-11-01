import { defineStore } from 'pinia'
import { screenlogin } from '@/service'
import type { ILogin as ILoginType } from '@/service/modules/type'
export interface ILogin {}

export const useLoginStore = defineStore('login', {
  state: (): ILogin => ({}),
  getters: {},
  actions: {
    async screenlogin(params: ILoginType) {
      await screenlogin(params)
    }
  }
})
