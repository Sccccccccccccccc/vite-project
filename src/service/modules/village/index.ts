import yxRequest from '../../index'
import { BASE_DOMAIN } from '../../config'
import type {
  IPersonOverviewData,
  IIndustryOverviewData,
  IHeaderData,
  IPartyBuildingData,
  IPingOverviewData,
  IDeviceOverviewData,
  ILiveOverviewData,
  IPassData,
  IModuleData,
  IDirListData,
  IMaShangTiData,
  IHuaSaoData,
  IActivityData,
  IMerchantData,
  IPartyAge
} from '@/type'

import type { IPassType } from './type'

//物业管理
export const getRealtyManagement = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getRealtyManagement`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 就业帮扶(display4)
export const getAJobDisplay4 = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getAJobDisplay4`,
    baseURL: BASE_DOMAIN,
    params
  })
}
// 户籍管理
export const getHuManager = function ( params :any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getHuManager`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 人口统计概况
export const getPersonOverview = function () {
  return yxRequest.get<IPersonOverviewData>({
    url: '/getPersonOverview'
  })
}

// 产业概况统计
export const getIndustryOverview = function (params:any) {
  return yxRequest.get<IIndustryOverviewData>({
    url: '/getIndustryOverview',
    params
  })
}

// 社区首页顶部
export const getHeader = function () {
  return yxRequest.get<IHeaderData>({
    url: '/getHeader'
  })
}
// 区县首页顶部
export const getHomePageTop = function (params:any) {
  return yxRequest.get<IHeaderData>({
    url: '/bigScreen/countyScreen/getHomePageTop',
    baseURL: BASE_DOMAIN,
    params
  })
}
// // 区县公共服务顶部
// export const getHeader = function () {
//   return yxRequest.get<IHeaderData>({
//     url: '/getHeader'
//   })
// }
// 区县基层治理顶部
export const getCountyTopData = function (params:any) {
  return yxRequest.get<IHeaderData>({
    url: '/bigScreen/countyScreen/getCountyTopData',
    baseURL: BASE_DOMAIN,
    params
  })
}
// 区县就业帮扶顶部
export const getCountyLaodongTopDataVo = function (params:any) {
  return yxRequest.get<IHeaderData>({
    url: '/bigScreen/countyScreen/getCountyLaodongTopDataVo',
    baseURL: BASE_DOMAIN,
    params
  })
}
// 区县基层党建顶部
export const getCountyPartyTopVo = function (params:any) {
  return yxRequest.get<IHeaderData>({
    url: '/bigScreen/countyScreen/getCountyPartyTopVo',
    baseURL: BASE_DOMAIN,
    params
  })
}
// 区县文化服务顶部
// export const getHeader = function () {
//   return yxRequest.get<IHeaderData>({
//     url: '/getHeader'
//   })
// }



// 党建引领
export const getPartyBuilding = function () {
  return yxRequest.get<IPartyBuildingData>({
    url: '/getPartyBuilding'
  })
}

// 平安建设概况
export const getPingOverview = function () {
  return yxRequest.get<IPingOverviewData>({
    url: '/getPingOverview'
  })
}

// 设备概况统计
export const getDeviceOverview = function () {
  return yxRequest.get<IDeviceOverviewData>({
    url: '/getDeviceOverview'
  })
}

// 居住统计概况
export const getLiveOverview = function () {
  return yxRequest.get<ILiveOverviewData>({
    url: '/getLiveOverview'
  })
}

// 通行统计分析
export const getPassOverview = function (params: IPassType) {
  return yxRequest.get<IPassData>({
    url: '/getPassOverview',
    params
  })
}

// 获取模块集合
export const getModuleList = function () {
  return yxRequest.get<IModuleData>({
    url: '/getModuleList'
  })
}

// 获取字典
export const getDirList = function (dictType: string) {
  return yxRequest.get<IDirListData>({
    url: `/pgBigScreen/type/${dictType}`,
    baseURL: BASE_DOMAIN
  })
}

// 码上提记录
export const getMaShangTiList = function () {
  return yxRequest.get<IMaShangTiData>({
    url: '/getMaShangTiList'
  })
}

// 华嫂党员统计
export const getHuaSaoCount = function () {
  return yxRequest.get<IHuaSaoData>({
    url: '/getHuaSaoCount'
  })
}

// 活动统计概况
export const getActivityCount = function (params:any) {
  return yxRequest.get<IActivityData>({
    url: '/getActivityCount',
    params
  })
}
// 邻里
export const getCountyActivityCountVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyActivityCountVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}


// 活动统计概况
export const getMerchantData = function (params:any) {
  return yxRequest.get<IMerchantData>({
    url: '/getMerchantData',
    params
  })
}


//---------------

// 返贫监测
export const getPovertyData = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getPoverty`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 民族监测
export const getNationalityDetection = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getNationalityDetection`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 公共力量
export const getPublicPower = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getPublicPower`,
    baseURL: BASE_DOMAIN,
    params
  })
}
// 事件列表
export const getCountyEventListVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyEventListVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}


// 社区治理
export const getGovern = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getGovern`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 就业帮扶
export const getAJob = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getAJob`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 文化服务
export const getCulture = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCulture`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 基层党建
export const getHomePartyBuilding = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getPartyBuilding`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 公共服务----教育保障情况
export const getEducationalSecurity = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getEducationalSecurity`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 公共服务----医疗保障情况
export const getYiLiaoSecurity = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getYiLiaoSecurity`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 公共服务----城乡低保情况
export const getSocialAssistance = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getSocialAssistance`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 公共服务----健康保障情况 - 保障情况
export const getShebao = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getShebao`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 公共服务----市民证办理台账
export const getShiminzhengVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getShiminzhengVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//公共服务----健康保障情况 - 健康情况
export const getHealthPopulation = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getHealthPopulation`,
    baseURL: BASE_DOMAIN,
    params
  })
}


//基层治理----人员增减情况
export const getCountyPersonChangeVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyPersonChangeVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//基层治理----年龄分布情况
export const getAgeVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getAgeVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//基层治理----社区治事件概况
export const getCountyShequshijianVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyShequshijianVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}


//基层治理----社区治理情况
export const getCountyShequzhiliVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyShequzhiliVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//基层治理----人口情况
export const getRenkouqingkuangVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getRenkouqingkuangVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}


//就业帮扶----就业地区分布
export const getCountyJiuyeAreaVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyJiuyeAreaVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//就业帮扶----产业情况分析
export const getCountyJiuyebangfuVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyJiuyebangfuVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//就业帮扶----劳动力年龄分布
export const getCountyLaodongliAgeVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyLaodongliAgeVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//就业帮扶----劳动力就业渠道
export const getCountyLaodongliJiuyeQudaoVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyLaodongliJiuyeQudaoVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//就业帮扶----劳动力就业类别
export const getCountyLaodongliJiuyeVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyLaodongliJiuyeVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//就业帮扶----退出劳动力原因
export const getCountyTuichuReasonVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyTuichuReasonVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}


//文化服务----活动列表
export const getCountyActivityPage = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyActivityPage`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//文化服务----活动类型情况
export const getCountyActivityTypeVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyActivityTypeVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//文化服务----打卡记录列表
export const getCountyActivityUserPage = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyActivityUserPage`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//文化服务----服务场所情况
export const getCountyServiceAreaVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyServiceAreaVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//文化服务----文艺团队情况
export const getCountyWenyiGroupVo = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyWenyiGroupVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}
//文化服务----活动场所情况
export const getCountyActivitySite = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getCountyActivitySite`,
    baseURL: BASE_DOMAIN,
    params
  })
}

//----低保台账
export const getSocialAssistanceList = function (params:any) {
  return yxRequest.get<any>({
    url: `/bigScreen/countyScreen/getSocialAssistanceList`,
    baseURL: BASE_DOMAIN,
    params
  })
}







// 基层党建-党龄分布
export const getCountyPartyAgeVo = function (params:any) {
  return yxRequest.get<IPartyAge>({
    url: `/bigScreen/countyScreen/getCountyPartyAgeVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 基层党建-基层党建
export const getCountyPartyBaseVo = function (params:any) {
  return yxRequest.get<IPartyAge>({
    url: `/bigScreen/countyScreen/getCountyPartyBaseVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 基层党建-党员学历
export const getCountyPartyEducationVo = function (params:any) {
  return yxRequest.get<IPartyAge>({
    url: `/bigScreen/countyScreen/getCountyPartyEducationVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 基层党建-党建力量构成
export const getCountyPartyPowerVo = function (params:any) {
  return yxRequest.get<IPartyAge>({
    url: `/bigScreen/countyScreen/getCountyPartyPowerVo`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 基层党建-党建活动列表
export const getActivityCountByClassList = function (params:any) {
  return yxRequest.get<IPartyAge>({
    url: `/bigScreen/countyScreen/getActivityCountByClassList`,
    baseURL: BASE_DOMAIN,
    params
  })
}

// 获取下钻数据
export const getDownData = function (params:any) {
  return yxRequest.get<IPartyAge>({
    url: `/bigScreen/countyScreen/getDownData`,
    baseURL: BASE_DOMAIN,
    params
  })
}

