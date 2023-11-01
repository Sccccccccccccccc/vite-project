import { defineStore } from 'pinia'
import { toRefs } from 'vue'
import { setInitialData } from '@/utils'
import { globalButtonMap } from '@/constant'
import { useVillageStore } from '@/store/village'
import { useMapStore } from '@/store/map'
import type { useGlobalMultilevel } from '@/hook/useGlobalMultilevel'
import type { useGlobalSecondaryOption } from '@/hook/useGlobalSecondaryOption'
import type { ISearchOption } from '@/type'
import {
  getEnterOverview,
  getMerchanOverview,
  getRentedHouseOverview,
  getEnterList,
  getHealthPatrolList,
  getMerchantList,
  getHouseProfileList,
  getRoomDataList,
  getHouseLiverList
} from '@/service'
import type {
  IEnterList,
  IEnterOverviewData,
  IRentedHouseOverviewData,
  IMerchanOverviewData,
  IEnterListData,
  IHealthPatrolListData,
  IMerchantListData,
  IHouseProfileListData,
  IRoomDataListData
} from '@/type'
import {
  baseOverviewListParams,
  baseHealthPatrolListParams,
  baseHouseProfileListParams,
  baseRoomDataListParams
} from '@/service/modules/global/baseParams'
const villageStore = useVillageStore()
const mapStore = useMapStore()
const { mapList } = toRefs(villageStore)
const { screenApp } = toRefs(mapStore)
export interface IGlobal {
  curShowDetails: Array<any>
  handleButtonClick: (type: number) => void
  searchOptions: () => ISearchOption | null
  mapDisplay: () => any
  globalSecondaryOptions: ReturnType<typeof useGlobalSecondaryOption>
  showTooltip: boolean
  showGlobalSecondary: boolean
  showGlobalMultilevelList: Array<{
    options: ReturnType<typeof useGlobalMultilevel>
  }>
  globalEnterParam: typeof baseOverviewListParams
  globalHealthPatrolParam: typeof baseHealthPatrolListParams
  globalMerchantParam: typeof baseOverviewListParams
  globalHouseProfileParam: typeof baseHouseProfileListParams
  globalRoomDateParam: typeof baseRoomDataListParams
  globalHouseLiverParam: typeof baseRoomDataListParams
  globalEnterOverview: IEnterOverviewData
  globalRentedHouseOverview: IRentedHouseOverviewData
  globalMerchanOverview: IMerchanOverviewData
  globalEnterList: IEnterListData
  globalHealthPatrolList: IHealthPatrolListData
  globalMerchantList: IMerchantListData
  globalHouseProfileList: IHouseProfileListData
  globalRoomDateList: IRoomDataListData
  globalHouseLiverList: IRoomDataListData
}

export const useGlobalStore = defineStore('global', {
  state: (): IGlobal => ({
    curShowDetails: [],
    handleButtonClick: function () {},
    searchOptions: () => null,
    mapDisplay: () => null,
    globalSecondaryOptions: {
      title: '',
      listOptions: {
        dataList: {
          value: []
        }
      },
      searchOptions: {
        searchList: [],
        searchFn() {}
      },
      pagerOptions: {
        total: 0,
        pageSize: 10
      }
    } as unknown as ReturnType<typeof useGlobalSecondaryOption>,
    showTooltip: false,
    showGlobalSecondary: false,
    showGlobalMultilevelList: [],
    globalEnterParam: { ...baseOverviewListParams },
    globalHealthPatrolParam: { ...baseHealthPatrolListParams },
    globalMerchantParam: { ...baseOverviewListParams },
    globalHouseProfileParam: { ...baseHouseProfileListParams },
    globalRoomDateParam: { ...baseRoomDataListParams },
    globalHouseLiverParam: { ...baseRoomDataListParams },
    globalEnterOverview: {} as IEnterOverviewData,
    globalRentedHouseOverview: {} as IRentedHouseOverviewData,
    globalMerchanOverview: {} as IMerchanOverviewData,
    globalEnterList: {} as IEnterListData,
    globalHealthPatrolList: {} as IHealthPatrolListData,
    globalMerchantList: {} as IMerchantListData,
    globalHouseProfileList: {} as IHouseProfileListData,
    globalRoomDateList: {} as IRoomDataListData,
    globalHouseLiverList: {} as IRoomDataListData
  }),
  getters: {
    globalButtonList: () => {
      const list = mapList.value.map((o) => {
        const res = globalButtonMap.find((r) => r.title === o.showName)
        return { ...res, ...o }
      })
      const res = globalButtonMap.find((r) => r.value === -1)
      list.unshift({ ...res, ...screenApp.value } as any)
      return list
    },
    enterList: (state) =>
      state.globalEnterList.list?.map((item) => setInitialData<IEnterList>(item, 'string')) || [],
    healthPatrolList: (state) =>
      state.globalHealthPatrolList.list?.map((item) =>
        setInitialData<IEnterList>(item, 'string')
      ) || [],
    merchantList: (state) =>
      state.globalMerchantList.list?.map((item) => setInitialData<IEnterList>(item, 'string')) ||
      [],
    houseProfileList: (state) =>
      state.globalHouseProfileList.list?.map((item) =>
        setInitialData<IEnterList>(item, 'string')
      ) || [],
    roomDateList: (state) =>
      state.globalRoomDateList.list?.map((item) => setInitialData<IEnterList>(item, 'string')) ||
      [],
    houseLiverList: (state) =>
      state.globalHouseLiverList.list?.map((item) => setInitialData<IEnterList>(item, 'string')) ||
      []
  },
  actions: {
    changeTooltip() {
      this.showTooltip = true
      setTimeout(() => {
        this.showTooltip = false
      }, 2000)
    },
    closeMultilevelItem(index: number) {
      this.showGlobalMultilevelList = this.showGlobalMultilevelList.slice(0, index)
    },
    updatePage(curPage: number, index: number) {
      this.showGlobalMultilevelList[index].options.params.pageNum = curPage
    },
    async getEnterOverview() {
      const res = await getEnterOverview()
      this.globalEnterOverview = res
    },
    async getRentedHouseOverview() {
      const res = await getRentedHouseOverview()
      this.globalRentedHouseOverview = res
    },
    async getMerchanOverview() {
      const res = await getMerchanOverview()
      this.globalMerchanOverview = res
    },
    async getEnterList() {
      const res = await getEnterList(this.globalEnterParam)
      this.globalEnterList = res
    },
    async getHealthPatrolList() {
      const res = await getHealthPatrolList(this.globalHealthPatrolParam)
      this.globalHealthPatrolList = res
    },
    async getMerchantList() {
      const res = await getMerchantList(this.globalMerchantParam)
      this.globalMerchantList = res
    },
    async getHouseProfileList() {
      const res = await getHouseProfileList(this.globalHouseProfileParam)
      this.globalHouseProfileList = res
    },
    async getRoomDataList() {
      const res = await getRoomDataList(this.globalRoomDateParam)
      this.globalRoomDateList = res
    },
    async getHouseLiverList() {
      const res = await getHouseLiverList(this.globalHouseLiverParam)
      this.globalHouseLiverList = res
    }
  }
})
