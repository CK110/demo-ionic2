export class AirApp{
  errander:string;
  projectId:string;
  dispatcher:string;
  departDate:string;
  reason:string;
  note:string;
}

export class Travel{
  departPlace:string;
  arrivePlace:string;
  departTime:String;
}

export class Filter{
  addWho:string;
  errander:string;
  outComer:string;
  bookCorp:string;
  appType:string;
  formStatus:string;
}



export const AirApp_Label={
  errander:"乘机人",
  projectId:"项目编号",
  dispatcher:"派遣人",
  departDate:"派遣日期",
  reason:"订票事由",
  note:"备注"
}

export const Travel_Label={
  departPlace:"出发地",
  arrivePlace:"到达地",
  departTime:"预计出发时间",
}

export const Filter_Label = {
  addWho:"申请人",
  errander:"内部乘机人",
  outComer:"外部乘机人",
  bookCorp:"订票公司",
  appType:"申请类型",
  formStatus:"流程类型"
}

