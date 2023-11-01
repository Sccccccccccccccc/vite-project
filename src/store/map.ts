import { defineStore } from 'pinia'
import { session } from '@/utils/storage'
import { setInitialData } from '@/utils'
import {
  getMap,
  getscreenjson,
  getResidentsList,
  getDownData,
  getEnterpriseById,
  getGridData,
  getHouseMap,
  getHouseDetails,
  getEventDetails,
  getBuildingDetails,
  getDeviceDetails,
  getAddressList,
  getCityCodeList,
  getListDetails,
  getHouseDataMap,
  getWanggeData
} from '@/service'
import type {
  IMapDetailsOPtions,
  IMapData,
  IMapScreenJsonData,
  IEnterpriseData,
  IGridData,
  IHouseMapData,
  IHouseDetailsData,
  ITerEventDetailsData,
  IBuildingData,
  ITerDeviceDetailsData,
  IAddressListData,
  IListDetailsData,
  IHouseSearchData,
  IWanggeData
} from '@/type'
import { baseMapParams, baseHouseParams } from '@/service/modules/map/baseParams'
import type {
  IMapType,
  IMapDetailType,
  IDetailsType,
  IMapDetailTypeByTwo,
  IHouseMapType
} from '@/service/modules/type'
import { initialData } from '@/components/map-box'
export interface IMapState {
  showMapDetail: boolean
  showBuildingDetail: boolean
  showGridDetail: boolean
  curDetailList: () => IMapDetailsOPtions
  mapParams: IMapType
  mapInstance: any
  houseParams: IHouseMapType
  curId: number
  curResidentIndex: number
  curResidentPage: number
  loading: boolean
  mapEvent: () => void
  setLayers: () => () => void
  mapDetailInstance: HTMLElement | null
  villageMap: IMapData
  villageGrid: IGridData
  villageScreenJson: IMapScreenJsonData
  villageEnterprise: IEnterpriseData
  villageHouseDetails: IHouseDetailsData
  villageHouseMap: IHouseMapData
  villageEvent: ITerEventDetailsData
  villageBuilding: IBuildingData
  villageDevice: ITerDeviceDetailsData
  villageAddress: IAddressListData
  villageList: IListDetailsData
  villageHouseSearchData: IHouseSearchData
  villageWangge: IWanggeData,
  cityCodeList: any
}

export const useMapStore = defineStore('map', {
  state: (): IMapState => ({
    showMapDetail: false,
    showBuildingDetail: false,
    showGridDetail: false,
    curDetailList: () => initialData,
    mapParams: baseMapParams,
    mapInstance: null,
    houseParams: baseHouseParams,
    curId: -1,
    curResidentIndex: 0,
    curResidentPage: 1,
    loading: false,
    setLayers: () => () => null,
    mapEvent: function () {},
    mapDetailInstance: null,
    villageMap: [] as IMapData,
    villageGrid: [] as IGridData,
    villageScreenJson: {} as IMapScreenJsonData,
    villageEnterprise: {} as IEnterpriseData,
    villageHouseDetails: {} as IHouseDetailsData,
    villageHouseMap: {} as IHouseMapData,
    villageEvent: {} as ITerEventDetailsData,
    villageBuilding: {} as IBuildingData,
    villageDevice: {} as ITerDeviceDetailsData,
    villageAddress: [] as IAddressListData,
    cityCodeList: [] as any,
    villageList: {} as IListDetailsData,
    villageHouseSearchData: [] as IHouseSearchData,
    villageWangge: [] as IWanggeData
  }),
  getters: {
    houseVos: (state) => state.villageHouseSearchData || [],
    houseDetailsVos: (state) => state.villageHouseMap.houseDetailsVos || [],
    jsonList: (state) => state.villageList.jsonList || [],
    liverList: (state) => state.villageList.liverList || [],
    screenJsonList: (state) => state.villageScreenJson.screenJsonList || [],
    screenApp: (state) => state.villageScreenJson.screenApp
  },
  actions: {
    setMapParams(type: number) {
      this.mapParams.type = type
      session.set('MAP_TYPE', type)
    },
    async getMap() {
      const res = await getMap(this.mapParams)
      this.villageMap =
        res?.map((item) => setInitialData<IMapData[number]>(item, 'number', ['name'])) || []
      return res
    },
    async getGridData() {
      const res = await getGridData()
      this.villageGrid = res.map((item) =>
        setInitialData<IGridData[number]>(item, 'number', ['wangGeName'])
      )
    },
    async getDownData(grid:any){
      const res = await getDownData({ grid: grid })
      console.log(res)
    },
    async getResidentsList(){
      const res = await getResidentsList({ cityCode: session.get('currentCityCode') });
      // console.log(res.total)
      // session.set('personCount',res.tatal)
      // this.screenJsonList.forEach(item=>{
      //   item.personCount=res.total
      // })
    },
    async getscreenjson() {
      this.getResidentsList()
      const res = await getscreenjson({zoneId:session.get('zoneId')})
      res.screenJsonList.forEach((item) => {
        if (item.jsonData) {
          item.jsonData = JSON.parse(item.jsonData)
        }
      })
      this.villageScreenJson = res
      console.log(this.villageScreenJson)
    },
    async getEnterpriseById(params: IMapDetailTypeByTwo) {
      const res = await getEnterpriseById(params)
      this.villageEnterprise = res
    },
    async getHouseDetails(params: IMapDetailTypeByTwo) {
      const res = await getHouseDetails(params)
      this.villageHouseDetails = res
    },
    async getHouseMap() {
      const res = await getHouseMap(this.houseParams)
      this.villageHouseMap = res
      return res.houseVos
    },
    async getEventDetails(params: IDetailsType) {
      const res = await getEventDetails(params)
      this.villageEvent = res
    },
    async getBuildingDetails(params: IMapDetailType) {
      const res = await getBuildingDetails(params)
      this.villageBuilding = res
    },
    async getDeviceDetails(params: IDetailsType) {
      const res = await getDeviceDetails(params)
      this.villageDevice = res
    },
    async getAddressList(params: IMapDetailType) {
      const res = await getAddressList(params)
      this.villageAddress = res
    },
    async getCityCodeList(params: any) {
      const res = await getCityCodeList(params)
      this.cityCodeList = res
    },
    // 

    async getListDetails(params: IMapDetailType) {
      try {
        this.loading = true
        const res = await getListDetails(params)
        this.villageList = res
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    },

    async getHouseDataMap() {
      const res = await getHouseDataMap(this.houseParams)
      this.villageHouseSearchData = res
      return res
    },

    async getWanggeData(params: IMapDetailTypeByTwo) {
      const res = await getWanggeData(params)
      this.villageWangge = res
    }
  }
})
