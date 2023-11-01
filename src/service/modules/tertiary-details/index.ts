import yxRequest from '../../index'
import type {
  ITerPersonDetailsData,
  ITerHouseListDetailsData,
  ITerLiverDetailsData,
  ITerMerchantDetailsData,
  ITerEventDetailsData,
  ITerDeviceDetailsData
} from '@/type'
import type { IDetailsType } from './type'
// 人口列表
export const getPersonDetails = function (params: IDetailsType) {
  return yxRequest.get<ITerPersonDetailsData>({
    url: '/getPersonDetails',
    params
  })
}

// 出租屋列表详情 三级
export const getHouseListDetails = function (params: IDetailsType) {
  return yxRequest.get<ITerHouseListDetailsData>({
    url: '/getHouseListDetails',
    params
  })
}

// 租客列表详情 三级
export const getLiverDetails = function (params: IDetailsType) {
  return yxRequest.get<ITerLiverDetailsData>({
    url: '/getLiverDetails',
    params
  })
}

// 商家列表详情 三级
export const getMerchantDetails = function (params: IDetailsType) {
  return yxRequest.get<ITerMerchantDetailsData>({
    url: '/getMerchantDetails',
    params
  })
}

// 事件详情 三级
export const getEventDetails = function (params: IDetailsType) {
  return yxRequest.get<ITerEventDetailsData>({
    url: '/getEventDetails',
    params
  })
}

// 设备详情 三级
export const getDeviceDetails = function (params: IDetailsType) {
  return yxRequest.get<ITerDeviceDetailsData>({
    url: '/getDeviceDetails',
    params
  })
}
