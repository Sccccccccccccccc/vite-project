import type {
  IDataMapType,
  ITerPersonDetailsData,
  ITerHouseListDetailsData,
  houseListDetailsVos,
  ITerLiverDetailsData,
  IEnterpriseData,
  ITerMerchantDetailsData,
  ITerEventDetailsData,
  ITerDeviceDetailsData,
  IEnterpriseBook,
  IEnterprisePrincipal
} from '@/type'
export const personDetailsMap: IDataMapType<ITerPersonDetailsData> = [
  {
    title: '个人照',
    key: 'personImg',
    img: 'pic-1'
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
    title: '民族',
    key: 'nationality'
  },
  {
    title: '证件类型',
    key: 'cardType'
  },
  {
    title: '证件正面照',
    key: 'cardImgFront',
    img: 'pic-2'
  },
  {
    title: '与户主关系',
    key: 'huzhuRelation'
  },
  {
    title: '政治面貌',
    key: 'politics'
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
    title: '证件反面照',
    key: 'cardImgBack',
    img: 'pic-2'
  },
  {
    title: '文化水平',
    key: 'education'
  },
  {
    title: '婚姻状况',
    key: 'marriage'
  },
  {
    title: '兵役情况',
    key: 'military'
  },
  {
    title: '工作单位',
    key: 'workPlace'
  },
  {
    title: '户籍所在地',
    key: 'huAddress'
  },
  {
    title: '实际居住地址',
    key: 'livingAddress'
  }
]

export const houseListDetailsMap: IDataMapType<ITerHouseListDetailsData> = [
  {
    title: '房屋地址',
    key: 'address'
  },
  {
    title: '出租屋状态',
    key: 'status'
  },
  {
    title: '房东姓名',
    key: 'person'
  },
  {
    title: '联系电话',
    key: 'personPhone'
  },
  {
    title: '居住人数',
    key: 'total'
  }
]

export const houseListDetailsVoMap: IDataMapType<houseListDetailsVos> = [
  {
    title: '租客姓名',
    key: 'name'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '身份证号',
    key: 'cardId'
  },
  {
    title: '出租日期',
    key: 'startDate'
  },
  {
    title: '到期日期',
    key: 'endDate'
  }
]

export const liverDetailsTopMap: IDataMapType<ITerLiverDetailsData> = [
  {
    title: '租客姓名',
    key: 'name'
  },
  {
    title: '文化程度',
    key: 'education'
  },
  {
    title: '房屋地址',
    key: 'address'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '从事职业',
    key: 'job'
  },
  {
    title: '居住事由',
    key: 'liveReason'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '婚姻状况',
    key: 'marriage'
  },
  {
    title: '起租日期',
    key: 'rentStartDate'
  },
  {
    title: '证件类型',
    key: 'cardType'
  },
  {
    title: '政治面貌',
    key: 'politics'
  },
  {
    title: '到租日期',
    key: 'rentEndDate'
  },
  {
    title: '证件号码',
    key: 'cardId'
  },
  {
    title: '工作单位',
    key: 'workPlace'
  }
]

export const liverDetailsBottomMap: IDataMapType<ITerLiverDetailsData> = [
  {
    title: '户主',
    key: 'person'
  },
  {
    title: '联系电话',
    key: 'personPhone'
  },
  {
    title: '证件号码',
    key: 'personCardId'
  }
]

export const enterpriseDetailsBaseMap: IDataMapType<IEnterpriseData> = [
  {
    title: '所属区域',
    key: 'city'
  },
  {
    title: '企业名称',
    key: 'name'
  },
  {
    title: '公司简介',
    key: 'companyText'
  },
  {
    title: '所属组织',
    key: 'zone'
  },
  {
    title: '所属行业',
    key: 'type'
  },
  {
    title: '所属网格',
    key: 'wangGeName'
  },
  {
    title: '所属地址',
    key: 'diZhiName'
  },
  {
    title: '详细地址',
    key: 'firmAddress'
  }
]

export const enterpriseDetailsCommerceMap: IDataMapType<IEnterpriseData> = [
  {
    title: '企业联系人',
    key: 'person'
  },
  {
    title: '成立时间',
    key: 'establishedTime'
  },
  {
    title: '营业执照',
    key: 'businessLicenseUrl',
    img: 'pic-2'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '迁出日期',
    key: 'moveOutTime'
  },
  {
    title: '统一信用代码',
    key: 'creditCode'
  },
  {
    title: '注册资金',
    key: 'registerMoney'
  },
  {
    title: '注册时间',
    key: 'registerTime'
  },
  {
    title: '注册地点',
    key: 'registerAddress'
  },
  {
    title: '注册机关',
    key: 'registerDept'
  },
  {
    title: '场所地点',
    key: 'placeAddress'
  }
]
export const enterpriseDetailsResponsibilityMap: IDataMapType<IEnterpriseBook> = [
  {
    title: '责任书',
    key: 'imgUrl',
    img: 'pic-3'
  },
  {
    title: '上传时间',
    key: 'addTime'
  },
  {
    title: '过期时间',
    key: 'expirationTime'
  }
]
export const enterpriseDetailsPersonMap: IDataMapType<IEnterprisePrincipal> = [
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '手机号码',
    key: 'mobile'
  },
  {
    title: '职务',
    key: 'position'
  }
]

export const merchantDetailsTopMap: IDataMapType<ITerMerchantDetailsData> = [
  {
    title: '所属区域',
    key: 'city'
  },
  {
    title: '经营类别',
    key: 'type'
  },
  {
    title: '所属社区/村',
    key: 'zone'
  },
  {
    title: '商家名称',
    key: 'merchantName'
  },
  {
    title: '所属地址',
    key: 'address'
  },
  {
    title: '面积',
    key: 'area'
  },
  {
    title: '经营地址',
    key: 'merchantAddress'
  },
  {
    title: '所属网格',
    key: 'wanggeAddress'
  }
]

export const merchantDetailsBottomMap: IDataMapType<ITerMerchantDetailsData> = [
  {
    title: '负责人',
    key: 'responser'
  },
  {
    title: '人数',
    key: 'staffNum'
  },
  {
    title: '负责人身份证',
    key: 'cardImg',
    img: 'pic-2'
  },
  {
    title: '负责人手机号',
    key: 'responserMobile'
  },
  {
    title: '迁入时间',
    key: 'openTime'
  },
  {
    title: '门口照片',
    key: 'doorImg',
    img: 'pic-3'
  },
  {
    title: '负责人证件号',
    key: 'cardId'
  },
  {
    title: '迁出时间',
    key: 'moveOutTime'
  },
  {
    title: '有无营业执照',
    key: 'hasYyzz'
  },
  {
    title: '有无许可证',
    key: 'hasXkz'
  }
]
export const eventDetailsTopMap: IDataMapType<ITerEventDetailsData> = [
  {
    title: '地址',
    key: 'address'
  },
  {
    title: '巡查时间',
    key: 'checkTime'
  },
  {
    title: '名称',
    key: 'name'
  },
  {
    title: '负责人',
    key: 'userName'
  },
  {
    title: '应用类别',
    key: 'patrolType',
    dirParams: 'sys_patrol_type'
  },
  {
    title: '负责人联系电话',
    key: 'userMobile'
  },
  {
    title: '记录类别',
    key: 'checkType',
    dirParams: [['检查', '复查'], 1]
  },
  {
    title: '巡查人',
    key: 'checkerName'
  },
  {
    title: '处理状态',
    key: 'checkStatus',
    dirParams: 'sys_answer_check_status'
  },
  {
    title: '巡查人手机号',
    key: 'checkerMobile'
  }
]

export const eventDetailsCenterMap: IDataMapType<ITerEventDetailsData> = [
  {
    title: '巡查结果',
    key: 'checkResult',
    dirParams: ['不通过', '通过']
  },
  {
    title: '结果说明',
    key: 'checkRemark'
  },
  {
    title: '问题项目',
    key: 'problemItemStr'
  },
  {
    title: '整改日期',
    key: 'checkCorrectionDate'
  },
  {
    title: '整改建议',
    key: 'checkCorrectionAdvice'
  }
]

export const eventDetailsBottomMap: IDataMapType<ITerEventDetailsData> = [
  {
    title: '负责人签名',
    key: 'userCheckSignUrl',
    img: 'pic-2'
  },
  {
    title: '巡查人签名',
    key: 'checkerSignUrl',
    img: 'pic-2'
  }
]

export const deviceDetailsMap: IDataMapType<ITerDeviceDetailsData> = [
  {
    title: '所属区域',
    key: 'city'
  },
  {
    title: '设备名称',
    key: 'name'
  },
  {
    title: '联系人',
    key: 'userName'
  },
  {
    title: '所属组织',
    key: 'zone'
  },
  {
    title: '设备状态',
    key: 'status'
  },
  {
    title: '联系电话',
    key: 'phone'
  },
  {
    title: '设备类型',
    key: 'type'
  },
  {
    title: '开通时间',
    key: 'openTime'
  },
  {
    title: '设备图片',
    key: 'img',
    img: 'pic-3'
  },
  {
    title: '设备编号',
    key: 'deviceId'
  },
  {
    title: '设备厂商',
    key: 'manufacturer'
  },
  {
    title: '设备序列号',
    key: 'deviceCode'
  },
  {
    title: '设备位置',
    key: 'deviceAddress'
  }
]
