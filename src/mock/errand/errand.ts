import {ResponseOptions,Response,Request} from "@angular/http";

const errandList = [];
for (let i = 0; i < 70; i++) {
  errandList.push(      {
    formId:'1001010000100001',   // 申请单ID
    procinstId:'0010100001001',  // 流程实例ID
    errander:'wjchen',    // 出差人ID
    erranderName:'陈武军',  // 出差人姓名
    dispatcher:'xlzhang',    // 派遣人ID
    dispatcherName:'张晓亮', // 派遣人姓名
    projectId:'002900102',     // 出差项目ID
    departPlace:'南京',  // 出发地
    arrivePlace:'北京',   // 目的地
    departDate:'2017-06-08',     // 预计出发日期
    days:'10',        // 预计天数
    reason:'集中测试出差',      // 出差事由
    "currentTaskList": [
      {
        "taskId": "44488",
        "actorIdList": [
          "shanshan",
          "chengzhong"
        ],
        "taskName": "行政订票",
        "actorMap": {
          "shanshan": "单姗",
          "chengzhong": "仲晨"

        }
      }
    ]

  });
}

export default {
  addSubmit: (req:Request)=>{

    const param = JSON.parse(req.text());
    console.log(`errand app mock ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 0,
        data: {
          adderrand:'true',
        }
      }
    }))
  },

  getErrandList: (req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`errand app mock list ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 0,
        errandList:errandList
      }
    }))
  }

}
