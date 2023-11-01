import type { useSecondaryPageOption } from '@/hook/useSecondaryPageOption'
import type { ISecList } from './'
export type IOptions = ReturnType<typeof useSecondaryPageOption>

export enum TEXT_COLOR {
  YELLOW = '#FFD273',
  GREEN = '#66DC95',
  RED = '#F86269'
}
export interface IType {
  type: string | undefined
  pageNum: number
  pageSize: number
}

export interface ISecPersonList {
  address: string
  age: number
  cardId: string
  huzhuRelation: string
  id: number
  mobile: string
  name: string
  sex: string
  tags: string
  type: string
}

export interface ISecIndustryList {
  id: number
  industry: string
  name: string
  person: string
  phone: string
  address: string
}

export interface ISecPartyList {
  cardId: string
  name: string
  phone: string
  zhiWuName: string
  zone: string
}

export interface ISecPingList {
  address: string
  checkResultName: string
  checkStatusName: string
  checkTypeName: string
  city: string
  id: number
  patrolTypeName: string
  time: string
  zone: string
}

export interface ISecDeviceList {
  deviceCode: string
  deviceId: string
  id: number
  manufacturer: string
  name: string
  phone: string
  status: string
  userName: string
}

export interface ISecPassList {
  addressName: string
  cardId: string
  deviceCode: string
  direction: string
  orgName: string
  passageTime: string
  userName: string
}

export interface ISecHeaderList {
  address: string
  cardId: string
  count: number
  name: string
  people: string
  peopleMobile: string
  phone: string
}

export interface ISecLiveList {
  address: string
  area: string
  caredId: string
  houseStatus: string
  id: number
  liveCount: number
  name: string
  person: string
  phone: string
  status: number
}

export interface ISecLivePersonList {
  address: string
  cardId: string
  cardTypeName: string
  date: string
  endDate: string
  houseCount: number
  id: number
  name: string
  person: string
  phone: string
}

export interface ISecHouseEnterList {
  category: string
  id: number
  name: string
  person: string
  phone: string
  type: number
}

export type ISecPersonData = ISecList<ISecPersonList>

export type ISecIndustryData = ISecList<ISecIndustryList>

export type ISecPartyData = ISecList<ISecPartyList>

export type ISecPingData = ISecList<ISecPingList>

export type ISecDeviceData = ISecList<ISecDeviceList>

export type ISecPassData = ISecList<ISecPassList>

export type ISecHeaderData = ISecList<ISecHeaderList>

export type ISecLiveData = ISecList<ISecLiveList>

export type ISecLivePersonData = ISecList<ISecLivePersonList>

export type ISecHouseEnterData = ISecList<ISecHouseEnterList>
