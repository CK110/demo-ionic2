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

const detail = {
  "currenttasklist": [
    {
      "actorMap": {
        "wjchen": "陈武军",
        "xinzhang": "张欣"
      },
      "taskName": "后续工作", // 3
      "actorIdList": [
        "wjchen",
        "xinzhang"
      ],
      "taskId": "61768"
    }
  ],
  "preerrand": "",
  "apvrecordlist": [
    {
      "formid": "4643095917849",
      "sortno": "1",
      "apvsignname": "杨锐",
      "apvnote": "111",
      "processname": "公假流程",
      "apvid": "136433743329602",
      "taskname": "一级部门经理审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:27"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "经理或部门总监审批",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    }
  ],
  "errand": {
    "formid": "4643095917849", // 1
    "procinstid": "32121",  //  2
    "reason": "11",
    "errandid": "GJSZ1408110001",
    "preerrandid": "",
    "departdate": "2014-08-06",
    "deptid": "275",
    "project": {
      "code": "研080202",
      "name": "公司内部管理系统项目",
      "projectid": "67"
    },
    "addwho": "xinzhang",
    "deptname": "吉首服务站",
    "errander": "xinzhang",
    "dispatchername": "张欣",
    "departplace": "出发地",
    "arriveplace": "目的地",
    "flowstatus": "0",
    "days": "12.0",
    "corpname": "深圳",
    "formstatus": "1",
    "continuereason": "",
    "dispatcher": "xinzhang",
    "projectid": "67",
    "adddate": "2014-08-11 16:15:22",
    "errandername": "张欣"
  },
  "cancelrecordlist": []
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
  },

  getInit: (req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`errand app mock getCurrent ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        "rc": "0",
        "detail":detail,
          other:[
            {formid:'2',procinstid:2},
            {formid:'3',procinstid:3},
            {formid:'4',procinstid:4}
          ]
        }

    }))
  },

  getCurrent:(req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`errand app mock list ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 0,
        detail
      }
    }))
  },

  batchSubmit:(req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`errand app mock list ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 0
      }
    }))
  },

  viewInit:(req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`errand app mock list ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        "rc": "0",
        "currenttasklist": [
          {
            "actorMap": {
              "wjchen": "陈武军",
              "xinzhang": "张欣"
            },
            "taskName": "后续工作",
            "actorIdList": [
              "wjchen",
              "xinzhang"
            ],
            "taskId": "61768"
          }
        ],
        "preerrand": "",
        "apvrecordlist": [
          {
            "formid": "4643095917849",
            "sortno": "1",
            "apvsignname": "杨锐",
            "apvnote": "111",
            "processname": "公假流程",
            "apvid": "136433743329602",
            "taskname": "一级部门经理审批",
            "apvpassed": "Y",
            "apvsign": "ruiyang",
            "apvdate": "2014-08-11 16:27"
          },
          {
            "formid": "4643095917849",
            "sortno": "2",
            "apvsignname": "杨锐",
            "apvnote": "经理或部门总监审批",
            "processname": "公假流程",
            "apvid": "193682926431599",
            "taskname": "分公司经理或部门总监审批",
            "apvpassed": "Y",
            "apvsign": "ruiyang",
            "apvdate": "2014-08-11 16:28"
          }
        ],
        "errand": {
          "formid": "4643095917849",
          "procinstid": "32121",
          "reason": "11",
          "errandid": "GJSZ1408110001",
          "preerrandid": "",
          "departdate": "2014-08-06",
          "deptid": "275",
          "project": {
            "code": "研080202",
            "name": "公司内部管理系统项目",
            "projectid": "67"
          },
          "addwho": "xinzhang",
          "deptname": "吉首服务站",
          "errander": "xinzhang",
          "dispatchername": "张欣",
          "departplace": "出发地",
          "arriveplace": "目的地",
          "flowstatus": "0",
          "days": "12.0",
          "corpname": "深圳",
          "formstatus": "1",
          "continuereason": "",
          "dispatcher": "xinzhang",
          "projectid": "67",
          "adddate": "2014-08-11 16:15:22",
          "errandername": "张欣"
        },
        "cancelrecordlist": []
      }
    }))
  },

}
