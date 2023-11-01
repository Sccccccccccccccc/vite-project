import type { IMapImgType, IMapType } from './'

interface IMapStyle<T> extends IMapType<T> {
  style?: {
    [key: string]: any
  }
}

export type ITerOptionsList = Array<IMapStyle<Array<Array<IMapImgType<string>>>>>
export interface ITerPersonDetailsData {
  cardId: string
  cardImgBack: string
  cardImgFront: string
  cardType: string
  education: string
  huAddress: string
  huzhuRelation: string
  livingAddress: string
  marriage: string
  military: string
  mobile: string
  name: string
  nationality: string
  personImg: string
  politics: string
  sex: string
  workPlace: string
}

export interface houseListDetailsVos {
  cardId: string
  endDate: string
  name: string
  phone: string
  startDate: string
}

export interface ITerHouseListDetailsData {
  address: string
  houseListDetailsVos: Array<houseListDetailsVos>
  person: string
  personPhone: string
  status: string
  total: number
}

export interface ITerLiverDetailsData {
  address: string
  cardId: string
  cardType: string
  education: string
  job: string
  liveReason: string
  marriage: string
  name: string
  person: string
  personCardId: string
  personPhone: string
  phone: string
  politics: string
  rentEndDate: string
  rentStartDate: string
  sex: string
  workPlace: string
}

export interface ITerEnterpriseDetailsData {
  addTime: string
  addUser: string
  address: string
  addressId: number
  businessLicenseUrl: string
  chainIds: string
  city: string
  cityCode: number
  companyText: string
  creditCode: string
  diZhiName: string
  establishedTime: string
  id: number
  isDeleted: number
  lat: number
  lon: number
  moveOutTime: string
  name: string
  person: string
  phone: string
  placeAddress: string
  registerAddress: string
  registerDept: string
  registerMoney: string
  registerTime: string
  type: string
  updateTime: string
  wangGeName: string
  wanggeAddress: string
  wanggeAddressId: number
  zone: string
  zoneId: number
}

export interface ITerMerchantDetailsData {
  address: string
  area: number
  cardId: string
  cardImg: string
  city: string
  doorImg: string
  hasXkz: number
  hasYyzz: number
  merchantAddress: string
  merchantName: string
  moveOutTime: string
  openTime: string
  responser: string
  responserMobile: string
  staffNum: number
  type: string
  wanggeAddress: string
  yyzzImg: string
  xkzImg: string
  zone: string
}

interface IProblemItemVos {
  questionContent: string
  sort: number
}

export interface ITerEventDetailsData {
  checkCorrectionAdvice: string
  problemItemStr: string
  addTime: string
  address: string
  checkCorrectionDate: string
  checkRemark: string
  checkResult: number
  checkStatus: number
  checkTime: string
  checkType: number
  checkerMobile: string
  checkerName: string
  checkerSignUrl: string
  checkerUserId: number
  city: string
  cityCode: number
  id: number
  name: string
  patrolId: number
  patrolType: number
  problemItemVos: Array<IProblemItemVos>
  userCheckSignUrl: string
  userMobile: string
  userName: string
  zone: string
  zoneId: number
}

export interface ITerDeviceDetailsData {
  city: string
  deviceAddress: string
  deviceCode: string
  deviceId: string
  img: string
  manufacturer: string
  name: string
  openTime: string
  phone: string
  status: string
  type: string
  userName: string
  zone: string
}
