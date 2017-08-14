import {ResponseOptions,Response,Request} from "@angular/http";


export default {
  getUserList: (req:Request)=>{

    const param = JSON.parse(req.text());
    console.log(` ${JSON.stringify(param)}`);

    return new Response(new ResponseOptions({
      status: 200,
      body: {
        rc: 1,
        userList: [
          {username:'a陈凯',userid:'00001'},
          {username:'b陈凯',userid:'00001'},
          {username:'c陈凯',userid:'00001'},
          {username:'d陈凯',userid:'00001'},
          {username:'e陈凯',userid:'00001'},
        ]
      }
    }))

  }
}
