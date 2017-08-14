import { Component } from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {Filter} from "../../model";

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

  private filter:Filter={
    addWho:"",
    errander:"",
    outComer:"",
    bookCorp:"",
    appType:"",
    formStatus:""
  };

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

  }
}
