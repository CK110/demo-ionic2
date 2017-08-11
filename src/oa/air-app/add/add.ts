import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AirApp, AirApp_Label, Travel, Travel_Label} from "../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidateService} from "../../../providers/validate-service";
import {HttpClient} from "../../../providers/http-client";
import {AIR_APP_ADD} from "../../../api/api";

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'air-app-add',
  templateUrl: 'add.html',
})
export class AirAppAddPage {

  private label:AirApp = AirApp_Label;
  private travelLabel:Travel =Travel_Label;

  private addForm:FormGroup;

  //行程安排
  private travelList:Travel[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private validateService:ValidateService,
              private httpClient:HttpClient,
              public events: Events,
              private toastCtrl:ToastController) {

    this.addForm = this.formBuilder.group({
      errander: "",
      projectId: ['',[Validators.required]],
      dispatcher: ['', [Validators.required]],
      departDate: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      note: ['']
    });


    this.events.subscribe('airApp:addTravel', (travel:Travel) => {
      console.log(travel);
      this.travelList.push(travel);
      console.log(this.travelList);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  viewWillUnload(){
    this.events.unsubscribe('airApp:addTravel');
  }

  addTravel(){

  }

  addSubmit(){

    if(this.validateService.checkFormBeforeSubmit(this.addForm,this.label)){

      if(this.travelList.length === 0){
        this.toastCtrl.create({
          message: '请添加行程安排',
          position: 'middle',
          duration: 1000,
          cssClass:'toast-text-center'
        }).present();
      }else {
        //组装申请addForm信息 与 行程安排travel明细
        this.addForm.value['travel']=this.travelList;
        this.httpClient.post(AIR_APP_ADD,this.addForm.value).map(res=>res.json()).subscribe((res)=>{
          alert(JSON.stringify(res));
        })
      }

    }
  }

  addSave(){

  }

  deleteTravel(){
    alert('删除行程');
  }

  add(){
    this.travelList.push({
      departPlace: "",
      arrivePlace:"",
      departTime: "",
    })
  }

}
