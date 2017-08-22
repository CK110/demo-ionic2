import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../common-model";
import {HttpClient} from "../../../providers/http-client";
import {COMMON_SELECT_USER} from "../../../api/api";

/**
 * Generated class for the SelectPersonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select-person',
  templateUrl: 'select-person.html'
})
export class SelectPersonPage {

  private filter:string;
  private userList:User[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              // public event:Event,
              public httpClient:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPersonPage');
  }

  getFilterUserList(event:Event){
    console.log(this.filter);

    this.httpClient.post(COMMON_SELECT_USER,JSON.stringify({'filter':this.filter})).map(res=>res.json()).subscribe(res=>{
      this.userList= res['userList'];
    })

  }

}
