import type {
  IDataMapType,
  ISecPersonList,
  ISecPartyList,
  ISecIndustryList,
  ISecPingList,
  ISecDeviceList,
  ISecPassList,
  ISecHeaderList,
  ISecLiveList,
  ISecLivePersonList,
  ISecHouseEnterList
} from '@/type'
import { TEXT_COLOR } from '@/type'
export const personListMap: IDataMapType<ISecPersonList> = [
  {
    title: '居住类别',
    key: 'type'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '联系电话',
    key: 'mobile'
  },
  {
    title: '证件号码',
    key: 'cardId'
  },
  {
    title: '年龄',
    key: 'age'
  },
  {
    title: '与户主关系',
    key: 'huzhuRelation'
  },
  {
    title: '人员标签',
    key: 'tags'
  },
  {
    title: '住址',
    key: 'address'
  },
  {
    title: '操作',
    key: 'id'
  }
]

export const partyListMap: IDataMapType<ISecPartyList> = [
  {
    title: '所属区域',
    key: 'zone'
  },
  {
    title: '人员类型',
    key: 'zhiWuName'
  },
  {
    title: '人员姓名',
    key: 'name'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '身份证号',
    key: 'cardId'
  }
]

export const industryEnterpriseListMap: IDataMapType<ISecIndustryList> = [
  {
    title: '企业名称',
    key: 'name'
  },
  {
    title: '所属行业',
    key: 'industry'
  },
  {
    title: '企业联系人',
    key: 'person'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '操作',
    key: 'id'
  }
]

export const industryMerchantListMap: IDataMapType<ISecIndustryList> = [
  {
    title: '商家名称',
    key: 'name'
  },
  {
    title: '商家地址',
    key: 'address'
  },
  {
    title: '经营类别',
    key: 'industry'
  },
  {
    title: '负责人',
    key: 'person'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '操作',
    key: 'id'
  }
]

export const pingListMap: IDataMapType<ISecPingList> = [
  {
    title: '所属地点',
    key: 'zone'
  },
  {
    title: '所属区域',
    key: 'city'
  },
  {
    title: '应用类别',
    key: 'patrolTypeName'
  },
  {
    title: '记录类别',
    key: 'checkTypeName'
  },
  {
    title: '地址',
    key: 'address'
  },
  {
    title: '处理状态',
    key: 'checkStatusName',
    styleList: [
      {
        value: '待处理',
        style: {
          color: TEXT_COLOR.YELLOW
        }
      },
      {
        value: '已办结',
        style: {
          color: TEXT_COLOR.GREEN
        }
      }
    ]
  },
  {
    title: '巡查结果',
    key: 'checkResultName'
  },
  {
    title: '巡查时间',
    key: 'time'
  },
  {
    title: '操作',
    key: 'id'
  }
]

export const deviceListMap: IDataMapType<ISecDeviceList> = [
  {
    title: '设备编号',
    key: 'deviceId'
  },
  {
    title: '设备序列号',
    key: 'deviceCode'
  },
  {
    title: '设备名称',
    key: 'name'
  },
  {
    title: '设备状态',
    key: 'status',
    styleList: [
      {
        value: '激活',
        style: {
          color: TEXT_COLOR.GREEN
        }
      },
      {
        value: '待激活',
        style: {
          color: TEXT_COLOR.YELLOW
        }
      },
      {
        value: '停用',
        style: {
          color: TEXT_COLOR.RED
        }
      }
    ]
  },
  {
    title: '设备厂商',
    key: 'manufacturer'
  },
  {
    title: '联系人',
    key: 'userName'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '操作',
    key: 'id'
  }
]

export const passVehicleListMap: IDataMapType<ISecPassList> = [
  {
    title: '组织名称',
    key: 'addressName'
  },
  {
    title: '机构名称',
    key: 'orgName'
  },
  {
    title: '设备编号',
    key: 'deviceCode'
  },
  {
    title: '车牌号',
    key: 'userName'
  },
  {
    title: '通行类型',
    key: 'direction'
  },
  {
    title: '通行时间',
    key: 'passageTime'
  }
]
export const passPersonListMap: IDataMapType<ISecPassList> = [
  {
    title: '组织名称',
    key: 'addressName'
  },
  {
    title: '机构名称',
    key: 'orgName'
  },
  {
    title: '设备编号',
    key: 'deviceCode'
  },
  {
    title: '姓名',
    key: 'userName'
  },
  {
    title: '身份证号',
    key: 'cardId'
  },
  {
    title: '通行类型',
    key: 'direction'
  },
  {
    title: '通行时间',
    key: 'passageTime'
  }
]

export const headerHouseholdListMap: IDataMapType<ISecHeaderList> = [
  {
    title: '户地址',
    key: 'address'
  },
  {
    title: '人数',
    key: 'count'
  },
  {
    title: '户主姓名',
    key: 'name'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '身份证号',
    key: 'cardId'
  }
]

export const headerBuildingListMap: IDataMapType<ISecHeaderList> = [
  {
    title: '楼幢地址',
    key: 'address'
  },
  {
    title: '人数',
    key: 'count'
  },
  {
    title: '负责人',
    key: 'people'
  },
  {
    title: '负责人联系电话',
    key: 'phone'
  }
]

export const liveOwnMap: IDataMapType<ISecLiveList> = [
  {
    title: '房屋地址',
    key: 'address'
  },
  {
    title: '名称',
    key: 'name'
  },
  {
    title: '户主',
    key: 'person'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '房屋面积',
    key: 'area'
  },
  {
    title: '房间状态',
    key: 'houseStatus'
  }
]

export const liveRentMap: IDataMapType<ISecLiveList> = [
  {
    title: '房屋地址',
    key: 'address'
  },
  {
    title: '房东姓名',
    key: 'person'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '身份证号',
    key: 'caredId'
  },
  {
    title: '承租人姓名',
    key: 'name'
  },
  {
    title: '出租屋状态',
    key: 'houseStatus'
  },
  {
    title: '居住人数',
    key: 'liveCount'
  },
  {
    title: '操作',
    key: 'id'
  }
]

export const liveLandlordMap: IDataMapType<ISecLivePersonList> = [
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '证件类型',
    key: 'cardTypeName'
  },
  {
    title: '证件号码',
    key: 'cardId'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '房间数量',
    key: 'houseCount'
  },
  {
    title: '居住地址',
    key: 'address'
  },
  {
    title: '房东认证日期',
    key: 'date'
  }
]
export const liveTenantMap: IDataMapType<ISecLivePersonList> = [
  {
    title: '租客姓名',
    key: 'name'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '房屋地址',
    key: 'address'
  },
  {
    title: '户主',
    key: 'person'
  },
  {
    title: '起租日期',
    key: 'date'
  },
  {
    title: '到租日期',
    key: 'endDate'
  },
  {
    title: '操作',
    key: 'id'
  }
]

export const houseEnterMap: IDataMapType<ISecHouseEnterList> = [
  {
    title: '名称',
    key: 'name'
  },
  {
    title: '类别',
    key: 'category'
  },
  {
    title: '联系人',
    key: 'person'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '操作',
    key: 'id',
    keyArr: ['id', 'type']
  }
]
