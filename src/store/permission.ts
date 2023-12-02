import { defineStore } from "pinia"
import { getscreenconfig } from "@/service"
import { session, local } from '@/utils/storage'
import type { IPermission as IPermissionType } from "@/service/modules/type"
export interface IPermission { }

export const usePermissionStore = defineStore('permission', {
  // 可以认为 state 是 store 的数据 (data)?
  state: (): any => ({
    screenList: [],
    screenType: '',
    cityCode: '',
    logo: '',
    name: '',
    type: '',
    currenScreenId: '',
    currenCityCode: '',
    currenCity: '',
    screenConfig: {}
  }),
  // getters 是 store 的计算属性 (computed)?
  getters: {},
  // actions 则是方法 (methods)?
  actions: {
    setCurrenScreenId(id: any) {
      this.currenScreenId = id
      local.set('currenScreenId', this.currenScreenId)
    },
    setCurrenCityCode(id: any) {
      this.currenCityCode = id
      local.set('currenCityCode', this.currenCityCode)
    },

    async getscreenconfig(params: IPermissionType) {
      const res = await getscreenconfig(params)
      this.screenConfig = res
      this.currenScreenId = this.screenConfig.screenList[0].id
      local.set('currenScreenId', this.currenScreenId)
      local.set('currenScreenLat', this.screenConfig.screenList[0].lat)
      local.set('currenScreenLon', this.screenConfig.screenList[0].lon)
      local.set('currentType', this.screenConfig.type)
      if (this.screenConfig.zoneId) {
        session.set('zoneId', this.screenConfig.zoneId)
      }
      if (this.screenConfig.cityCode) {
        session.set('parentCityCode', this.screenConfig.cityCode)
        session.set('currentCityCode', this.screenConfig.cityCode)
        session.set('currenCity', this.screenConfig.city)
      }

    }
  }
})