import yxRequest from '../../index'
import { BASE_DOMAIN } from '../../config'
import type {
  IMapData,
  IMapScreenJsonData,
  IEnterpriseData,
  IGridData,
  IHouseMapData,
  IHouseDetailsData,
  IBuildingData,
  IAddressListData,
  IListDetailsData,
  IHouseSearchData,
  IWanggeData
} from '@/type'

import type { IMapType, IMapDetailType, IMapDetailTypeByTwo, IHouseMapType } from './type'

// 地图
export const getMap = function (params: IMapType) {
  return yxRequest.get<IMapData>({
    url: '/getMap',
    params
  })
}

// 获取地图json
export const getscreenjson = function (params:any) {
  return yxRequest.get<IMapScreenJsonData>({
    url: '/bigScreen/StBigScreen/getScreenJson',
    baseURL: BASE_DOMAIN,
    params
  })
}

// 获取地图citycode对应的人口统计
export const getResidentsList = function (params:any) {
  return yxRequest.get<any>({
    url: '/bigScreen/countyScreen/getResidentsList',
    baseURL: BASE_DOMAIN,
    params
  })
}

// 获取企业详情
export const getEnterpriseById = function (params: IMapDetailTypeByTwo) {
  return yxRequest.get<IEnterpriseData>({
    url: '/getEnterpriseById',
    params
  })
}

// 获取网格数据
export const getGridData = function () {
  return yxRequest.get<IGridData>({
    url: '/gridData'
  })
}

// 获取出租屋列表
export const getHouseMap = function (params: IHouseMapType) {
  return yxRequest.get<IHouseMapData>({
    url: '/getHouseMap',
    params
  })
}

// 获取出租屋详情
export const getHouseDetails = function (params: IMapDetailTypeByTwo) {
  return yxRequest.get<IHouseDetailsData>({
    url: '/getHouseDetails',
    params
  })
}

// 楼幢详情
export const getBuildingDetails = function (params: IMapDetailType) {
  return yxRequest.get<IBuildingData>({
    url: '/getBuildingDetails',
    params
  })
}

// 楼幢详情 居民列表
export const getListDetails = function (params: IMapDetailType) {
  return yxRequest.get<IListDetailsData>({
    url: '/getListDetails',
    params
  })
}

// 地址列表
export const getAddressList = function (params: IMapDetailType) {
  return yxRequest.get<IAddressListData>({
    url: '/addressList',
    params
  })
}

// 区域列表
export const getCityCodeList = function (params: IMapDetailType) {
  return yxRequest.get<IAddressListData>({
    url: '/bigScreen/countyScreen/getCityCode',
    params,
    baseURL: BASE_DOMAIN
  })
}



// 出租屋搜索
export const getHouseDataMap = function (params: IHouseMapType) {
  return yxRequest.get<IHouseSearchData>({
    url: '/getHouseDataMap',
    params
  })
}

// 地图 网格
export const getWanggeData = function (params: IMapDetailTypeByTwo) {
  return yxRequest.get<IWanggeData>({
    url: '/getWanggeData',
    params
  })
}
