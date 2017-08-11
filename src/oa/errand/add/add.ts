import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidateService} from "../../../providers/validate-service";
import {Form_Label, Errand} from "../model";
import {HttpClient} from "../../../providers/http-client";
import {ERRAND_APP_ADD} from "../../../api/api";

@IonicPage()
@Component({
  selector: 'errand-add',
  templateUrl: 'add.html',
})
export class ErrandAddPage {
  private label:Errand = Form_Label;

  private addForm:FormGroup;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              public navParams: NavParams,
              private validateService:ValidateService,private httpClient:HttpClient) {

    this.addForm = this.formBuilder.group({
      dispatcher: ['', [Validators.required,Validators.maxLength(3)]],
      projectId: ['',[Validators.required]],
      departPlace: ['', [Validators.required]],
      arrivePlace: ['', [Validators.required]],
      departDate: ['', [Validators.required]],
      days: ['', [Validators.required]],
      reason: ['', [Validators.required,Validators.maxLength(200)]],
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addSubmit(){
    if(this.validateService.checkFormBeforeSubmit(this.addForm, this.label)){
      console.log("校验通过");
      this.httpClient.post(ERRAND_APP_ADD,this.addForm.value).map(res=>res.json()).subscribe((res)=>{
        console.log(res);
      })
    }

  }

  addSave(){
    alert("addSave");
  }


}
