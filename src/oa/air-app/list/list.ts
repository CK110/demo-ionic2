import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {FilterPage} from "./filter/filter";
import {AirApp, Filter} from "../model";
import {HttpClient} from "../../../providers/http-client";
import {AIR_APP_LIST} from "../../../api/api";
import {AirAppApprovePage} from "../approve/approve";

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'air-app-list',
  templateUrl: 'list.html',
})
export class AirAppListPage {

  private airAppList:AirApp[];
  private filter:Filter={
    addWho:'',
    errander:'',
    outComer:'',
    bookCorp:'',
    appType:'',
    formStatus:'',
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,public httpClient:HttpClient) {
    this.getAirAppList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  openFilter(){
    this.navCtrl.push(FilterPage);
  }

  getAirAppList(){
    this.httpClient.post(AIR_APP_LIST,this.filter).map(res=>res.json()).subscribe((res)=>{
      console.log(res);
      this.airAppList = res['list'];
    })
  }

  toApprovePage(airApp){
    this.navCtrl.push(AirAppApprovePage,{
      param: { bookAppId:'1',procInstId:'1'}
    });
  }

}
