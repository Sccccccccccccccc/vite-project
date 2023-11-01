import type { Ref } from 'vue'
import type { ISecList } from './'
export interface ISearchOption {
  searchParams: Ref<any>
  searchFn: () => Promise<Array<any>>
  placeholder: string
}

export interface IEnterOverviewData {
  best: string
  enterinspectionCount: number
  merchantsCount: number
  yearQianChuCount: number
  yearQianRuCount: number
}

export interface IRentedHouseOverviewData {
  chuZhuCount: number
  chuZhuJianCount: number
  personCount: number
  todayRuCount: number
  todayTuiCount: number
}

export interface IMerchanOverviewData extends IEnterOverviewData {}

export interface IEnterList {
  firmAddress: string
  id: number
  name: string
  person: string
  time: string
  type: string
}

export interface IHealthPatrolList {
  name: string
  result: string
  status: string
  time: string
  id: number
}

export interface IMerchantList {
  firmAddress: string
  id: number
  name: string
  person: string
  time: string
  type: string
}

export interface IHouseProfileList {
  address: string
  addressId: number
  count: number
  houseAddress: string
  id: number
  name: string
  phone: string
  registerDate: string
  renEndDate: string
  renStartDate: string
  sex: string
  status: string
  zuQiDate: string
}

export interface IRoomDataList {
  address: string
  addressId: number
  count: number
  houseAddress: string
  id: number
  name: string
  phone: string
  registerDate: string
  renEndDate: string
  renStartDate: string
  sex: string
  status: string
  zuQiDate: string
}
export type IEnterListData = ISecList<IEnterList>
export type IHealthPatrolListData = ISecList<IHealthPatrolList>
export type IMerchantListData = ISecList<IMerchantList>
export type IHouseProfileListData = ISecList<IHouseProfileList>
export type IRoomDataListData = ISecList<IRoomDataList>
