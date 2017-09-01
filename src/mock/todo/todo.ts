import {ResponseOptions,Response,Request} from "@angular/http";
import Mock from 'mockjs';

const taskList =[]

for (let i = 0; i < 70; i++) {
  taskList.push({
    formId:'313507',
    piId:'313507w',
    processName:'应聘考核申请',
    starterId:'10003765',
    starterName:Mock['Random'].cname(),
    createDate:'1502676790000',
    taskId:'313524',
    taskName:'修改申请表',
    taskUrl:'xxxxxx',
    actorId:'xxxxx',
    actorIdList:        {
      "10003765": "陈武军"
    },
    summary:'申请人：陈武军\n应聘人：张张\n申请公司：南京\n应聘部门：信息开发中心\n应聘岗位：软件工程师\n申请时间：2017-08-14\n'
  })
}

export const TodoAPI = {

  getList: (req:Request)=>{

    let {page, filter} = JSON.parse(req.text());

    let mockList = taskList.filter(val =>{
      if(filter && val.starterName.indexOf(filter) == -1 ){
        return false;
      }
      return true;
    })

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 1,
        taskList:mockList
      }
    }))
  },
}
