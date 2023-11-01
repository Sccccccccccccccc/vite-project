import yxRequest from '../../index'
import { BASE_DOMAIN } from '../../config'
import type {
  IEnterOverviewData,
  IRentedHouseOverviewData,
  IMerchanOverviewData,
  IEnterListData,
  IHealthPatrolListData,
  IMerchantListData,
  IHouseProfileListData,
  IRoomDataListData
} from '@/type'

import type {
  IOverviewListType,
  IHealthPatrolListType,
  IHouseProfileListType,
  IRoomDataListType
} from './type'

// 地图 企业概况
export const getEnterOverview = function () {
  return yxRequest.get<IEnterOverviewData>({
    url: '/getEnterOverview'
  })
}

// 地图 出租屋概况
export const getRentedHouseOverview = function () {
  return yxRequest.get<IRentedHouseOverviewData>({
    url: '/getRentedHouseOverview'
  })
}

// 地图 商家概况
export const getMerchanOverview = function () {
  return yxRequest.get<IMerchanOverviewData>({
    url: '/getMerchanOverview'
  })
}

// 企业概况 二级
export const getEnterList = function (params: IOverviewListType) {
  return yxRequest.get<IEnterListData>({
    url: '/getEnterList',
    params
  })
}

// 地图概况 平安巡查 二级
export const getHealthPatrolList = function (params: IHealthPatrolListType) {
  return yxRequest.get<IHealthPatrolListData>({
    url: '/getHealthPatrolList',
    params
  })
}

// 商家概况 二级
export const getMerchantList = function (params: IOverviewListType) {
  return yxRequest.get<IMerchantListData>({
    url: '/getMerchantList',
    params
  })
}

// 出租屋概况 二级
export const getHouseProfileList = function (params: IHouseProfileListType) {
  return yxRequest.get<IHouseProfileListData>({
    url: '/getHouseProfileList',
    params
  })
}

// 出租屋 二级
export const getRoomDataList = function (params: IRoomDataListType) {
  return yxRequest.get<IRoomDataListData>({
    url: '/getRoomDataList',
    params
  })
}

// 出租屋 三级
export const getHouseLiverList = function (params: IRoomDataListType) {
  return yxRequest.get<IRoomDataListData>({
    url: '/getHouseLiverList',
    params
  })
}
