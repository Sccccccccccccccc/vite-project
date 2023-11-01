import type { ITypeOne } from './index'
import type { IReturnDataMapType, componentType, ISearchOption } from '@/type'
import type { CSSProperties } from 'vue'
export interface IMapDetailsData {
  title: string
  list: IReturnDataMapType<any>
}

export interface IToggleButton {
  callMethod?: () => Promise<void>
  searchOption?: () => ISearchOption
  firstSearchFn?: () => Promise<void>
  displayMethod?: () => Promise<void>
  displayOption?: () => any
  detailsMethod?: () => Promise<void>
  detailsOption?: () => IMapDetailsOPtions
  displayItemOptions?: () => any
}

export interface IMapDetailsOPtions {
  title?: string
  style: CSSProperties
  data?: Array<IMapDetailsData>
}

interface IMap {
  lat: number
  lon: number
  name: string
  type: number
  houseType: ITypeOne
  id?: number
}

export interface IGrid {
  lat: number
  lon: number
  wangGeName: string
}
interface IHouseVo {
  address: string
  addressId: number
  houseType: number
  id: number
  lat: number
  lon: number
  name: string
  type: number
}

export interface IHouseDetailsData {
  age: number
  houseAddress: string
  houseName: string
  phone: string
  ruZhuDate: string
  zuKeName: string
  zuYueDate: string
}

export interface IEnterpriseBook {
  imgUrl: string
  addTime: string
  expirationTime: string
}

export interface IEnterprisePrincipal {
  mobile: string
  name: string
  position: string
}

export interface IEnterpriseData {
  city: string
  addTime: string
  address: string
  addressId: number
  businessLicenseUrl: string
  cityCode: number
  companyText: string
  creditCode: string
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
  wanggeAddressId: number
  zone: string
  zoneId: string
  wangGeName: string
  diZhiName: string
  firmAddress: string
  enterpriseBookList: Array<IEnterpriseBook>
  enterprisePrincipalList: Array<IEnterprisePrincipal>
}

export type IMapData = Array<IMap>

export interface IMapScreenApp {
  addTime: string
  addUser: string
  city: string
  cityCode: number
  id: number
  isDeleted: number
  jsonData: string
  jsonUrl: string
  lat: number
  lon: number
  mapLvl: number
  mapStyle: string
  name: string
  updateTime: string
  xangle: number
  yangle: number
  isSatelliteMap: ITypeOne
  mapKey: string
  mapSecret: string
  zone: string
  zoneId: number
}

export interface IMapScreenJson {
  addTime: string
  addUser: string
  color: string
  id: number
  isDeleted: number
  jsonData: any
  lat: number
  lon: number
  mapLvl: number
  name: string
  updateTime: string
  sideColor: string
  topColor: string
  personCount: number
  address: string
  onFenceColor: string
  underFenceColor: string
  fenceHeight: number
  isFence: ITypeOne
  isLaser: ITypeOne
  laserColor: string
  addressId: string
  borderColor: string
  zoneId: number
}

export interface IAddressList {
  addChainName: number
  addTime: string
  agentId: number
  appSecret: string
  appkey: string
  attribute: number
  category: number
  chainIds: string
  chainNames: string
  city: string
  cityCode: number
  corpId: string
  datavImg: string
  deptId: number
  epidJumpUrl: string
  epidType: number
  houseUrl: string
  id: number
  isDeleted: number
  isOrg: number
  lat: number
  level: number
  lng: number
  log: string
  lowerExist: number
  manageDeptId: number
  name: string
  parentId: number
  parentName: string
  people: string
  peopleMobile: string
  qrcodeImg: string
  showChainNames: string
  sort: number
  type: number
  updateTime: string
  workDeptId: number
}

export type IAddressListData = Array<IAddressList>

export interface IMapScreenJsonData {
  screenApp: IMapScreenApp
  screenJsonList: Array<IMapScreenJson>
}
export type IGridData = Array<IGrid>

export interface IHouseMapData {
  houseVos: Array<IHouseVo>
  houseDetailsVos: Array<IHouseDetailsData>
}

export type IHouseSearchData = Array<IHouseVo>

export interface IDetailsVoList {
  formData: string
  id: number
  person: string
  personImg: string
  zhiwu: string
  phone: string
  workPlace: string
}

interface IListDetailsJsonList {
  fieldJson: string
  groupName: string
  id: number
  sort: number
}

interface IListDetailsLiverList extends componentType {}

export interface IListDetailsData {
  jsonList: Array<IListDetailsJsonList>
  liverList: Array<IListDetailsLiverList>
}

interface roleVo {
  name: string
  phone: string
  roleCount: number
  zhiWu: number
  zhiWuName: string
  zhiwu: string
  image: string
}

export type IWanggeData = Array<{
  roleVoList: Array<roleVo>
  zhiwu: string
}>

export type IBuildingData = Array<IDetailsVoList>
