import { Pipe, PipeTransform } from '@angular/core';

export class CurrentTask{
  taskId:string;
  actorIdList:any[];
  taskName:string;
  actorMap:Object;
}
/**
 * 列表流程信息组合
 * eg: 二级部门主管审批：陈武军
 */
@Pipe({
  name: 'currentTask',
})
export class CurrentTaskPipe implements PipeTransform {
  transform(value: any[], ...args) {
    if(value.length>0){
      const taskName = value[0].taskName;
      const actors=Object.keys(value[0].actorMap).map(key=>value[0].actorMap[key]);

      return `${taskName}: ${actors} `;
    }else {
      return `值为null`;
    }

  }
}
