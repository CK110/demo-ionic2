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
  private travelLabel:Travel =Travel_Label;

  private addTravel:FormGroup

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              private formBuilder:FormBuilder,private validateService:ValidateService,) {

    this.addTravel = this.formBuilder.group({
      departPlace: ['', [Validators.required]],
      arrivePlace: ['',[Validators.required]],
      departTime: ['', [Validators.required]],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addSubmit(){
    if(this.validateService.checkFormBeforeSubmit(this.addTravel,this.travelLabel)){

      this.events.publish('airApp:addTravel',this.addTravel.value);
      this.navCtrl.pop();

    }

  }

}
