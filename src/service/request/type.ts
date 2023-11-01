import type { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'

interface YXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: any) => any
  responseFailureFn?: (err: any) => any
}
export interface YXRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {
  interceptors?: YXInterceptors<T>
}

export interface YXRequestConfig2<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YXInterceptors<T>
}
