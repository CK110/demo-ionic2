import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {UserData} from "../../../providers/user-data";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  useTouchID:boolean =false;

  constructor(private userData:UserData) {

  }

  ionViewDidLoad() {

    this.userData.getUserSetting().then((res)=>{
      this.useTouchID = res;
      console.log(this.useTouchID);
    })
  }


  ionViewDidLeave(){
    this.userData.userSetting(this.useTouchID)
  }

}
