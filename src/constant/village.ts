import { useImageUrl } from '@/utils/files'
import { MODULE_NAME, type IMaShangTiData } from '@/type'
import type {
  IMapType,
  ITypeOne,
  IDataMapType,
  IGetDataMap,
  IPersonOverviewData,
  IHuaSaoData,
  IRoleVoList,
  IDeviceOverviewData,
  IPass,
  IHeaderData,
  IActivityData,
  IMerchantData,
  ITagsCountVoList
} from '@/type'

export const IPersonOverviewChartMap: IGetDataMap<ITagsCountVoList> = {
  titleKey: 'tags',
  valueKey: 'total',
  paramsKey: 'dictValue'
}

export const deviceLeftMap: IDataMapType<IDeviceOverviewData> = [
  { title: '监控', key: 'jianKongCount', img: useImageUrl('monitor') },
  { title: '门禁', key: 'doorCount', img: useImageUrl('entrance') }
]

export const activityMap: IDataMapType<IActivityData> = [
  {
    title: '活动总数',
    key: 'huoDongCount',
    img: useImageUrl('act_1'),
    style: { borderColor: '#74A8FF' }
  },
  {
    title: '活动人员',
    key: 'huoDongPersonCount',
    img: useImageUrl('act_2'),
    style: { borderColor: '#96D4F2' }
  },
  {
    title: '打卡人员',
    key: 'cardPersonCount',
    img: useImageUrl('act_3'),
    style: { borderColor: '#66DC95' }
  },
  {
    title: '参与率',
    key: 'best',
    img: useImageUrl('act_4'),
    style: { borderColor: '#FED173' },
    percent: ['cardPersonCount', 'huoDongPersonCount']
  }
]

export const merchantMap: IDataMapType<IMerchantData> = [
  {
    title: '商家',
    key: 'merchantCount'
  },
  {
    title: '员工',
    key: 'merchantPersonCount'
  }
]

export const deviceRightMap: IDataMapType<IDeviceOverviewData> = [
  {
    title: '智能电表',
    key: 'electricMeterCount'
  },
  {
    title: '智能水表',
    key: 'waterMeterCount'
  },
  {
    title: '智能井盖',
    key: 'jingGaiCount'
  },
  {
    title: '智能路灯',
    key: 'luDengCount'
  },
  {
    title: '消防报警',
    key: 'xiaoFangCount'
  }
]

export const headerMap: IDataMapType<IHeaderData> = [
  {
    title: '户',
    key: 'hujiCount',
    unit: '户'
  },
  {
    title: '楼幢',
    key: 'louDongCount',
    unit: '幢'
  },
  {
    title: '企业',
    key: 'qiYeCount',
    unit: '家'
  },
  {
    title: '商家',
    key: 'merchantCount',
    unit: '家'
  },
  {
    title: '事件',
    key: 'eventCount',
    unit: '件'
  },
  {
    title: '设备',
    key: 'deviceCount',
    unit: '个'
  },
  {
    title: '户籍数',
    key: 'huCount',
    unit: '户'
  },
  {
    title: '人口数',
    key: 'personCount',
    unit: '人'
  },
  {
    title: '党小组',
    key: 'dxzCount',
    unit: ''
  },
  {
    title: '党员',
    key: 'dyCount',
    unit: ''
  },
  {
    title: '党支部',
    key: 'dzbCount',
    unit: ''
  },
  {
    title: '党总支',
    key: 'dzzCount',
    unit: ''
  },
  {
    title: '楼长',
    key: 'buildingLeader',
    unit: ''
  },
  {
    title: '社区',
    key: 'community',
    unit: ''
  },
  {
    title: '网格',
    key: 'grid',
    unit: ''
  },
  {
    title: '网格长',
    key: 'gridLeader',
    unit: ''
  },
  {
    title: '已就业',
    key: 'employed',
    unit: ''
  },
  {
    title: '县内就业',
    key: 'employedInCounty',
    unit: ''
  },
  {
    title: '县外省内就业',
    key: 'employedOutsideCountyInProvince',
    unit: ''
  },
  {
    title: '省外就业',
    key: 'employedOutsideProvince',
    unit: ''
  },
  {
    title: '退出劳动力',
    key: 'laborForceQuit',
    unit: ''
  },
  {
    title: '搬迁规模-户籍数',
    key: 'huMoveCount',
    unit: ''
  },
  {
    title: '搬迁规模-人口数',
    key: 'personMoveCount',
    unit: ''
  },
]

export const IPersonOverviewMap: IDataMapType<IPersonOverviewData> = [
  {
    title: '实有人口',
    key: 'realPersonCount',
    img: useImageUrl('icon_1')
  },
  {
    title: '常住人口',
    key: 'oftenCount',
    img: useImageUrl('icon_2')
  },
  {
    title: '流动人口',
    key: 'flowCount',
    img: useImageUrl('icon_3')
  },
  {
    title: '一老',
    key: 'oldCount',
    img: useImageUrl('icon_4')
  },
  {
    title: '一小',
    key: 'childCount',
    img: useImageUrl('icon_5')
  }
]

export const industryTypeMap: Array<IMapType<ITypeOne>> = [
  {
    title: '企业',
    value: 1
  },
  {
    title: '商家',
    value: 0
  }
]

export const moduleMap = [
  {
    value: 0,
    title: MODULE_NAME.DEMOGRAPHIC
  },
  {
    value: 1,
    title: MODULE_NAME.LIVE
  },
  {
    value: 2,
    title: MODULE_NAME.INDUSTRY
  },
  {
    value: 3,
    title: MODULE_NAME.PEACE
  },
  {
    value: 4,
    title: MODULE_NAME.EQUIPMENT
  },
  {
    value: 5,
    title: MODULE_NAME.PASS
  },
  {
    value: 6,
    title: MODULE_NAME.DISPLAY
  },
  {
    value: 7,
    title: MODULE_NAME.PARTY
  },
  {
    value: 8,
    title: MODULE_NAME.TITLE
  },
  {
    value: 9,
    title: MODULE_NAME.LOGO
  },
  {
    value: 10,
    title: MODULE_NAME.TIME
  },
  {
    value: 11,
    title: MODULE_NAME.FULLSCREEN
  },
  {
    value: 12,
    title: MODULE_NAME.THIRDPARTY
  },
  {
    value: 13,
    title: MODULE_NAME.MASHANGTI
  },
  {
    value: 14,
    title: MODULE_NAME.HUASAO
  },
  {
    value: 15,
    title: MODULE_NAME.HYGIENE
  },
  {
    value: 16,
    title: MODULE_NAME.ACTIVITY
  },
  {
    value: 22,
    title: MODULE_NAME.MERCHANT
  },
  {
    value: 25,
    title: MODULE_NAME.POVERTY
  },
  {
    value: 26,
    title: MODULE_NAME.NATION
  },
  {
    value: 27,
    title: MODULE_NAME.PUBLICPOWER
  },
  {
    value: 28,
    title: MODULE_NAME.COMMUNITYGOVERNANCE
  },
  {
    value: 29,
    title: MODULE_NAME.EMPLOYMENTASSISTANCE
  },
  {
    value: 30,
    title: MODULE_NAME.CULTURALSERVICES
  },
  {
    value: 31,
    title: MODULE_NAME.BASEPARTY
  },
  {
    value: 32,
    title: MODULE_NAME.EDUCATIONALGUARANTEES
  },
  {
    value: 33,
    title: MODULE_NAME.MEDICALCOVERAGE
  },
  {
    value: 34,
    title: MODULE_NAME.CHENGLO
  },
  {
    value: 35,
    title: MODULE_NAME.HEALTHPROTECTION
  },
  {
    value: 36,
    title: MODULE_NAME.CERTIFICATEPROCESSING
  },
  {
    value: 37,
    title: MODULE_NAME.DIBAOLEDGER
  },
  {
    value: 38,
    title: MODULE_NAME.POPULATION
  },
  {
    value: 39,
    title: MODULE_NAME.AGEDISTRIBUTION
  },
  {
    value: 40,
    title: MODULE_NAME.PERONNELCHANGES
  },
  {
    value: 41,
    title: MODULE_NAME.COMMUNITYGOVERNANCES
  },
  {
    value: 42,
    title: MODULE_NAME.COMMUNITYEVENTS
  },
  {
    value: 43,
    title: MODULE_NAME.EVENTSLIST
  },
  {
    value: 44,
    title: MODULE_NAME.ESTATE
  },
  {
    value: 45,
    title: MODULE_NAME.MANPOWERTYPE
  },
  {
    value: 46,
    title: MODULE_NAME.MANPOWERAGE
  },
  {
    value: 47,
    title: MODULE_NAME.MANPOWERDITCH
  },
  {
    value: 48,
    title: MODULE_NAME.JOBAREA
  },
  {
    value: 49,
    title: MODULE_NAME.UNMANPOWERCAUSE
  },
  {
    value: 50,
    title: MODULE_NAME.PARTYAGE
  },
  {
    value: 51,
    title: MODULE_NAME.PARTYDEGREE
  },
  {
    value: 52,
    title: MODULE_NAME.PARTYSTRENGTH
  },
  {
    value: 53,
    title: MODULE_NAME.PARTYBASE
  },
  {
    value: 54,
    title: MODULE_NAME.PARTYEXCELLENCE
  },
  {
    value: 61,
    title: MODULE_NAME.PARTYACTIVITY
  },
  {
    value: 62,
    title: MODULE_NAME.PARTYCOST
  },

  {
    value: 55,
    title: MODULE_NAME.SERVICEPREMISES
  },
  {
    value: 56,
    title: MODULE_NAME.LITERATURETEAM
  },
  {
    value: 57,
    title: MODULE_NAME.STAGE
  },
  {
    value: 58,
    title: MODULE_NAME.ACTIVITYTYPE
  },
  {
    value: 59,
    title: MODULE_NAME.ACTIVITYLIST
  },
  {
    value: 60,
    title: MODULE_NAME.ACTIVITYCARD
  },
  {
    value: 63,
    title: MODULE_NAME.DISPLAY1
  },
  {
    value: 64,
    title: MODULE_NAME.DISPLAY2
  },
  {
    value: 65,
    title: MODULE_NAME.DISPLAY3
  },
  {
    value: 66,
    title: MODULE_NAME.DISPLAY4
  },
  {
    value: 67,
    title: MODULE_NAME.DISPLAY5
  },
  {
    value: 68,
    title: MODULE_NAME.DISPLAY6
  },
  //户籍管理
  {
    value: 69,
    title: MODULE_NAME.DOMICILE
  },
  //活动积分
  {
    value: 70,
    title: MODULE_NAME.ACTIVITYSCORE
  },
  //党员积分
  {
    value: 71,
    title: MODULE_NAME.PARTYMEMBERSCORE
  },
  //保修管理
  {
    value: 72,
    title: MODULE_NAME.REPAIR
  },
  //就业帮扶2(display4)
  {
    value: 73,
    title: MODULE_NAME.EMPLOYMENTASSISTANCE2
  },
  //物业管理
  {
    value: 74,
    title: MODULE_NAME.PROPERTYMANAGEMENT
  }
]

export enum MODULE_AREA_MAP {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM
}

export const indicatorMap: IDataMapType<IHuaSaoData> = [
  {
    title: '文明劝导',
    key: 'wenMin'
  },
  {
    title: '平安巡防',
    key: 'pingAn'
  },
  {
    title: '便民服务',
    key: 'bianMin'
  },
  {
    title: '纠纷调解',
    key: 'jiuFen'
  },
  {
    title: '慈善互助',
    key: 'ciShan'
  },
  {
    title: '疫情防控',
    key: 'yiQing'
  }
]

export const maShangTiMap: IDataMapType<IMaShangTiData> = [
  {
    title: '事件总数',
    key: 'total'
  },
  {
    title: '进行中',
    key: 'unCompleteCount',
    style: {
      borderColor: '#FDD172'
    }
  },
  {
    title: '已办结',
    key: 'completeCount',
    style: {
      borderColor: '#66DC95'
    }
  }
]

export const partyDataMap: IGetDataMap<IRoleVoList> = {
  titleKey: 'zhiWuName',
  valueKey: 'roleCount',
  paramsKey: 'zhiWu',
  img: useImageUrl('img_2')
}

export const passDataOneMap: IGetDataMap<IPass> = {
  titleKey: 'date',
  valueKey: 'chuCount'
}

export const passDataTwoMap: IGetDataMap<IPass> = {
  titleKey: 'date',
  valueKey: 'ruCount'
}

export const partyMap: Array<IMapType<string>> = [
  {
    title: '网格员',
    value: 'img_2'
  },
  {
    title: '消防人员',
    value: 'img_3'
  },
  {
    title: '党员',
    value: 'img_4'
  },
  {
    title: '楼道长',
    value: 'img_5'
  },
  {
    title: '志愿者',
    value: 'img_6'
  },
  {
    title: '党小组',
    value: 'img_9'
  },
  {
    title: '党支部',
    value: 'img_8'
  },
  {
    title: '党总支',
    value: 'img_7'
  },
  {
    title: '入党积极分子',
    value: 'img_10'
  },
  {
    title: '入党申请书',
    value: 'img_11'
  }
]


