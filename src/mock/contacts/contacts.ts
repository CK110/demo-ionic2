import Mock from 'mockjs';
import {ResponseOptions,Response} from "@angular/http";

const Contacts = [];

for (let i = 0; i < 100; i++) {
    Contacts.push(Mock.mock({
        name: Mock['Random'].cname(),
        mobile:'13675165617'
  }));
}

export default {
    getContacts: (req)=>{
      return new Response(new ResponseOptions({
        status: 200,
        body: {
          indexes: ["+","A","B","C","D","#"],
          contacts: [
            { "index":"A", "list":[{'name':'Amsterdam'},{'name':'Amsterdammmm'},{'name':'Amsterdammmm'},{'name':'Amsterdammmm'},{'name':'Amsterdammmm'},{'name':'Amsterdammmm'},{'name':'Amsterdammmm'},{'name':'Amsterdammmm'},{'name':'Amsterdammmm'}]},
            { "index":"B", "list":[{'name':'Bmsterdam'},{'name':'Bsterdammmm'}]},
            { "index":"C", "list":[{'name':'Cmsterdam'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'},{'name':'Cmsterdammmm'}]},
            { "index":"D", "list":[{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'}]},
            { "index":"E", "list":[{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'}]},
            { "index":"F", "list":[{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'}]},
            { "index":"M", "list":[{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'}]},
            { "index":"H", "list":[{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'},{'name':'Dmsterdam'},{'name':'Dsterdammmm'}]},
          ]
        }
      }))
    }
}
