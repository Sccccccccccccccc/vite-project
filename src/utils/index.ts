import type { IPolygonArr, IConstantMap, componentType } from '../type'
import _ from 'lodash'  //https://www.jianshu.com/p/d46abfa4ddc9

export function getTheAreaCenter(lnglatarr: IPolygonArr): [number, number] {
  const total = lnglatarr.length
  let X = 0,
    Y = 0,
    Z = 0
  lnglatarr.forEach((lnglat, index) => {
    const lng = (lnglat[0] * Math.PI) / 180
    const lat = (lnglat[1] * Math.PI) / 180
    let x, y, z
    x = Math.cos(lat) * Math.cos(lng)
    y = Math.cos(lat) * Math.sin(lng)
    z = Math.sin(lat)
    X += x
    Y += y
    Z += z
  })

  X = X / total
  Y = Y / total
  Z = Z / total

  const Lng = Math.atan2(Y, X)
  const Hyp = Math.sqrt(X * X + Y * Y)
  const Lat = Math.atan2(Z, Hyp)
  return [(Lng * 180) / Math.PI, (Lat * 180) / Math.PI]
}

export function getText(value: any, map: Array<IConstantMap>, v: string = 'title') {
  return map.find((item) => item.value === value)?.[v]
}

export function getRandom(maximum: number, minimum: number) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

export function setInitialData<T extends componentType>(
  data: any,
  type: string = 'number',
  exclude: Array<string> = [],
  includes: Array<string> = []
): T {
  const newData = _.cloneDeep(data)
  if (includes.length) {
    includes.forEach((key) => {
      if (type === 'number') {
        newData[key] = 0
      } else {
        newData[key] = ''
      }
    })
  } else {
    Object.keys(data).forEach((key: any) => {
      if ((data[key] === null || data[key] === undefined) && !exclude.includes(key)) {
        if (type === 'number') {
          newData[key] = 0
        } else {
          newData[key] = ''
        }
      }
    })
  }
  return newData
}
// 转化成字典的键值对
export function getDir(data: Array<string>, curIndex: number = 0) {
  return data.map((item, index) => {
    return {
      dictLabel: item,
      dictValue: index + curIndex
    }
  })
}

export function sliceArr(data: Array<any>, sliceArr: Array<number>) {
  let index = 0
  let newArr = sliceArr.map((item) => {
    const res = data.slice(index, index + item)
    index += item
    return res
  })
  const length = newArr.length
  if (newArr.length < 5) {
    newArr.length = 5
    newArr.fill([{}], length, 5)
  }
  return newArr
}

export function getQueryObject(url?: string) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj: componentType = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 钉钉免账号登录
 */

export function getCode() {
  return getQueryObject().code
}
/**
 * 余杭一码通免账号登录
 */

export function getSign() {
  return getQueryObject().sign
}
