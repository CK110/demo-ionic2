export class Param{
  processId:string;
  taskId:string;
}

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


export class Approve{
  param?:Param;
  detail?:any;
  apvRecord?:any;
  onlySave?:boolean;
  hasInit?:boolean; // 是否已经初始化过;

}

// new Approve()
//
// = {
//   param:null;
//   detail:null;
// apvRecord?:any ={};
// onlySave?:boolean;
// }
