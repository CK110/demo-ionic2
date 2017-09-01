import {ResponseOptions,Response,Request} from "@angular/http";


export default {
  login: (req:Request)=>{

    const param = JSON.parse(req.text());
    if( param.username === 'wjchen'&& param.password === '000001' ){
      return new Response(new ResponseOptions({
        status: 200,
        body: {
          rc: 1,
          data: {
            username:'wjchen',
            token:'0000011111100000011'
          }
        }
      }))
    }else {
      return new Response(new ResponseOptions({
        status: 200,
        body: {
          rc: 0,
          user: {
          }
        }
      }))
    }
  }
}
