import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Errand, Filter} from "../model";
import {HttpClient} from "../../../providers/http-client";
import {ERRAND_APP_LIST} from "../../../api/api";
import {FilterPage} from "./filter/filter";

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'errand-list',
  templateUrl: 'list.html',
})
export class ErrandListPage {
  private errandList:Errand[];

  private filter:Filter = new Filter();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpClient:HttpClient) {

    this.getErrandList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  getErrandList(){
    this.httpClient.post(ERRAND_APP_LIST,this.filter).map(res=>res.json()).subscribe((res)=>{
      this.errandList = res['errandList'];
    })
  }

  openFilter(){
    debugger;
    this.navCtrl.push(FilterPage);
  }

}
