import type {
  IDataMapType,
  IEnterOverviewData,
  IRentedHouseOverviewData,
  IMerchanOverviewData
} from '@/type'

export const enterOverviewMap: IDataMapType<IEnterOverviewData> = [
  {
    title: '企业数',
    key: 'merchantsCount',
    unit: '家'
  },
  {
    title: '今年入驻企业',
    key: 'yearQianRuCount',
    unit: '家'
  },
  {
    title: '今年迁出企业',
    key: 'yearQianChuCount',
    unit: '家'
  },
  {
    title: '当月平安检查数',
    key: 'enterinspectionCount',
    unit: '次'
  },
  {
    title: '检查率',
    key: 'best'
  }
]

export const merchanOverviewMap: IDataMapType<IMerchanOverviewData> = [
  {
    title: '商家数',
    key: 'merchantsCount',
    unit: '家'
  },
  {
    title: '今年入驻商家',
    key: 'yearQianRuCount',
    unit: '家'
  },
  {
    title: '今年迁出商家',
    key: 'yearQianChuCount',
    unit: '家'
  },
  {
    title: '当月平安检查数',
    key: 'enterinspectionCount',
    unit: '次'
  },
  {
    title: '检查率',
    key: 'best'
  }
]

export const rentedHouseOverview: IDataMapType<IRentedHouseOverviewData> = [
  {
    title: '出租屋数',
    key: 'chuZhuCount',
    unit: '个'
  },
  {
    title: '出租间数',
    key: 'chuZhuJianCount',
    unit: '间'
  },
  {
    title: '当前在租人数',
    key: 'personCount',
    unit: '人'
  },
  {
    title: '今日入住',
    key: 'todayRuCount',
    unit: '人'
  },
  {
    title: '今日退租',
    key: 'todayTuiCount',
    unit: '人'
  }
]
