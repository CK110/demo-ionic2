import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {FilterPage} from "./filter/filter";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  openFilter(){
    // this.modalCtrl.create(FilterPage, {}, {
    //   enterAnimation: 'modal-from-right-enter',
    //   leaveAnimation: 'modal-from-right-leave'
    // }).present();

    this.navCtrl.push(FilterPage);
  }

}
