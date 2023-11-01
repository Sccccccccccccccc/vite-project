import { useImageUrl } from '@/utils/files'

import type {
  IDataMapType,
  IMapImgType,
  ITerEventDetailsData,
  IEnterpriseData,
  IHouseDetailsData,
  ITerDeviceDetailsData,
  ITerMerchantDetailsData
} from '@/type'

export enum Theme {
  TYPE_1 = 'type-1',
  TYPE_2 = 'type-2'
}
export const globalButtonMap: Array<IMapImgType<number>> = [
  {
    title: '网格',
    value: 6,
    img: useImageUrl('grid'),
    icon: new Map([
      [Theme.TYPE_1, useImageUrl('grid_icon_1')],
      [Theme.TYPE_2, useImageUrl('grid_icon_2')]
    ]),
    buttonImg: useImageUrl('grid_bt')
  },
  {
    title: '商家',
    value: 5,
    img: useImageUrl('commerce'),
    icon: new Map([
      [Theme.TYPE_1, useImageUrl('commerce_icon_1')],
      [Theme.TYPE_2, useImageUrl('commerce_icon_2')]
    ]),
    buttonImg: useImageUrl('commerce_bt')
  },
  {
    title: '出租屋',
    value: 4,
    img: useImageUrl('home'),
    icon: new Map([
      [Theme.TYPE_1, [useImageUrl('home_icon_1'), useImageUrl('home_icon_2')]],
      [Theme.TYPE_2, [useImageUrl('home_icon_1'), useImageUrl('home_icon_2')]]
    ]),
    buttonImg: useImageUrl('home_bt')
  },
  {
    title: '设备',
    value: 3,
    img: useImageUrl('equipment'),
    icon: new Map([
      [Theme.TYPE_1, useImageUrl('equipment_icon_1')],
      [Theme.TYPE_2, useImageUrl('equipment_icon_2')]
    ]),
    buttonImg: useImageUrl('equipment_bt')
  },
  {
    title: '事件',
    value: 2,
    img: useImageUrl('event'),
    icon: new Map([
      [Theme.TYPE_1, useImageUrl('event_icon_1')],
      [Theme.TYPE_2, useImageUrl('event_icon_2')]
    ]),
    buttonImg: useImageUrl('event_bt')
  },
  {
    title: '企业',
    value: 1,
    img: useImageUrl('company'),
    icon: new Map([
      [Theme.TYPE_1, useImageUrl('enterprise_icon_1')],
      [Theme.TYPE_2, useImageUrl('enterprise_icon_2')]
    ]),
    buttonImg: useImageUrl('company_bt')
  },
  {
    title: '楼幢',
    value: 0,
    img: useImageUrl('building'),
    icon: new Map([
      [Theme.TYPE_1, useImageUrl('building_icon_1')],
      [Theme.TYPE_2, useImageUrl('building_icon_2')]
    ]),
    buttonImg: useImageUrl('building_bt')
  },
  {
    title: '综合',
    value: -1,
    img: useImageUrl('overview'),
    buttonImg: useImageUrl('overview_bt')
  }
]

export const eventDetailTopMap: IDataMapType<ITerEventDetailsData> = [
  {
    title: '地址',
    key: 'address',
    span: 24
  },
  {
    title: '名称',
    key: 'name',
    span: 12
  },
  {
    title: '应用类别',
    key: 'patrolType',
    dirParams: 'sys_patrol_type',
    span: 12
  },
  {
    title: '记录类别',
    key: 'checkType',
    dirParams: [['检查', '复查'], 1],
    span: 12
  },
  {
    title: '处理状态',
    key: 'checkStatus',
    dirParams: 'sys_answer_check_status',
    span: 12
  },
  {
    title: '巡查时间',
    key: 'checkTime',
    span: 24
  },
  {
    title: '负责人',
    key: 'userName',
    span: 12
  },
  {
    title: '负责人手机号',
    key: 'userMobile',
    span: 12
  },
  {
    title: '联系人',
    key: 'checkerName',
    span: 12
  },
  {
    title: '联系人手机号',
    key: 'checkerMobile',
    span: 12
  }
]

export const eventDetailCenterMap: IDataMapType<ITerEventDetailsData> = [
  {
    title: '巡查结果',
    key: 'checkResult',
    dirParams: ['不通过', '通过'],
    span: 24
  },
  {
    title: '结果说明',
    key: 'checkRemark',
    span: 24
  },
  {
    title: '问题项目',
    key: 'problemItemStr',
    span: 24
  },
  {
    title: '整改日期',
    key: 'checkCorrectionDate',
    span: 24
  },
  {
    title: '整改建议',
    key: 'checkCorrectionAdvice',
    span: 24
  }
]

export const eventDetailBottomMap: IDataMapType<ITerEventDetailsData> = [
  {
    title: '负责人签名',
    key: 'userCheckSignUrl',
    span: 12,
    img: 'pic-1'
  },
  {
    title: '巡查人签名',
    key: 'checkerSignUrl',
    span: 12,
    img: 'pic-1'
  }
]

export const enterpriseMap: IDataMapType<IEnterpriseData> = [
  {
    title: '企业名称',
    key: 'name',
    span: 12
  },
  {
    title: '企业联系人',
    key: 'person',
    span: 12
  },
  {
    title: '注册时间',
    key: 'registerTime',
    span: 12
  },
  {
    title: '成立时间',
    key: 'establishedTime',
    span: 12
  },
  {
    title: '注册资金',
    key: 'registerMoney',
    span: 24
  },
  {
    title: '所属区域',
    key: 'address',
    span: 24
  },
  {
    title: '所属组织',
    key: 'zone',
    span: 24
  },
  {
    title: '所属网格',
    key: 'wangGeName',
    span: 24
  },
  {
    title: '所属地址',
    key: 'diZhiName',
    span: 24
  },
  {
    title: '公司简介',
    key: 'companyText',
    span: 24
  },
  {
    title: '联系电话',
    key: 'phone',
    span: 24
  },
  {
    title: '信用代码',
    key: 'creditCode',
    span: 24
  },
  {
    title: '注册机关',
    key: 'registerDept',
    span: 24
  },
  {
    title: '注册地点',
    key: 'registerAddress',
    span: 24
  },
  {
    title: '场所地点',
    key: 'placeAddress',
    span: 24
  },
  {
    title: '经度',
    key: 'lon',
    span: 12
  },
  {
    title: '纬度',
    key: 'lat',
    span: 12
  },
  {
    title: '迁出日期',
    key: 'moveOutTime',
    span: 24
  },
  {
    title: '营业执照',
    key: 'businessLicenseUrl',
    span: 24,
    img: 'pic-2'
  }
]

export const houseDetailsVosMapTop: IDataMapType<IHouseDetailsData> = [
  {
    title: '房屋地址',
    key: 'houseAddress',
    span: 24
  },
  {
    title: '房东姓名',
    key: 'houseName',
    span: 24
  }
]

export const houseDetailsVosMapBottom: IDataMapType<IHouseDetailsData> = [
  {
    title: '入住时间',
    key: 'ruZhuDate',
    format: 'YYYY-MM-DD',
    span: 12
  },
  {
    title: '租客姓名',
    key: 'zuKeName',
    span: 12
  },
  {
    title: '年龄',
    key: 'age',
    span: 12
  },
  {
    title: '手机号',
    key: 'phone',
    span: 12
  },
  {
    title: '租约日期',
    key: 'zuYueDate',
    span: 24
  }
]

export const formDataMap: IDataMapType<any> = [
  {
    title: '个人照',
    key: '',
    img: 'pic-4'
  },
  {
    title: '证件正面照',
    key: '',
    img: 'pic-5'
  },
  {
    title: '证件反面照',
    key: '',
    img: 'pic-5'
  }
]

export const deviceDetailsVosMapBottom: IDataMapType<ITerDeviceDetailsData> = [
  {
    title: '所属区域',
    key: 'city',
    span: 24
  },
  {
    title: '所属组织',
    key: 'zone',
    span: 24
  },
  {
    title: '设备类型',
    key: 'type',
    span: 12
  },
  {
    title: '设备编号',
    key: 'deviceId',
    span: 12
  },
  {
    title: '设备序列号',
    key: 'deviceCode',
    span: 12
  },
  {
    title: '设备名称',
    key: 'name',
    span: 12
  },
  {
    title: '设备状态',
    key: 'status',
    span: 12
  },
  {
    title: '设备厂商',
    key: 'manufacturer',
    span: 12
  },
  {
    title: '开通时间',
    key: 'openTime',
    span: 24
  },
  {
    title: '设备位置',
    key: 'deviceAddress',
    span: 24
  },
  {
    title: '联系人',
    key: 'userName',
    span: 12
  },
  {
    title: '联系电话',
    key: 'phone',
    span: 12
  },
  {
    title: '设备图片',
    key: 'img',
    span: 12,
    img: 'pic-1'
  }
]

export const merchantDetailsMap: IDataMapType<ITerMerchantDetailsData> = [
  {
    title: '商家名称',
    key: 'merchantName',
    span: 24
  },
  {
    title: '商家负责人',
    key: 'responser',
    span: 12
  },
  {
    title: '手机号',
    key: 'responserMobile',
    span: 12
  },
  {
    title: '所属网格',
    key: 'wanggeAddress',
    span: 24
  },
  {
    title: '经营地址',
    key: 'merchantAddress',
    span: 24
  },
  {
    title: '经营类别',
    key: 'type',
    span: 24
  },
  {
    title: '迁入时间',
    key: 'openTime',
    span: 24
  },
  {
    title: '门口照片',
    key: 'doorImg',
    img: 'pic-1',
    span: 24
  },
  {
    title: '员工人数',
    key: 'staffNum',
    span: 24
  },
  {
    title: '营业执照',
    key: 'yyzzImg',
    img: 'pic-2',
    span: 24
  },
  {
    title: '许可证',
    key: 'xkzImg',
    img: 'pic-3',
    span: 24
  }
]
