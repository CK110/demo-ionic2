import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidateService} from "../../../providers/validate-service";
import {ErrandModel, Errand} from "../model";


@IonicPage()
@Component({
  selector: 'errand-add',
  templateUrl: 'add.html',
})
export class ErrandAddPage {
  private model:Errand = ErrandModel;

  private addForm:FormGroup;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              public navParams: NavParams,private validateService:ValidateService) {

    console.log(this.model);

    this.addForm = this.formBuilder.group({
      addUser: ['', Validators.required],
      number: ['',Validators.maxLength(3)]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addSubmit(){
    console.log(this.addForm);
    if(this.validateService.checkFormBeforeSubmit(this.addForm, this.model)){
      console.log("校验通过");
    }

  }

  addSave(){
    alert("addSave");
  }


}
