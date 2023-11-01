import { defineStore } from 'pinia'
import { setInitialData } from '@/utils' //设置请求数据设置为0或''
import { moduleMap } from '@/constant'
import { session, local } from '@/utils/storage'
// console.log(moduleMap)
import {
  getModuleList,
  getPersonOverview,
  getIndustryOverview,
  getHeader,
  getHomePageTop,
  getCountyPartyTopVo,
  getCountyTopData,
  getCountyLaodongTopDataVo,
  getPartyBuilding,
  getPingOverview,
  getDeviceOverview,
  getLiveOverview,
  getPassOverview,
  getDirList,
  getMaShangTiList,
  getHuaSaoCount,
  getActivityCount,
  getMerchantData,
  getCountyActivityCountVo,
  

} from '@/service'
import type {
  IThirdPartyData,
  MODULE_NAME,
  IModuleData,
  IPersonOverviewData,
  IIndustryOverviewData,
  IHeaderData,
  IPartyBuildingData,
  IPingOverviewData,
  IDeviceOverviewData,
  ILiveOverviewData,
  IPassData,
  IDirListData,
  IMaShangTiData,
  IHuaSaoData,
  IActivityData,
  IMerchantData,
  IPovertyData
} from '@/type'
import { basePassParams } from '@/service/modules/village/baseParams'
import type { IPassType } from '@/service/modules/type'
export interface IVillage {
  passParams: IPassType
  villageModuleList: IModuleData
  villagePersonOverview: IPersonOverviewData
  villageIndustryOverview: IIndustryOverviewData
  villageHeader: IHeaderData
  villagePartyBuilding: IPartyBuildingData
  villagePingOverview: IPingOverviewData
  villageDeviceOverview: IDeviceOverviewData
  villageLiveOverview: ILiveOverviewData
  villagePass: IPassData
  villageModuleDir: IDirListData
  villagePersonType: IDirListData
  villageIndustryType: IDirListData
  villageDeviceType: IDirListData
  villageLiveType: IDirListData
  villageMaShangTi: IMaShangTiData
  villageHuaSao: IHuaSaoData
  villageActivity: IActivityData
  villageMerchant: IMerchantData
  
  nationalityDetectionData:any
}
// IPovertyData
export const useVillageStore = defineStore('village', {
  state: (): IVillage => ({
    passParams: basePassParams,
    villageModuleList: [] as IModuleData,
    villagePersonOverview: {} as IPersonOverviewData,
    villageIndustryOverview: [] as IIndustryOverviewData,
    villageHeader: {} as IHeaderData,
    villagePartyBuilding: {} as IPartyBuildingData,
    villagePingOverview: [] as IPingOverviewData,
    villageDeviceOverview: {} as IDeviceOverviewData,
    villageLiveOverview: {} as ILiveOverviewData,
    villagePass: [] as IPassData,
    villageModuleDir: [] as IDirListData,
    villagePersonType: [] as IDirListData,
    villageIndustryType: [] as IDirListData,
    villageDeviceType: [] as IDirListData,
    villageLiveType: [] as IDirListData,
    villageMaShangTi: {} as IMaShangTiData,
    villageHuaSao: {} as IHuaSaoData,
    villageActivity: {} as IActivityData,
    villageMerchant: {} as IMerchantData,
    
    nationalityDetectionData:{} as any,
  }),
  // 计算属性
  getters: {
    forMatModule: (state) => {
      // grid 指上下左右   先过滤上下左右，排序，然后根据module找出对应的字典，再根据字典找出对应的组件名
      // 不同屏也有上下左右？怎么区分不同屏的上下左右（现在就个首页没有分屏）
      return (grid: number) => {
        // console.log(grid)
        return state.villageModuleList
          .filter((item) => item.grid === grid)
          .sort((a, b) => a.sort - b.sort)
          .map((o) => {
            if (state.villageModuleDir.length === 0) return { title: '', module: '' }
            //console.log("全部模块字典",state.villageModuleDir)//找出模块字典
            //console.log("找出模块字典",o.module)//找出模块字典
            const moduleItem = state.villageModuleDir.find((v) => +v.dictValue === o.module)
            //console.log("找出模块字典",moduleItem?.dictValue)
            if(!moduleItem){
              return { title: '', module: '' }
            }
            //console.log("字典map",moduleMap)
            // if(grid==0){
            //   console.log(moduleItem)
            // }
            
            let module : MODULE_NAME;
            // 找出动态组件的name  moduleMap是配置文件里模块Map
            module = moduleMap.find((k) => k.value === +moduleItem!.dictValue)!.title
            //console.log("动态组件的name",module);
                        
            return {
              module
            }
          })
      }
    },
    moduleList: (state) => {
      
      const res = state.villageModuleList.map((o) => {
        if (state.villageModuleDir.length === 0) return { title: '', module: '' }
        const moduleItem = state.villageModuleDir.find((v) => +v.dictValue === o.module)
        let module: MODULE_NAME | undefined
        if (moduleItem) {
          module = moduleMap.find((k) => k.value === +moduleItem.dictValue)?.title
        }
        return {
          title: o.showName,
          module
        }
      })
      return res
    },
    thirdPartyList: (state) => {
      const v = state.villageModuleList.find((item) => item.grid === 5)
      if (v && v.data) {
        return JSON.parse(v.data) as IThirdPartyData
      }
      return [] as IThirdPartyData
    },
    mapList: (state) => {
      return (
        state.villageModuleList.filter((item) => item.grid === 6).sort((a, b) => a.sort - b.sort) ||
        []
      )
    },
    partyBuilding: (state) => state.villagePartyBuilding.partyBuildingOldVo || {},
    roleVoList: (state) => state.villagePartyBuilding.roleVoList || [],
    personOverviewList: (state) => state.villagePersonOverview.list || [],
    tagsCountVoList: (state) => state.villagePersonOverview.tagsCountVoList || [],
    nationalityDetectionDatas: (state) => state.nationalityDetectionData || {},
  },
  actions: {
    async getModuleList() {
      this.villageModuleList = []
      const res = await getModuleList()
      this.villageModuleList = res
    },
    async getPersonOverview() {
      const res = await getPersonOverview()
      this.villagePersonOverview = setInitialData<IPersonOverviewData>(res)
    },
    async getIndustryOverview() {
      const res = await getIndustryOverview({ cityCode: session.get('currentCityCode') })
      this.villageIndustryOverview = res.map((item) =>
        setInitialData<IIndustryOverviewData[number]>(item)
      )
    },

    async getHeader() {
      const res = await getHeader()
      this.villageHeader = setInitialData<IHeaderData>(res)
    },

    async getHomePageTop(params:any) {
      const res = await getHomePageTop(params)
      this.villageHeader = setInitialData<IHeaderData>(res)
    },

    async getCountyPartyTopVo(params:any) {
      const res = await getCountyPartyTopVo(params)
      this.villageHeader = setInitialData<IHeaderData>(res)
    },

    async getCountyTopData(params:any) {
      const res = await getCountyTopData(params)
      this.villageHeader = setInitialData<IHeaderData>(res)
    },

    async getCountyLaodongTopDataVo(params:any) {
      const res = await getCountyLaodongTopDataVo(params)
      this.villageHeader = setInitialData<IHeaderData>(res)
    },
    

    async getPartyBuilding() {
      const res = await getPartyBuilding()
      this.villagePartyBuilding = res
    },
    async getPingOverview() {
      const res = await getPingOverview()
      this.villagePingOverview = res.map((item) => setInitialData<IPingOverviewData[number]>(item))
    },
    async getDeviceOverview() {
      const res = await getDeviceOverview()
      this.villageDeviceOverview = setInitialData<IDeviceOverviewData>(res)
    },

    async getLiveOverview() {
      const res = await getLiveOverview()
      this.villageLiveOverview = setInitialData<ILiveOverviewData>(res)
    },

    async getPassOverview() {
      const res = await getPassOverview(this.passParams)
      this.villagePass = res.map((item) =>
        setInitialData<IPassData[number]>(item, 'number', ['date'])
      )
    },
    async getScreenModule() {
      const res = await getDirList('sys_screen_module')
      this.villageModuleDir = res
    },
    async getPersonType() {
      const res = await getDirList('sys_screen_person_type')
      this.villagePersonType = res
    },
    async getIndustryType() {
      const res = await getDirList('sys_Industry_type')
      this.villageIndustryType = res
    },
    async getDeviceType() {
      const res = await getDirList('sys_device_type')
      this.villageDeviceType = res
    },
    async getLiveType() {
      const res = await getDirList('sys_live_hourse_villa_type')
      this.villageLiveType = res
    },
    async getMaShangTiList() {
      const res = await getMaShangTiList()
      this.villageMaShangTi = res
    },
    async getHuaSaoCount() {
      const res = await getHuaSaoCount()
      this.villageHuaSao = res
    },
    async getActivityCount() {
      const res = await getActivityCount({ cityCode: session.get('currentCityCode') })
      res.best = res.best + '%'
      this.villageActivity = res
    },
    async getCountyActivityCountVo() {
      const res = await getCountyActivityCountVo({ cityCode: session.get('currentCityCode') })
      res.best = res.best + '%'
      this.villageActivity = res
    },
    async getMerchantData() {
      const res = await getMerchantData({ cityCode: session.get('currentCityCode') })
      this.villageMerchant = res
    },

    
   

    

    
  }
})
