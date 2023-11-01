import { defineStore } from 'pinia'
import { getLastDay } from '@/utils/date'
import {
  getPersonDetails,
  getHouseListDetails,
  getLiverDetails,
  getEnterpriseById,
  getMerchantDetails,
  getEventDetails,
  getDeviceDetails
} from '@/service'
import type {
  ITerPersonDetailsData,
  ITerOptionsList,
  ITerHouseListDetailsData,
  ITerLiverDetailsData,
  IEnterpriseData as ITerEnterpriseDetailsData,
  ITerMerchantDetailsData,
  ITerEventDetailsData,
  ITerDeviceDetailsData
} from '@/type'
import type { IDetailsType, IMapDetailTypeByTwo } from '@/service/modules/type'

export interface tertiaryDetailsState {
  showTertiaryDetailsList: boolean
  curDataList: ITerOptionsList
  terPersonDetails: ITerPersonDetailsData
  terHouseListDetails: ITerHouseListDetailsData
  terLiverDetails: ITerLiverDetailsData
  terEnterpriseDetails: ITerEnterpriseDetailsData
  terMerchantDetails: ITerMerchantDetailsData
  terEventDetails: ITerEventDetailsData
  terDeviceDetails: ITerDeviceDetailsData
}

export const useTertiaryDetailsStore = defineStore('tertiaryDetails', {
  state: (): tertiaryDetailsState => ({
    showTertiaryDetailsList: false,
    curDataList: [] as ITerOptionsList,
    terPersonDetails: {} as ITerPersonDetailsData,
    terHouseListDetails: {} as ITerHouseListDetailsData,
    terLiverDetails: {} as ITerLiverDetailsData,
    terEnterpriseDetails: {} as ITerEnterpriseDetailsData,
    terMerchantDetails: {} as ITerMerchantDetailsData,
    terEventDetails: {} as ITerEventDetailsData,
    terDeviceDetails: {} as ITerDeviceDetailsData
  }),
  getters: {},
  actions: {
    async getPersonDetails(params: IDetailsType) {
      const res = await getPersonDetails(params)
      this.terPersonDetails = res
    },
    async getHouseListDetails(params: IDetailsType) {
      const res = await getHouseListDetails(params)
      this.terHouseListDetails = res
    },
    async getLiverDetails(params: IDetailsType) {
      const res = await getLiverDetails(params)
      this.terLiverDetails = res
    },
    async getEnterpriseById(params: IMapDetailTypeByTwo) {
      const res = await getEnterpriseById(params)
      res.enterpriseBookList.forEach((r) => {
        r.expirationTime = getLastDay()
      })
      this.terEnterpriseDetails = res
    },
    async getMerchantDetails(params: IDetailsType) {
      const res = await getMerchantDetails(params)
      this.terMerchantDetails = res
    },
    async getEventDetails(params: IDetailsType) {
      const res = await getEventDetails(params)
      this.terEventDetails = res
    },
    async getDeviceDetails(params: IDetailsType) {
      const res = await getDeviceDetails(params)
      this.terDeviceDetails = res
    }
  }
})
