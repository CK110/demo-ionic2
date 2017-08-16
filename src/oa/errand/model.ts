/**
 * 与后端协定好
 */
export class Errand {
  formId?:string;   // 申请单ID
  procinstId?:string;  // 流程实例ID
  errander?:string;    // 出差人ID
  erranderName?:string;  // 出差人姓名
  dispatcher?:string;    // 派遣人ID
  dispatcherName?:string; // 派遣人姓名
  projectId?:string;     // 出差项目ID
  departPlace?: string;  // 出发地
  arrivePlace?:string    // 目的地
  departDate?:string;     // 预计出发日期
  days?:string;        // 预计天数
  reason?:string;        // 出差事由
  currentTaskList?:object;  // 当前任务列表
}

/**
 * 用作统一form表单的label
 * @type {{addUser: string; number: string}}
 */
export const  Form_Label= {
  dispatcher:"派遣人",
  projectId:"项目编号",
  departPlace:"出发地",
  arrivePlace:"目的地",
  departDate:"预计出发日期",
  days:"预计出差天数",
  reason:"出差事由"
};


export class Filter{
  errander?:string; //出差人ID
  departDateBegin?:string;//预计出发日期起始
  departDateEnd?:string;//预计出发日期截止
  arrivePlace?:string;//目的地
  corpName?:string;//公司名称
  deptId?:string;//部门名称
  flowStatus?:string;//流程状态
}

export const Filter_Label={
  errander:'申请人',
  deptId:'部门',
  arrivePlace:'目的地',
  flowStatus:'流程状态'
}
