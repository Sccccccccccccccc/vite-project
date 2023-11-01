import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { YXRequestConfig, YXRequestConfig2 } from './type'
// 针对原来的配置进行扩展

class YXRequest {
  instance: AxiosInstance
  constructor(config: YXRequestConfig) {
    this.instance = axios.create(config)
    // 配置拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (config) => {
        return config.data
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法

  request<T = any>(config: YXRequestConfig2<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: YXRequestConfig2<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: YXRequestConfig2<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: YXRequestConfig2<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: YXRequestConfig2<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default YXRequest
