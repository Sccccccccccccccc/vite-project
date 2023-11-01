import type {
  IOverviewListType,
  IHealthPatrolListType,
  IHouseProfileListType,
  IRoomDataListType
} from './type'

const baseListParams = {
  pageNum: 1,
  pageSize: 10,
  type: ''
}

export const baseOverviewListParams: IOverviewListType = {
  ...baseListParams,
  param: ''
}

export const baseHealthPatrolListParams: IHealthPatrolListType = {
  ...baseListParams,
  result: '',
  status: ''
}

export const baseHouseProfileListParams: IHouseProfileListType = {
  ...baseListParams,
  param: '',
  status: ''
}

export const baseRoomDataListParams: IRoomDataListType = {
  ...baseListParams,
  pageSize: 4,
  addressId: ''
}
