import {ResponseOptions,Response,Request} from "@angular/http";


export default {
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

  }
}
