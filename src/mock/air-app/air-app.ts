import {ResponseOptions,Response,Request} from "@angular/http";


const list=[];

for (let i = 0; i < 70; i++) {
  list.push(      {
    "formstatus": "3",
    "addtype": "1",
    "departdate": "2012-11-01",
    "reason": "12",
    "procinstid": "22826",
    "bookappid": "234448534572851",
    "bookcorp": "紫津融畅",
    "errandername": "蔡群（89年）",
    "corp": "紫津融畅",
    "currentTaskList": [
      {
        "taskId": "44488",
        "actorIdList": [
          "shanshan"
        ],
        "taskName": "行政订票",
        "actorMap": {
          "shanshan": "单姗"
        }
      }
    ],
    "dispatcher": "kmai",
    "errander": "caiqun",
    "addtime": "2012-11-01 17:01:12.145",
    "deptid": "58",
    "airbook": [
      {
        "arriveplace": "12",
        "basis": "2",
        "actamt": "12.00",
        "originalamt": "12.00",
        "booker": "ruiyang",
        "bookappid": "43434269114029",
        "arrivehour": "12:12",
        "departplace": "212",
        "errander": "",
        "addtime": "2013-08-14 13:41:55.543",
        "bookid": "175671193006238",
        "travelid": "0",
        "validdate": "2014-08-14",
        "passengertype": "2",
        "airline": "12",
        "note": "12",
        "arrivedate": "2013-08-07",
        "departhour": "11:11",
        "agentcode": "5",
        "departdate": "2013-08-07",
        "notifier": "ruiyang",
        "bookcorp": "深圳",
        "outcomer": "12212121212",
        "source": "1",
        "payer": "1",
        "issuedate": "2013-08-14",
        "extraamt": "12.00",
        "addwho": "ruiyang",
        "ticketid": "172897366852713",
        "flightno": "12"
      }
    ],
    "travellist": [
      {
        "arriveplace": "12",
        "travelid": "86550113692313",
        "bookappid": "234448534572851",
        "departtime": "12",
        "departplace": "12"
      }
    ],
    "addwho": "caiqun",
    "projectid": "168",
    "bookappno": "DPRC1211010002",
    "apptype": "1",
    "deptname": "软件服务部",
    "note": "12"
  });
}


export const AirAppAPI = {
  addSubmit: (req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`air app mock add ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 1,
        data: {
          airApp:'true',
        }
      }
    }))
  },


  getUserList:(req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`air app mock filter ${JSON.stringify(param)}`);
    console.log(list);
    return new Response(new ResponseOptions({
      status: 200,
      body: {
        "tatal": 70,
        "list": list,
        "rc": "0"
      }
    }))
  }
}
