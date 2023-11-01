import YXRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import { getToken, removeToken } from '@/utils/auth'
import { local,session } from '@/utils/storage'
import { errorCode } from '@/constant'
import { ElMessage } from 'element-plus'
import type { IResponseType } from '@/type'
const yxRequest = new YXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      try {
        const isToken = (config.headers || {}).isToken === false
        if (getToken() && !isToken) {
          if (config.headers) {
            config.headers.Authorization = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
          }
        }
        // const addressId =  session.get('currentAddressId')
        const screenId = local.get('currenScreenId')
        const zoneId = session.get('zoneId')
        const addressId = local.get('currentAddressId')
        const currentType = local.get('currentType')
        // ||1211560
        const cityCode = session.get('currentCityCode')
        if (!screenId) {
          ElMessage({
            showClose: true,
            message: '当前暂无权限',
            type: 'warning'
          })
          return config
        }
        if (config.params) {
          config.params.screenId = screenId
          if(zoneId){
            if(currentType==0){
              config.params.zoneId = zoneId
            }
            
          }
          if(addressId){
            config.params.addressId = addressId
          }
          // if(cityCode){
          //   config.params.cityCode = cityCode
          // }
        } else {
          config.params = {
            screenId,
            zoneId,
            
          }
          if(zoneId){
            if(currentType==0){
              config.params = {
                screenId,
                zoneId,
                // cityCode
              }
            }else{
              config.params = {
                screenId,
                // zoneId,
                // cityCode
              }
            }
            
          }else{
            config.params = {
              screenId,
              // zoneId,
              // cityCode
            }
          }
          
        }
      } catch (error) {
        console.log(error)
      }
      return config
    },
    responseSuccessFn(res: IResponseType) {
      console.log("responseSuccessFn",res.response)
      if(res.response){
        if(res.response.status==401){
          removeToken()
          location.href = '/'
          return
        }
      }
      // 未设置状态码则默认成功状态
      const code = res.code || 200
      // 获取错误信息
      const msg = errorCode[code] || res.msg || errorCode['default']
      if (code === 401) {
        removeToken()
        location.href = '/'
        return
      } else if (code === 500) {
        return Promise.reject(new Error(msg))
      } else if (code !== 200) {
        return Promise.reject('error')
      } else {
        return Promise.resolve(res.data||res)
      }
    }
  }
})

export default yxRequest

export * from './modules'
