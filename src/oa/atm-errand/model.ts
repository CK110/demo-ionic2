export class AtmErrand{
  formId:string; //申请单ID
  errandId:string; //公假单编号
  piId:string; //流程实例ID
  errander:string; //出差人ID
  note:string; //说明
  errandMonth:string; //公假月份
  deptId:string; //所属部门ID
  flowStatus:string //流程状态
  // currentTaskList?:object;  // 当前任务列表

}

export class AtmErrandBill{
  billId?:string;
  formId?:string;
  dispatcher?:string;
  departPlace?:string;
  arrivePlace?:string;
  departDate?:string;
  days?:string;
  reason?:string;
  errandType?:string;
  travelType?:string;
  modRecord?:string;
}

export class Filter{
  errander:string; //出差人ID
  applyStartDate:string; //申请开始日期
  applyEndDate:string; //申请结束日期
  errandStartDate:string;//公假开始日期
  errandEndDate:string;//公假结束日期
  errandMonth:string; //公假月份
  deptId:string; //部门ID
  flowStatus:string;//流程状态
}

// export const Filter_Label={
//   errander:"申请人",
//   deptId:"所属服务站",
//   errandMonth:"公假月份",
//   applyStartDate:"申请开始日期",
//   applyEndDate:"申请结束日期",
//   errandStartDate:"公假开始日期",
//   errandEndDate:"公假结束日期",
// }

export const AtmErrand_Add_Label = {
  errander: '出差人',
  deptId: '所属部门',
  errandMonth: '公假月份',
  note: '说明'
}

export const AtmErrand_Add_Detail_Label = {
  dispatcher: '派遣人',
  departPlace: '出发地',
  arrivePlace: '目的地',
  errandType: '公假类型',
  departDate: '出发日期',
  days: '预计天数',
  travelType: '公出事由',
}


class vo {

}

class currentTask{

}

export class DTO1 extends vo {
  vo:vo
  currentTask:currentTask
}

export class DTO2 {
  vo:vo;
  currentTask:currentTask

}
