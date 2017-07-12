import {ResponseOptions,Response,Request} from "@angular/http";


export default {
  login: (req:Request)=>{

    const param = JSON.parse(req.text());

    if( param.user === 'wjchen'&& param.password === '000001' ){
      return new Response(new ResponseOptions({
        status: 200,
        body: {
          code: 1,
          user: {
            name:'wjchen'
          }
        }
      }))
    }else {
      return new Response(new ResponseOptions({
        status: 200,
        body: {
          code: 2,
          user: {
          }
        }
      }))
    }
  }
}
