import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AtmErrandApprovePage} from "../approve/approve";
import {AtmErrand} from "../model";
import {FilterPage} from "./filter/filter";
import {AtmErrandViewPage} from "../view/view";

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'atm-errand-list',
  templateUrl: 'list.html',
})
export class AtmErrandListPage {

  private atmErrandList:any[]=[1,2,3];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  openFilter(){
    this.navCtrl.push(FilterPage);
  }

  toApprovePage(atmErrand:AtmErrand){
    //未结束流程进入审批页面
    // if(atmErrand.flowStatus === '0'){
    //   this.navCtrl.push(AtmErrandApprovePage,{
    //     param: { taskId:'1'}
    //   });
    // }else{
    //   this.navCtrl.push(AtmErrandViewPage,{
    //     param: { piId:'1',formId:'1'}
    //   });
    // }

    this.navCtrl.push(AtmErrandViewPage,{
      param: { piId:'1',formId:'1'}
    });
  }

}
