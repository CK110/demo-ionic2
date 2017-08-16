import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AtmErrand_Add_Detail_Label, AtmErrandBill} from "../../model";
import {ValidateService} from "../../../../providers/validate-service";

/**
 * Generated class for the AddDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'atm-errand-add-detail',
  templateUrl: 'add-detail.html',
})
export class AtmErrandAddDetailPage {
  private label:any = AtmErrand_Add_Detail_Label;
  private addForm:FormGroup;

  private index:number;

  private addType:boolean = true;

  private detail:any = {    // 用作修改明细时接受参数
    dispatcher:'',
    departPlace:'',
    arrivePlace:'',
    errandType:'',
    departDate:'',
    days:'',
    travelType:''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder:FormBuilder,
              public validateService:ValidateService,
              public events:Events) {

    this.addForm = this.formBuilder.group({
      dispatcher:['',Validators.required],
      departPlace:['',Validators.required],
      arrivePlace:['',Validators.required],
      errandType:['',Validators.required],
      departDate:['',Validators.required],
      days:['',Validators.required],
      travelType:['',Validators.required],
    })
  }

  ionViewDidLoad() {
    this.index = this.navParams.get('index');
    this.detail = this.navParams.get('detail');
    if(this.detail){
      this.addType = false;

      this.addForm.controls['dispatcher'].setValue(this.detail.dispatcher);
      this.addForm.controls['departPlace'].setValue(this.detail.departPlace);
      this.addForm.controls['arrivePlace'].setValue(this.detail.arrivePlace);
      this.addForm.controls['errandType'].setValue(this.detail.errandType);
      this.addForm.controls['departDate'].setValue(this.detail.departDate);
      this.addForm.controls['days'].setValue(this.detail.days);
      this.addForm.controls['travelType'].setValue(this.detail.travelType);
    }
  }


  addSubmit(){
    if(this.validateService.checkFormBeforeSubmit(this.addForm,this.label)){
      this.events.publish('atm-errand-add-detail:addDetail',this.addForm.value);
      this.navCtrl.pop();
    }
  }

  modSubmit(){
    if(this.validateService.checkFormBeforeSubmit(this.addForm,this.label)){
      const param = {
        index:this.index,
        detail:this.addForm.value
      }

      this.events.publish('atm-errand-add-detail:modDetail',param);
      this.navCtrl.pop();
    }
  }

}
