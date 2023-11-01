import yxRequest from '../../index'
import { BASE_DOMAIN } from '../../config'
import type {} from '@/type'

import type { ILogin } from './type'
// 登录接口
export const screenlogin = function (params: ILogin) {
  return yxRequest.get<null>({
    url: '/bigScreenCommon/screenlogin',
    baseURL: BASE_DOMAIN,
    params
  })
}


// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return yxRequest.post({
    url: '/login',
    baseURL: BASE_DOMAIN,
    data: data
  })
}


// 获取验证码
export function getCodeImg() {
  return yxRequest.get({
    url: '/captchaImage',
    baseURL: BASE_DOMAIN,
  })
}
