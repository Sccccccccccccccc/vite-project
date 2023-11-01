import type {
  IDataMap,
  IDataMapType,
  IHealthPatrolList,
  IEnterList,
  IHouseProfileList,
  IRoomDataList
} from '@/type'

export const ENTER_NAME = '企业名称'

const enterListName: IDataMap<any> = {
  title: ENTER_NAME,
  key: 'name',
  columnWidth: 150
}

const healthPatrolMap: IDataMapType<IHealthPatrolList> = [
  {
    title: '处理状态',
    key: 'status'
  },
  {
    title: '巡查结果',
    key: 'result'
  },
  {
    title: '巡查时间',
    key: 'time',
    columnWidth: 100
  }
]

export const enterHealthPatrolMap: IDataMapType<IHealthPatrolList> = [
  enterListName,
  ...healthPatrolMap
]

export const enterListMap: IDataMapType<IEnterList> = [
  enterListName,
  {
    title: '详细地址',
    key: 'firmAddress'
  },
  {
    title: '企业联系人',
    key: 'person'
  }
]

export const enterListMapOne: IDataMapType<IEnterList> = [
  {
    title: '行业',
    key: 'type',
    columnWidth: 80
  }
]
export const enterListMapTwo: IDataMapType<IEnterList> = [
  {
    title: '入驻时间',
    key: 'time',
    columnWidth: 98
  }
]
export const enterListMapThree: IDataMapType<IEnterList> = [
  {
    title: '迁出时间',
    key: 'time'
  }
]

export const MERCHANT_NAME = '商家名称'
const merchantListName: IDataMap<any> = {
  title: MERCHANT_NAME,
  key: 'name',
  columnWidth: 150
}

export const merchantHealthPatrolMap: IDataMapType<IHealthPatrolList> = [
  merchantListName,
  ...healthPatrolMap
]

export const merchantListMap: IDataMapType<IEnterList> = [
  merchantListName,
  {
    title: '详细地址',
    key: 'firmAddress'
  },
  {
    title: '商家联系人',
    key: 'person'
  }
]

export const merchantListMapOne: IDataMapType<IEnterList> = [
  {
    title: '行业',
    key: 'type',
    columnWidth: 80
  }
]
export const merchantListMapTwo: IDataMapType<IEnterList> = [
  {
    title: '入驻时间',
    key: 'time'
  }
]
export const merchantListMapThree: IDataMapType<IEnterList> = [
  {
    title: '迁出时间',
    key: 'time'
  }
]

export const HOUSE_ADDRESS_ONE = '出租屋'
export const houseProfileListMapOne: IDataMapType<IHouseProfileList> = [
  {
    title: HOUSE_ADDRESS_ONE,
    key: 'address',
    columnWidth: 148
  },
  {
    title: '房屋状态',
    key: 'status',
    styleList: [
      {
        value: '在租',
        style: {
          color: '#FED173'
        }
      },
      {
        value: '空置',
        style: {
          color: '#66DC95'
        }
      }
    ]
  },
  {
    title: '房东姓名',
    key: 'name'
  },
  {
    title: '出租间数',
    key: 'count',
    style: {
      color: '#41DBFC',
      fontWeight: 700
    }
  }
]
export const HOUSE_ADDRESS_TWO = '出租间'

export const houseProfileListMapTwo: IDataMapType<IHouseProfileList> = [
  {
    title: HOUSE_ADDRESS_TWO,
    key: 'address',
    columnWidth: 150
  },
  {
    title: '房屋状态',
    key: 'status',
    styleList: [
      {
        value: '在租',
        style: {
          color: '#FED173'
        }
      },
      {
        value: '空置',
        style: {
          color: '#66DC95'
        }
      }
    ]
  },
  {
    title: '房东姓名',
    key: 'name'
  },
  {
    title: '居住人数',
    key: 'count',
    style: {
      color: '#41DBFC',
      fontWeight: 700
    }
  }
]
export const HOUSE_ADDRESS_THREE = '地址'
export const houseProfileListMapThree: IDataMapType<IHouseProfileList> = [
  {
    title: HOUSE_ADDRESS_THREE,
    key: 'address',
    columnWidth: 148
  },
  {
    title: '租客姓名',
    key: 'name'
  },
  {
    title: '租期',
    key: 'zuQiDate',
    columnWidth: 112
  },
  {
    title: '登记日期',
    key: 'registerDate'
  }
]

export const roomDataListMapOne: IDataMapType<IRoomDataList> = [
  {
    title: '出租间',
    key: 'address'
  },
  {
    title: '房屋状态',
    key: 'status',
    styleList: [
      {
        value: '在租',
        style: {
          color: '#FED173'
        }
      },
      {
        value: '空置',
        style: {
          color: '#66DC95'
        }
      }
    ]
  },
  {
    title: '居住人数',
    key: 'count',
    style: {
      color: '#41DBFC',
      fontWeight: 700
    }
  },
  {
    title: '登记日期',
    key: 'registerDate',
    columnWidth: 100
  }
]

export const roomDataListMapTwo: IDataMapType<IRoomDataList> = [
  {
    title: '租客姓名',
    key: 'name'
  },
  {
    title: '联系电话',
    key: 'phone',
    columnWidth: 108
  },
  {
    title: '租期',
    key: 'zuQiDate',
    columnWidth: 112
  },
  {
    title: '登记日期',
    key: 'registerDate',
    columnWidth: 100
  }
]

export const houseProfileTwoThree: IDataMapType<IRoomDataList> = [
  {
    title: '租客姓名',
    key: 'name'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '起租日期',
    key: 'renStartDate'
  },
  {
    title: '到租日期',
    key: 'renEndDate'
  },
  {
    title: '登记日期',
    key: 'registerDate'
  },
  {
    title: '操作',
    key: 'id'
  }
]
