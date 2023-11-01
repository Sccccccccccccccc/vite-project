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

const baseListParams = {
  pageNum: 1,
  pageSize: 9,
  type: ''
}

export const basePersonAndEventParams: IPersonAndEventType = {
  ...baseListParams,
  huzhuRelation: '',
  name: '',
  type: '',
  dictValue: ''
}

export const baseIndustryParams: IIndustryType = {
  ...baseListParams,
  category: undefined,
  param: '',
  sellCategory: ''
}

export const basePartyParams: IPartyListType = {
  ...baseListParams,
  name: ''
}

export const basePingParams: IPingListType = {
  ...baseListParams,
  address: '',
  checkResult: undefined,
  checkStatus: undefined,
  checkType: undefined
}
export const baseDeviceParams: IDeviceListType = {
  ...baseListParams,
  param: ''
}

export const basePassParams: IPassListType = {
  ...baseListParams,
  param: '',
  time: '',
  category: undefined
}

export const baseHeaderParams: IHeaderListType = {
  ...baseListParams,
  param: ''
}

export const baseLiveParams: ILiveListType = {
  ...baseListParams,
  param: '',
  status: undefined
}

export const baseLivePersonParams: ILivePersonListType = {
  ...baseListParams,
  param: ''
}

export const baseHouseEnterParams: IHouseEnterListType = {
  ...baseListParams,
  param: ''
}
