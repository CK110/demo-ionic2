import {MockConnection} from "@angular/http/testing";
import {Response, ResponseOptions, RequestMethod} from '@angular/http';

export class MockAdapter{


  constructor(public connection:MockConnection){
  }

  onGet(url:any){
    if(this.connection.request.url.endsWith(url) && this.connection.request.method === RequestMethod.Get){
      return true;
    }
    return false;
  }

  onPost(url:any){
    if(this.connection.request.url.endsWith(url) && this.connection.request.method === RequestMethod.Post){
      return true;
    }
    return false;
  }

  onPut(url:any){
    if(this.connection.request.url.endsWith(url) && this.connection.request.method === RequestMethod.Put){
      return true;
    }
    return false;
  }

  onDelete(url:any){
    if(this.connection.request.url.endsWith(url) && this.connection.request.method === RequestMethod.Delete){
      return true;
    }
    return false;
  }
}
