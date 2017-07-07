import Mock from 'mockjs';
import {ResponseOptions,Response} from "@angular/http";

const History = [];

for (let i = 0; i < 5; i++) {
  History.push(Mock.mock({
    processName: '一级部门经理审批', // 流程名
    apvName: Mock.Random.cname(), // 审批人姓名
    apvResult: '不同意，返回上一步', // 审批结果
    apvContent: Mock.Random.csentence(), // 审批内容
    apvTime: Mock.Random.datetime() // 审批事件
  }));
}

History.push(Mock.mock({
  processName: '研发部门总经理审批', // 流程名
  apvName: Mock.Random.cname(), // 审批人姓名
  apvContent: '', // 审批内容
  apvTime:'' // 审批事件
}));

export default {
  getApvHistory: (req)=>{
    return new Response(new ResponseOptions({
      status: 200,
      body: History
    }))
  }
}
