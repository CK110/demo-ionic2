import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Travel, Travel_Label} from "../../model";
import {ValidateService} from "../../../../providers/validate-service";

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'air-app-add-travel',
  templateUrl: 'add.html',
})
export class AirAppAddTravelPage {
  private label:any =Travel_Label;

  private addForm:FormGroup;

  private index:number;
  private addType:boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              private formBuilder:FormBuilder,private validateService:ValidateService,) {

    this.addForm = this.formBuilder.group({
      departPlace: ['', [Validators.required]],
      arrivePlace: ['',[Validators.required]],
      departTime: ['', [Validators.required]],
    })
  }

  ionViewDidLoad() {
    this.index = this.navParams.get('index');
    const detail = this.navParams.get('detail');
    if(detail){
      this.addType = false;

      this.addForm.controls['departPlace'].setValue(detail.departPlace);
      this.addForm.controls['arrivePlace'].setValue(detail.arrivePlace);
      this.addForm.controls['departTime'].setValue(detail.departTime);
    }
  }

  addSubmit(){
    if(this.validateService.checkFormBeforeSubmit(this.addForm,this.label)){

      this.events.publish('air-app-add-deatil:addDetail',this.addForm.value);
      this.navCtrl.pop();

    }

  }

  modSubmit(){
    if(this.validateService.checkFormBeforeSubmit(this.addForm,this.label)){
      const param = {
        index:this.index,
        detail:this.addForm.value
      }

      this.events.publish('air-app-add-deatil:modDetail',param);
      this.navCtrl.pop();
    }
  }

}
