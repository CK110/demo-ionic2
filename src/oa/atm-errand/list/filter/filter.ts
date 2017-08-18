import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {Filter} from "../../model";

/**
 * Generated class for the FilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'atm-errand-list-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  private filter:Filter= new Filter();

  constructor(public navCtrl: NavController,public viewController:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  filterSubmit(){
    this.viewController.dismiss();
  }

  selectClick(page:string){
    if(page === 'selectPerson'){
      this.navCtrl.push('SelectPersonPage');
    }
    if(page === 'selectDept'){
      this.navCtrl.push('SelectDeptPage');
    }
  }
}
