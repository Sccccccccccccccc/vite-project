import { defineStore } from 'pinia'
import { setInitialData } from '@/utils'
import {
  getPersonAndEvent,
  getDirList,
  getIndustryList,
  getPartyList,
  getPingList,
  getDeviceList,
  getPassList,
  getHeaderList,
  getLiveList,
  getLivePersonList,
  getHouseEnterList
} from '@/service'
import type {
  IOptions,
  ISecPersonData,
  ISecIndustryData,
  ISecPartyData,
  ISecPingData,
  ISecDeviceData,
  ISecPassData,
  ISecHeaderData,
  ISecLiveData,
  ISecLivePersonData,
  ISecHouseEnterData,
  ISecPersonList,
  ISecIndustryList,
  ISecPartyList,
  ISecPingList,
  ISecDeviceList,
  ISecPassList,
  ISecHeaderList,
  ISecLiveList,
  ISecLivePersonList,
  ISecHouseEnterList
} from '@/type'
import {
  basePersonAndEventParams,
  baseIndustryParams,
  basePartyParams,
  basePingParams,
  baseDeviceParams,
  basePassParams,
  baseHeaderParams,
  baseLiveParams,
  baseLivePersonParams,
  baseHouseEnterParams
} from '@/service/modules/secondary_list/baseParams'
import type {} from '@/service/modules/type'

export interface secondaryListType {
  showSecondaryList: boolean
  curListOptions: IOptions
  secPersonAndEventParams: typeof basePersonAndEventParams
  secIndustryParams: typeof baseIndustryParams
  secPartyParams: typeof basePartyParams
  secPingParams: typeof basePingParams
  secDeviceParams: typeof baseDeviceParams
  secPassParams: typeof basePassParams
  secHeaderParams: typeof baseHeaderParams
  secLiveParams: typeof baseLiveParams
  secLivePersonParams: typeof baseLivePersonParams
  secHouseEnterParams: typeof baseHouseEnterParams
  secPersonAndEvent: ISecPersonData
  secIndustry: ISecIndustryData
  secParty: ISecPartyData
  secPing: ISecPingData
  secDevice: ISecDeviceData
  secPass: ISecPassData
  secHeader: ISecHeaderData
  secLive: ISecLiveData
  secLivePerson: ISecLivePersonData
  secHouseEnter: ISecHouseEnterData
}

export const useSecondaryListStore = defineStore('secondaryList', {
  state: (): secondaryListType => ({
    showSecondaryList: false,
    curListOptions: {
      title: '',
      listOptions: {
        config: {}
      },
      searchOptions: {
        searchList: [],
        searchFn() {}
      },
      pagerOptions: {
        total: 0,
        pageSize: 9
      }
    } as unknown as IOptions,
    secPersonAndEventParams: { ...basePersonAndEventParams },
    secIndustryParams: { ...baseIndustryParams },
    secPartyParams: { ...basePartyParams },
    secPingParams: { ...basePingParams },
    secDeviceParams: { ...baseDeviceParams },
    secPassParams: { ...basePassParams },
    secHeaderParams: { ...baseHeaderParams },
    secLiveParams: { ...baseLiveParams },
    secLivePersonParams: { ...baseLivePersonParams },
    secHouseEnterParams: { ...baseHouseEnterParams },
    secPersonAndEvent: {} as ISecPersonData,
    secIndustry: {} as ISecIndustryData,
    secParty: {} as ISecPartyData,
    secPing: {} as ISecPingData,
    secDevice: {} as ISecDeviceData,
    secPass: {} as ISecPassData,
    secHeader: {} as ISecHeaderData,
    secLive: {} as ISecLiveData,
    secLivePerson: {} as ISecLivePersonData,
    secHouseEnter: {} as ISecHouseEnterData
  }),
  getters: {
    personAndEventList: (state) =>
      state.secPersonAndEvent.list?.map((item) => setInitialData<ISecPersonList>(item, 'string')) ||
      [],
    industryList: (state) =>
      state.secIndustry.list?.map((item) => setInitialData<ISecIndustryList>(item, 'string')) || [],
    partyList: (state) =>
      state.secParty.list?.map((item) => setInitialData<ISecPartyList>(item, 'string')) || [],
    pingList: (state) =>
      state.secPing.list?.map((item) => setInitialData<ISecPingList>(item, 'string')) || [],
    deviceList: (state) =>
      state.secDevice.list?.map((item) => setInitialData<ISecDeviceList>(item, 'string')) || [],
    passList: (state) =>
      state.secPass.list?.map((item) => setInitialData<ISecPassList>(item, 'string')) || [],
    headerList: (state) =>
      state.secHeader.list?.map((item) => setInitialData<ISecHeaderList>(item, 'string')) || [],
    liveList: (state) =>
      state.secLive.list?.map((item) => setInitialData<ISecLiveList>(item, 'string')) || [],
    livePersonList: (state) =>
      state.secLivePerson.list?.map((item) => setInitialData<ISecLivePersonList>(item, 'string')) ||
      [],
    houseEnterList: (state) =>
      state.secHouseEnter.list?.map((item) => setInitialData<ISecHouseEnterList>(item, 'string')) ||
      []
  },
  actions: {
    async getPersonAndEvent() {
      const res = await getPersonAndEvent(this.secPersonAndEventParams)
      this.secPersonAndEvent = res
    },
    async getDirList(params: string) {
      return await getDirList(params)
    },
    async getIndustryList() {
      const res = await getIndustryList(this.secIndustryParams)
      this.secIndustry = res
    },
    async getPartyList() {
      const res = await getPartyList(this.secPartyParams)
      this.secParty = res
    },
    async getPingList() {
      const res = await getPingList(this.secPingParams)
      this.secPing = res
    },
    async getDeviceList() {
      const res = await getDeviceList(this.secDeviceParams)
      this.secDevice = res
    },
    async getPassList() {
      const res = await getPassList(this.secPassParams)
      this.secPass = res
    },
    async getHeaderList() {
      const res = await getHeaderList(this.secHeaderParams)
      this.secHeader = res
    },
    async getLiveList() {
      const res = await getLiveList(this.secLiveParams)
      this.secLive = res
    },
    async getLivePersonList() {
      const res = await getLivePersonList(this.secLivePersonParams)
      this.secLivePerson = res
    },
    async getHouseEnterList() {
      const res = await getHouseEnterList(this.secHouseEnterParams)
      this.secHouseEnter = res
    }
  }
})
