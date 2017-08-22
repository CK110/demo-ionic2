import {ResponseOptions,Response,Request} from "@angular/http";


export const AtmErrandAPI = {

  ApproveBatchInit: (req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`errand app mock getCurrent ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        "rc": "0",
        "detail":'',
        other:[
          {formid:'2',procinstid:2},
          {formid:'3',procinstid:3},
          {formid:'4',procinstid:4}
        ]
      }
    }))
  },


  approveInit:(req:Request)=>{
    const param = JSON.parse(req.text());
    console.log(`errand app mock list ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 0
      }
    }))
  }
}
