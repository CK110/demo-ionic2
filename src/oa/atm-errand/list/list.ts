import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AtmErrandApprovePage} from "../approve/approve";
import {AtmErrand} from "../model";
import {FilterPage} from "./filter/filter";

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
    this.navCtrl.push(AtmErrandApprovePage,{
      param: { processId:'1',taskId:'1'}
    });
  }

}
