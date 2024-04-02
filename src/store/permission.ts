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
    screenConfig: {},
    constant: true,
    mapCenter: [24.6385, 110.6410],
    topSelectorNav: [],
  }),
  // getters 是 store 的计算属性 (computed)?
  getters: {},
  // actions 则是方法 (methods)?
  actions: {
    setCenterLocation(arr: any) { //对应上方下拉框，选择改变地图中心点
      this.mapCenter = arr
      local.set('mapCenter', this.mapCenter)
    },
    setCurrenScreenId(id: any) { //对应上方导航栏，根据currenScreenId跳转页面
      this.currenScreenId = id
      local.set('currenScreenId', this.currenScreenId)
    },
    getCurrenScreenId() {
      this.currenScreenId = local.get('currenScreenId')
      return this.currenScreenId
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

    },

    // 根据screenId获取顶部selector数据
    getTopSelectorNavByScreenId() {
      if (this.currenScreenId == 1) {
        this.topSelectorNav = [
          { id: 1, name: '平乐县', pid: 0, },
          { id: 2, name: '中关圆盘', pid: 1 },
          { id: 3, name: '上关圆盘', pid: 1 },
          { id: 4, name: '黄埔街（中关）', pid: 2 },
          { id: 5, name: '正北街', pid: 3 },
          { id: 6, name: '平乐一小', pid: 5, coordinates: [24.6385, 110.6410], },
          { id: 7, name: '凤凰小区', pid: 5 },
          { id: 8, name: '妇幼保健院', pid: 12 },
          { id: 9, name: '制药厂', pid: 5, coordinates: [24.6438, 110.6467] },
          { id: 10, name: '枫木塘', pid: 4, coordinates: [] },
          { id: 11, name: '民族中学', pid: 10, coordinates: [24.6350, 110.6449] },
          { id: 12, name: '黄埔街（上关）', pid: 3 },
        ]
      }
      if (this.currenScreenId == 3) {
        this.topSelectorNav = [
          { id: 1, name: '平乐', pid: 0, },
          { id: 2, name: '中关圆盘', pid: 1 },
          { id: 3, name: '上关圆盘', pid: 1 },
          { id: 4, name: '黄埔街（中关）', pid: 2 },
          { id: 5, name: '正北街', pid: 3 },
          { id: 6, name: '平乐一小', pid: 5, coordinates: [24.6385, 110.6410], },
          { id: 7, name: '凤凰小区', pid: 5 },
          { id: 8, name: '妇幼保健院', pid: 12 },
          { id: 9, name: '制药厂', pid: 5, coordinates: [24.6438, 110.6467] },
          { id: 10, name: '枫木塘', pid: 4, coordinates: [] },
          { id: 11, name: '民族中学', pid: 10, coordinates: [24.6350, 110.6449] },
          { id: 12, name: '黄埔街（上关）', pid: 3 },
        ]
      }

      return this.topSelectorNav
    }

  }
})