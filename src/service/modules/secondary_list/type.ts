import type { ITypeOne, ITypeTwo, IType, componentType } from '@/type'

type ITypeParams = ITypeOne | undefined
export interface IPersonAndEventType extends IType, componentType {
  pageNum: number
  pageSize: number
  huzhuRelation: string
  name: string
  dictValue: string
}

export interface IIndustryType extends IType {
  category: ITypeParams
  param: string
  sellCategory: string
}

export interface IPartyListType extends IType {
  name: string
}

export interface IPingListType extends IType {
  address: string
  checkResult: ITypeParams
  checkStatus: ITypeParams
  checkType: ITypeParams
}

export interface IDeviceListType extends IType {
  param: string
}

export interface IPassListType extends IType {
  param: string
  time: string
  category: ITypeParams
}

export interface IHeaderListType extends IType {
  param: string
}

export interface ILiveListType extends IType {
  param: string
  status: ITypeParams
}

export interface ILivePersonListType extends IType {
  param: string
}
export interface IHouseEnterListType extends IType {
  param: string
}
