import yxRequest from '../../index'
import { BASE_DOMAIN } from '../../config'
import type {} from '@/type'

import type { IPermission } from './type'
// 获取大屏配置
export const getscreenconfig = function (params: IPermission) {
  return yxRequest.get<null>({
    url: '/bigScreen/StBigScreen/getscreenconfig',
    baseURL: BASE_DOMAIN,
    params
  })
}
