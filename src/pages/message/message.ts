import { Component } from '@angular/core';
import {UserData} from "../../providers/user-data";
import {DatePicker} from "@ionic-native/date-picker";
import {PopoverController} from "ionic-angular";
import {ToolPage} from "./tool/tool";

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  items: string[];

  username:string;
  NativeDate:any;

  htmlDate:any;

  constructor(private userData:UserData,
              private datePicker: DatePicker,
              public popoverCtrl: PopoverController) {

   this.userData.getUsername().then( (username)=>{
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
    let popover = this.popoverCtrl.create(ToolPage);
    popover.present({
      ev: myEvent
    });
  }

}
