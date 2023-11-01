import type { ITypeOne, ITypeTwo, IMapImgType } from './index'

export interface IList {
  name: string
  num: string
}

export interface IListType {
  list: Array<IList>
}

export interface ITagsCountVoList {
  dictValue: string
  tags: string
  total: number
}
export interface IPersonOverviewData extends IListType {
  childCount: number
  communismCount: number
  disabilityCount: number
  flowCount: number
  guGuaOldCount: number
  nationalPartyCount: number
  oftenCount: number
  oldCount: number
  onLineCount: number
  realPersonCount: number
  unLineCount: number
  tagsCountVoList: Array<ITagsCountVoList>
  [k: string]: any
}

interface IIndustryOverview extends IListType {
  chuHuanBest: number
  chuTongBest: number
  lastMonthQianChuCount: number
  lastMonthQianRuCount: number
  merchantsCount: number
  merchantsLiverCount: number
  monthQianChuCount: number
  monthQianRuCount: number
  ruHuanBest: number
  ruTongBest: number
  type: ITypeOne
}

export interface IHeaderData extends IListType {
  deviceCount: number
  eventCount: number
  hujiCount: number
  louDongCount: number
  qiYeCount: number
  merchantCount: number
  huCount:number
  personCount:number,
  dxzCount:number,
  dyCount:number,
  dzbCount:number,
  dzzCount:number,
  buildingLeader:number,
  community:number,
  grid:number,
  gridLeader:number,
  employed:number,
  employedInCounty:number,
  employedOutsideCountyInProvince:number,
  employedOutsideProvince:number,
  laborForceQuit:number,

}

export interface IPartyBuilding {
  eighteenCount: number
  fiftyNineCount: number
  fortySixCount: number
  seventyCount: number
  thirtyOneCount: number
}

export interface IPartyAge {
  twentyFiveUuCount: number
  twentyFiveDownCount: number
  thirtySixCount: number
  fiftyOneCount: number
  sixtyFiveCount: number
}

export interface IPovertyData {
  ftpHuCount: number
  ftpPersonCount: number
  tpHuCount: number
  tpPersonCount: number
}

export interface IRoleVoList {
  roleCount: number
  zhiWu: number
  zhiWuName: string
}
export interface IPartyBuildingData extends IListType {
  partyBuildingOldVo: IPartyBuilding
  roleVoList: Array<IRoleVoList>
}
export interface IPingOverview {
  categoryName: string
  completeBest: number
  completeCount: number
  count: number
  type: number
  unCompleteCount: number
}

export interface IDeviceOverviewData extends IListType {
  doorCount: number
  electricMeterCount: number
  jianKongCount: number
  jingGaiCount: number
  luDengCount: number
  waterMeterCount: number
  xiaoFangCount: number
}

export interface ILiveOverviewData extends IListType {
  ziZhuCount: number
  ziZhuKongZhiCount: number
  ziZhuZaiZhuCount: number
  chuZuCount: number
  chuZuKongZhiCount: number
  chuZuZaiZuCount: number
  chuZuBest: number
  fangDongCount: number
  zuKeCount: number
}

export interface IPass {
  chuCount: number
  date: string
  ruCount: number
}

export interface IThirdParty {
  showName: string
  sort: number
  url: string
}

export type IThirdPartyData = Array<IThirdParty>
export interface IModule {
  appId: number
  grid: number
  id: number
  module: number
  showName: string
  sort: number
  mapLvl?: string
  lon?: string
  lat?: string
  url?: string
  data?: string
}

export interface IMaShangTiData extends IListType {
  best: number
  completeCount: number
  total: number
  unCompleteCount: number
}

export interface IHuaSaoData extends IListType {
  bianMin: number
  ciShan: number
  finish: number
  jiuFen: number
  pingAn: number
  underway: number
  wenMin: number
  yiQing: number
}

export interface IActivityData extends IListType {
  best: number | string
  cardPersonCount: number
  huoDongCount: number
  huoDongPersonCount: number
}

export interface IMerchantData extends IListType {
  merchantCount: number
  merchantPersonCount: number
}
export type IModuleData = Array<IModule>

export type IPassData = Array<IPass>

export type IIndustryOverviewData = Array<IIndustryOverview>

export type IPingOverviewData = Array<IPingOverview>
