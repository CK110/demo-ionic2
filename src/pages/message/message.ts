import { Component } from '@angular/core';
import {UserData} from "../../providers/user-data";

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  items: string[];

  username:string;

  constructor(private userData:UserData) {
   this.userData.getUsername().then( (username)=>{
     this.username = username;
   });
  }

}
