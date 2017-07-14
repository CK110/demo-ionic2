import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {UserData} from "../../providers/user-data";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
