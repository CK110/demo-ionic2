import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "../../../providers/http-client";
import {Errand_VIEW_INIT} from "../../../api/api";

/**
 * Generated class for the ViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'errand-view',
  templateUrl: 'view.html',
})
export class ErrandViewPage {

  errandViewInfo:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,public httpClient:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  getErrandViewInfo(){
    const param = this.navParams.get('param');
    this.httpClient.post(Errand_VIEW_INIT, param).map(res=>res.json()).subscribe(res=>{
      this.errandViewInfo = res;
    })
  }

}
