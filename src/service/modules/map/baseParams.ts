import type { IMapType, IHouseMapType } from './type'
import { session } from '@/utils/storage'

export const baseMapParams: IMapType = {
  type: session.get('MAP_TYPE') ?? -1,
  param: ''
}

export const baseHouseParams: IHouseMapType = {
  param: ''
}
