import { Component } from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';

/**
 * Generated class for the FilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  constructor(public navCtrl: NavController,public viewController:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  submit(){
    this.viewController.dismiss();
  }
}
