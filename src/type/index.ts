import type { CSSProperties } from 'vue'

export * from './village'
export * from './secondary_list'
export * from './tertiary-details'
export * from './map'
export * from './global'

export interface IResponseType<T = any> {
  code: number
  msg: string
  data?: T
}

export type ITypeOne = 0 | 1
export type ITypeTwo = ITypeOne | 2

export interface IMapType<T = number> {
  title: string
  value: T
  type?: string
}

export interface IDataMap<T> extends IOtherMap<T>, ITreeType {
  title: string
  key: keyof T
  params?: string | number
}

interface IStyle {
  value: any
  style: CSSProperties
}

interface ITreeType {
  id?: number
  parent_id?: number
}

interface IOtherMap<T> {
  dirParams?: string | [Array<string>, number] | Array<string>
  dirList?: Array<IDirList>
  dictLabel?: string
  columnWidth?: number
  img?: string
  span?: number
  unit?: string
  format?: string
  style?: CSSProperties
  percent?: Array<keyof T>
  keyArr?: Array<keyof T>
  styleList?: Array<IStyle>
}

export interface IGetDataMap<T> extends IOtherMap<T> {
  titleKey: keyof T
  valueKey: keyof T
  paramsKey?: keyof T
}
export interface IReturnDataMap<T> extends Partial<IDataMap<T>> {
  value: number | string
  [key: string]: any
}

export type IReturnDataMapType<T> = Array<IReturnDataMap<T>>

export type IDataMapType<T> = Array<IDataMap<T>>

export interface IMapImgType<T> extends IMapType<T> {
  img?: string | Array<string>
  icon?: string | Map<string, string | Array<string>>
  buttonImg?: string
}

export interface IMapSpanType<T> extends IMapType<T> {
  span: number
  img?: string
}

export interface componentType {
  [key: string]: any
}

export interface IConstantMap {
  value: string | number
  [key: string]: any
}

export type IMap<T> = {
  [key in keyof T]: string
}

export type IServiceType = () => Promise<void>

interface IDirList {
  dictLabel: string
  dictSort?: string
  dictValue: string | number
  remark?: string
}

export interface ISecList<T> {
  pageNum: number
  pageSize: number
  total: number
  list: Array<T>
}

export enum MODULE_NAME {
  TITLE,
  LOGO,
  TIME,
  FULLSCREEN,
  THIRDPARTY,
  DEMOGRAPHIC = 'demographic',
  LIVE = 'live',
  INDUSTRY = 'industry',
  PEACE = 'peace',
  EQUIPMENT = 'equipment',
  PASS = 'pass',
  DISPLAY = 'display',
  DISPLAY1 = 'display1',//首页顶部
  DISPLAY2 = 'display2',//公共服务顶部
  DISPLAY3 = 'display3',//基层治理顶部
  DISPLAY4 = 'display4',//就业帮扶顶部
  DISPLAY5 = 'display5',//基层党建顶部
  DISPLAY6 = 'display6',//文化服务顶部
  PARTY = 'party',
  MASHANGTI = 'mashangti',
  HUASAO = 'huasao',
  HYGIENE = 'hygiene',
  MERCHANT = 'merchant',
  ACTIVITY = 'activity',
  // -------------------------------------------------------------------display1------
  POVERTY = 'poverty',//返贫监测
  NATION = 'nation',//民族监测
  PUBLICPOWER = 'publicPower',//公共力量
  COMMUNITYGOVERNANCE = 'communityGovernance', //社区治理
  EMPLOYMENTASSISTANCE = 'employmentAssistance', //就业帮扶
  CULTURALSERVICES = 'culturalServices',//文化服务
  BASEPARTY = 'baseParty',//基层党建
  // --------------------------------------------------------------------display2-----
  EDUCATIONALGUARANTEES = 'educationalGuarantees', //教育保障情况
  MEDICALCOVERAGE = 'medicalCoverage', // 医疗保障情况
  CHENGLO = 'chengLo',//城乡低保情况
  HEALTHPROTECTION = 'healthProtection',//健康保障情况
  CERTIFICATEPROCESSING = 'certificateProcessing',//市民证办理台账
  DIBAOLEDGER = 'dibaoLedger', //低保户台账

  DOMICILE = 'domicile', //户籍管理
  // ---------------------------------------------------------------------display3----
  POPULATION = 'population',//人口情况
  AGEDISTRIBUTION = 'ageDistribution',//年龄分布情况
  PERONNELCHANGES = 'personnelChanges',//人员增减情况
  COMMUNITYGOVERNANCES = 'communityGovernances', //社区治理情况
  COMMUNITYEVENTS = 'communityEvents',//社区事件情况
  EVENTSLIST = 'eventsList',//事件列表

  REPAIR = 'repair',//保修管理
  PROPERTYMANAGEMENT = 'propertyManagement',//物业管理
  // ----------------------------------------------------------------------display4---
  ESTATE = 'estate',//产业情况分析
  MANPOWERTYPE= 'manpowerType',//劳动力就业类别
  MANPOWERAGE= 'manpowerAge',//劳动力年龄分布
  MANPOWERDITCH= 'manpowerDitch',//劳动力就业渠道
  JOBAREA= 'jobArea',//就业地区分布
  UNMANPOWERCAUSE= 'unmanpowerCause',//退出劳动力原因

  EMPLOYMENTASSISTANCE2 = 'employmentAssistance2', //就业帮扶(display4)
  // -----------------------------------------------------------------------display5--
  PARTYAGE= 'partyAge',//党龄分布
  PARTYDEGREE= 'partyDegree',//党员学历
  PARTYSTRENGTH= 'partyStrength',//党建力量构成
  PARTYBASE= 'partyBase',//基层党建
  PARTYEXCELLENCE= 'partyExcellence',//优秀党员
  PARTYACTIVITY= 'partyActivity',//党建活动
  PARTYCOST= 'partyCost',//党费缴纳情况

  PARTYMEMBERSCORE = 'partyMemberScore',//党员积分
  // ------------------------------------------------------------------------display6-
  SERVICEPREMISES = 'servicePremises',//服务场所情况
  LITERATURETEAM = 'literatureTeam',//文艺团队情况
  STAGE = 'stage',//活动场所情况
  ACTIVITYTYPE = 'activityType',//活动类型
  ACTIVITYLIST = 'activityList',//活动列表
  ACTIVITYCARD = 'activityCard',//活动打卡
  ACTIVITYSCORE = 'activityScore',//活动积分
}

export interface IOptionsType {
  modelValue?: boolean
  list: Array<unknown>
  step?: number
  limitScrollNum?: number
  hover?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  singleHeight?: number
  singleWidth?: number
  singleWaitTime?: number
  isRemUnit?: boolean
  isWatch?: boolean
  delay?: number
  ease?:
    | 'ease-in'
    | 'linear'
    | 'ease'
    | 'ease-out'
    | 'ease-in-out'
    | {
        x1: number
        y1: number
        x2: number
        y2: number
      }
  count?: number
  copyNum?: number
  wheel?: boolean
  singleLine?: boolean
}

export type IDirListData = Array<IDirList>

export type IPolygonArr = Array<Array<number>>
