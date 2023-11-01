import type { componentType } from '@/type'

export const errorCode: componentType = {
  '401': '认证失败，无法访问系统资源',
  '403': '当前操作没有权限',
  '404': '访问资源不存在',
  default: '系统未知错误，请反馈给管理员'
}

export const BASE_MAP_HEIGHT = '308px'

export const MAP_SERVICE_TIME = Infinity
export const MODULE_SERVICE_TIME = 300000

export * from './village'

export * from './secondary_list'

export * from './tertiary-details'

export * from './map'

export * from './global'

export * from './global-secondary'
