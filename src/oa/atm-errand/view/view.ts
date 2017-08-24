import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "../../../providers/http-client";
import {ATM_ERRAND_VIEW__INIT} from "../../../api/api";


@IonicPage()
@Component({
  selector: 'atm-errand-view',
  templateUrl: 'view.html',
})
export class AtmErrandViewPage {

  viewInfo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  getViewInfo(){
    const param = this.navParams.get('param');
    this.httpClient.post(ATM_ERRAND_VIEW__INIT, param).map(res=>res.json()).subscribe(res=>{
      this.viewInfo = res;
    })
  }

}
