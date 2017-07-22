import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserData} from "../../providers/user-data";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  constructor(public navCtrl: NavController,
              public userData:UserData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  getUserInfo(){

  }

  loginOut(){
    this.userData.logout().then(()=>{
      this.navCtrl.setRoot(LoginPage)
    })
  }

}
