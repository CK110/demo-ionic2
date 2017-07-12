import {ResponseOptions,Response} from "@angular/http";


export default {
  login: (req)=>{
    return new Response(new ResponseOptions({
      status: 200,
      body: {
        code: 1,
        user: {
          name:'10209012'
        }
      }
    }))
  }
}
