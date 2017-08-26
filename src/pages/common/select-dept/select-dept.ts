import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {HttpClient} from "../../../providers/http-client";
import {COMMON_SELECT_DEPT} from "../../../api/api";

@IonicPage()
@Component({
  selector: 'page-select-dept',
  templateUrl: 'select-dept.html',
})
export class SelectDeptPage {
  filter:string;
  deptList:any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient:HttpClient,
              private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectDeptPage');
  }

  getFilterList(event:Event){
    console.log(this.filter);

    this.httpClient.post(COMMON_SELECT_DEPT,JSON.stringify({'filter':this.filter})).map(res=>res.json()).subscribe(res=>{
      this.deptList= res['deptList'];
    })
  }

  selectItem(dept:any){
    this.viewCtrl.dismiss({item:dept});
  }

  dismiss(){
    this.viewCtrl.dismiss({type:2});
  }


}
