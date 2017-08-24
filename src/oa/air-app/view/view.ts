import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AIR_APP_VIEW__INIT} from "../../../api/api";
import {HttpClient} from "../../../providers/http-client";

/**
 * Generated class for the ViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'air-app-view',
  templateUrl: 'view.html',
})
export class AirAppViewPage {

  viewInfo:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  getViewInfo(){
    // const param = this.navParams.get('param');
    // this.httpClient.post(AIR_APP_VIEW__INIT, param).map(res=>res.json()).subscribe(res=>{
    //   this.viewInfo = res;
    // })
  }

}
