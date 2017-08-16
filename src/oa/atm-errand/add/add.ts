import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AtmErrand_Add_Detail_Label, AtmErrand_Add_Label, AtmErrandBill} from "../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidateService} from "../../../providers/validate-service";
import {HttpClient} from "../../../providers/http-client";
import {ATM_ERRAND_ADD} from "../../../api/api";
import {AtmErrandAddDetailPage} from "./add-detail/add-detail";

@IonicPage()
@Component({
  selector: 'atm-errand-add',
  templateUrl: 'add.html',
})
export class AtmErrandAddPage {
  private label:any = AtmErrand_Add_Label;

  private errandBillLabel:any = AtmErrand_Add_Detail_Label;

  private addForm:FormGroup;

  private errandBillList: AtmErrandBill[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder:FormBuilder,
              public validateService:ValidateService,
              public toastCtrl:ToastController,
              public httpClient:HttpClient,private events:Events) {

    this.addForm = this.formBuilder.group({
      errander:['wjli',Validators.required],
      deptId:['',Validators.required],
      errandMonth:['',Validators.required],
      note:['',Validators.required]
    })


    this.events.subscribe('atm-errand-add-detail:addDetail', (errandBill:AtmErrandBill) => {
      this.errandBillList.push(errandBill);
      console.log(this.errandBillList);
    });

    this.events.subscribe('atm-errand-add-detail:modDetail', (res:any) => {
      const index = res['index'];
      this.errandBillList[index]=res['detail'];
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addSubmit(){
    if(this.validateService.checkFormBeforeSubmit(this.addForm,this.label)){

      if(this.errandBillList.length === 0){
        this.toastCtrl.create({
          message: '请添加公假明细',
          position: 'middle',
          duration: 1000,
          cssClass:'toast-text-center'
        }).present();
      }else {
        //组装申请addForm信息 与 行程安排travel明细
        this.addForm.value['errandBillList']=this.errandBillList;
        this.httpClient.post(ATM_ERRAND_ADD,this.addForm.value).map(res=>res.json()).subscribe((res)=>{
          alert(JSON.stringify(res));
        })
      }

    }
  }

  deleteDetail(index:number){
    //数组移除元素（可作为公共方法）
    const b = this.errandBillList.slice(0,index) ;
    const e = this.errandBillList.slice(index+1,this.errandBillList.length+1);
    this.errandBillList = b.concat(e);
  }

  modDetail(index:number,detail:any){
    this.navCtrl.push(AtmErrandAddDetailPage, {
      index: index,
      detail: detail
    })
  }

  addSave(){

  }

}
