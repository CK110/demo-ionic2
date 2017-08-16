export class AtmErrand{
  formId:string; //申请单ID
  errandId:string; //公假单编号
  piId:string; //流程实例ID
  errander:string; //出差人ID
  note:string; //说明
  errandMonth:string; //公假月份
  deptId:string; //所属部门ID
  flowStatus:string //流程状态
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
