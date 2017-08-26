import { Component } from '@angular/core';
import { ModalController, NavController, ViewController} from 'ionic-angular';
import {Filter, Filter_Label} from "../../model";
import {SelectPersonPage} from "../../../../pages/common/select-person/select-person";
import {SelectDeptPage} from "../../../../pages/common/select-dept/select-dept";

@Component({
  selector: 'errand-list-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  private label:any = Filter_Label;

  private filter:Filter= new Filter();

  constructor(public navCtrl: NavController,
              public viewController:ViewController,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  filterSubmit(){
    this.viewController.dismiss();
  }

  selectClick(page:string){
    if(page === 'selectPerson'){
      let modal = this.modalCtrl.create(SelectPersonPage);
      //得到选择的item
      modal.onDidDismiss(data => {
        console.log(data)
      });
      modal.present();
    }
    if(page === 'selectDept'){
      let modal = this.modalCtrl.create(SelectDeptPage);
      modal.onDidDismiss(data => {
        console.log(data)
      });
      modal.present();
    }
  }
}
