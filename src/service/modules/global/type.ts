import type { IType } from '@/type'

export interface IOverviewListType extends IType {
  param: string
}

export interface IHealthPatrolListType extends IType {
  status: string
  result: string
}

export interface IHouseProfileListType extends IOverviewListType {
  status: string
}

export interface IRoomDataListType extends IType {
  addressId: string
}
