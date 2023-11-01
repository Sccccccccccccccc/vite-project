import yxRequest from '../../index'
import type {
  ISecPersonData,
  ISecIndustryData,
  ISecPartyData,
  ISecPingData,
  ISecDeviceData,
  ISecPassData,
  ISecHeaderData,
  ISecLiveData,
  ISecLivePersonData,
  ISecHouseEnterData
} from '@/type'
import type {
  IPersonAndEventType,
  IIndustryType,
  IPartyListType,
  IPingListType,
  IDeviceListType,
  IPassListType,
  IHeaderListType,
  ILiveListType,
  ILivePersonListType,
  IHouseEnterListType
} from './type'
// 人口列表
export const getPersonAndEvent = function (params: IPersonAndEventType) {
  return yxRequest.get<ISecPersonData>({
    url: '/getPersonList',
    params
  })
}

// 产业概况列表
export const getIndustryList = function (params: IIndustryType) {
  return yxRequest.get<ISecIndustryData>({
    url: '/getIndustryList',
    params
  })
}

// 党建引领列表
export const getPartyList = function (params: IPartyListType) {
  return yxRequest.get<ISecPartyData>({
    url: '/getPartyList',
    params
  })
}

// 平安建设列表、顶部事件列表
export const getPingList = function (params: IPingListType) {
  return yxRequest.get<ISecPingData>({
    url: '/getPingList',
    params
  })
}

// 设备概况列表、顶部设备列表
export const getDeviceList = function (params: IDeviceListType) {
  return yxRequest.get<ISecDeviceData>({
    url: '/getDeviceList',
    params
  })
}

// 通行统计列表
export const getPassList = function (params: IPassListType) {
  return yxRequest.get<ISecPassData>({
    url: '/getPassList',
    params
  })
}

// 获取顶部列表 户籍、楼幢
export const getHeaderList = function (params: IHeaderListType) {
  return yxRequest.get<ISecHeaderData>({
    url: '/getHeaderList',
    params
  })
}

// 居住统计列表
export const getLiveList = function (params: ILiveListType) {
  return yxRequest.get<ISecLiveData>({
    url: '/getLiveList',
    params
  })
}

// 居住统计列表 房东租客
export const getLivePersonList = function (params: ILivePersonListType) {
  return yxRequest.get<ISecLivePersonData>({
    url: '/getLivePersonList',
    params
  })
}

// 顶部 企业、商家列表 二级
export const getHouseEnterList = function (params: IHouseEnterListType) {
  return yxRequest.get<ISecHouseEnterData>({
    url: '/getHouseEnterList',
    params
  })
}
