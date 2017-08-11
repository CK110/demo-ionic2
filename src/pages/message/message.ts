import { Component } from '@angular/core';
import {UserData} from "../../providers/user-data";
import {Events, IonicPage, NavController, PopoverController} from "ionic-angular";
import {ToolPage} from "./tool/tool";
import {DemoPage} from "./demo/demo";
import {HttpClient} from "../../providers/http-client";
import {TEST} from "../../api/api";

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  items: string[];

  username:string;
  badgeNumber:number=0;

  constructor(private userData:UserData,
              public events:Events,
              public popoverCtrl: PopoverController,
              public navCtrl:NavController,private httpClient:HttpClient) {

    this.userData.getUsername().then((username)=>{
      this.username = username;
    });

  }

  ionViewWillEnter() {
    // this.httpClient.post(TEST,JSON.stringify({"name":"222","sex":"男"}))
    //   .map(res=> res.json())
    //   .subscribe((data)=>{
    //       console.dir(data);
    //   })
  }

  popPage(myEvent){
    this.popoverCtrl.create(ToolPage).present({ev: myEvent});
  }


  /**
   * 增加消息badge
   */
  incrementBadge(){
    this.badgeNumber = this.badgeNumber+1;
    console.log(this.badgeNumber);
    this.events.publish('tabs-tab1-page:badge-update',this.badgeNumber);

  }

  /**
   * 减少消息badge
   */
  decrementBadge(){
    console.log(this.badgeNumber);
    if(this.badgeNumber >0){
      this.badgeNumber = this.badgeNumber-1;
      this.events.publish('tabs-tab1-page:badge-update',this.badgeNumber);
    }
  }


  openDemo(){
    this.navCtrl.push(DemoPage);
  }

  saveItem(){

  }


}
