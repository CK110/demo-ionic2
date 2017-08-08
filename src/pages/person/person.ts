import { Component } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {UserData} from "../../providers/user-data";
import {LoginPage} from "../login/login";
import {JMessageHelper} from "../../providers/jmessage-helper";

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  constructor(public navCtrl: NavController,
              public userData:UserData, public jMessageHelper:JMessageHelper,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  getUserInfo(){

  }

  loginOut(){
    // this.jMessageHelper.loginOut();

    this.userData.logout().then(()=>{
      this.app.getRootNav().setRoot(LoginPage);
    })
  }

}
