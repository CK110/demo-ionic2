import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'errand-approve',
  templateUrl: 'approve.html',
})
export class ErrandApprovePage {

  apvHistoryList:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams , private http:Http) {
    this.http.get('/api/getApvHistory').subscribe((res)=>{
      this.apvHistoryList = JSON.parse(res.text())
      console.log(this.apvHistoryList);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }

}
