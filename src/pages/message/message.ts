import { Component } from '@angular/core';
import {UserData} from "../../providers/user-data";
import {TouchID} from "@ionic-native/touch-id";
import {DatePicker} from "@ionic-native/date-picker";

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  items: string[];

  username:string;
  date:any;

  constructor(private userData:UserData,
              private datePicker: DatePicker) {
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
        this.date = date
        },
        err => console.log('Error occurred while getting date: ', err)
      );

  }


}
