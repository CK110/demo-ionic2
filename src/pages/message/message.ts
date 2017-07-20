import { Component } from '@angular/core';
import {UserData} from "../../providers/user-data";
import {DatePicker} from "@ionic-native/date-picker";
import {Events, PopoverController} from "ionic-angular";
import {ToolPage} from "./tool/tool";
import {Http} from "@angular/http";

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  items: string[];

  username:string;
  NativeDate:any;

  htmlDate:any;

  badgeNumber:number=0;

  constructor(private userData:UserData,
              private datePicker: DatePicker,
              public popoverCtrl: PopoverController,
              public http:Http,
              public events:Events) {

    this.userData.getUsername().then((username)=>{
      this.username = username;
    });

  }

  onClick(){

      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(date => {
        console.log('Got date: ', date);
        this.NativeDate = date
        },
        err => console.log('Error occurred while getting date: ', err)
      );

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
}
