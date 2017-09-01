//公共对象定义
/**
 * 项目列表
 */
export class Project{
  id:string; //项目ID
  code:string; //项目代号
  name:string; //项目名称
}

/**
 * 流程审批记录
 */
export class ApvRecord{
  apvId:string;
  processName:string;
  formId:string;
  taskName:string;
  apvPassed:string;
  apvNote:string;
  apvSign:string;
  apvSignName:string;
  apvTime:string;
  sortNo:string;
  taskIdName:string;
  operateFlag:string;

  constructor(formId:string,procinstid:string,taskName:string){
    this.formId = formId;
    this.apvId = procinstid;
    this.taskName = taskName;
    this.apvPassed='';
    this.apvNote='';
  }
}

/**
 * 流程撤销记录
 */
export class CancelRecord {
  cancelId:string;   //记录ID
  formId:string;     //关联表单ID
  cancelReason:string; //撤销原因
  cancelWho:string;  //撤销人ID
  cancelWhoName:string; //撤销人姓名
  cancelTime:string;  // 撤销时间

}

/**
 * 当前流程任务
 */
export class CurrentTask {
  taskId:string;  //任务实例ID
  taskName:string; // 任务名称
  actorIdList:string[]; //待处理人ID列表
  actorMap:object; //	待处理人名称映射
}

/**
 * 任务实例
 */
export class TaskInst {
  taskId:string;   //任务实例ID
  taskName:string; //任务名称
  endTime:string;  //完成时间
  actorIdList:object; //待处理人列表
  actorId:string;  //实际处理人ID
  actorName:string //实际处理人姓名
}

/**
 * 批量审批 初始化的请求参数
 */
export class Param{
  processId:string;
  taskId:string;

  constructor(processId?:string,taskId?:string){
    this.processId =processId || '';
    this.taskId = taskId || '';
  }
}

/**
 * 批量审批页面的数据类型
 */
export class Approve{
  param?:Param;       // 请求参数
  detail?:any;        // 从后端请求的初始化数据
  apvRecord?:ApvRecord;     // 审批意见
  onlySave?:boolean;  // 是否保存
  hasInit?:boolean;   // 是否已经初始化过;

}

/**
 * 查找用户界面
 * 用户类型
 */
export class User{
  username:string;
  userid:string;
}

