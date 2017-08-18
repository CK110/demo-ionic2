import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from "../../../providers/http-client";
import {Approve, ApvRecord} from "../../../pages/common/batch-approve/model";
import {BatchApprovePage} from "../../../pages/common/batch-approve/batch-approve";
import {Errand_Approve_Batch_Current, Errand_Approve_Batch_Init} from "../../../api/api";

@IonicPage()
@Component({
  selector: 'errand-approve',
  templateUrl: 'approve.html',
})
export class ErrandApprovePage {

  activePage:number = 0;

  private pList:Approve[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpClient:HttpClient,
              private modalCtrl:ModalController,private toastCtrl:ToastController) {

    this.initInfo();
  }

  ionViewDidLoad() {

  }

  async initInfo() {
    // 1. 当前item 点击的流程的信息
    const param = this.navParams.get('param');

    let detail={};
    let otherParamList:any[]=[];

    await this.init(param).then(v=>{
      detail = v.detail;
      otherParamList= v.otherParam;
    })

    this.pList.push({
      param:param,
      detail:detail,
      apvRecord:new ApvRecord('3342313','34322432','后续工作'), // 初始赋值
      onlySave: false,
      hasInit:true
    })


    // 2. 其他代办流程的参数信息
    otherParamList.forEach(param=>{
      this.pList.push({
        param: param,
        detail:'',
        apvRecord:new ApvRecord('22123233','34321112432','后续工作'),
        onlySave: false,
        hasInit:false
      })
    })

    console.log(JSON.stringify(this.pList));
  }


  async init(param:any){
    let m = {
      detail:{},
      otherParam:[]
    }
    await this.httpClient.post(Errand_Approve_Batch_Init,param).map(res=>res.json()).subscribe((res)=>{
      m.detail = res['detail'];
      m.otherParam=res['other']

    })
    return m;
  }

  //滑动时查询当个页面
  async getDetail(param:any){ //不查询current
    let detail:any;
    await this.httpClient.post(Errand_Approve_Batch_Current,param).map(res=>res.json()).subscribe((res)=>{
      detail = res
    })
    return detail;
  }

  swipePage(event){
    const direction = event.direction;

    // 1. 校验表单信息
    const activeForm = this.pList[this.activePage].apvRecord;

    const r = this.validateForm(activeForm);

    if(r){
      //向左滑
      if(direction === 2){
        if(this.activePage != this.pList.length-1){
          this.activePage = this.activePage+1;

          //没有初始化,根据initParam得到审批所需要的初始信息 apvDetail
          if(!this.pList[this.activePage].hasInit){
            const initParam = this.pList[this.activePage]; //{ processId:'1',taskId:'1'},
            this.getDetail(initParam).then((res)=>{
              this.pList[this.activePage].detail= res['detail']
              this.pList[this.activePage].hasInit=true;
            })
          }
        }
      };

      //向右滑
      if(direction ===4){
        if(this.activePage != 0){
          this.activePage = this.activePage-1;
        }
      }

      console.log(this.activePage);
    }
  }


  toBatchApprovePage(){
    const needApvList =[];
    this.pList.filter(value=>{
      return value.apvRecord.apvPassed != '';
    }).forEach(val =>{
      needApvList.push(val.apvRecord);
    })

    console.dir(needApvList);

    if(needApvList.length===0){
      this.toastCtrl.create({
        message: '至少审批一个流程',
        position: 'middle',
        duration: 1000,
        cssClass:'toast-text-center'
      }).present();

    }else {
      let modal = this.modalCtrl.create(BatchApprovePage,
        { param: needApvList },
      )
      modal.onDidDismiss(data => {
        if(data.type === 1){
          this.navCtrl.pop();
        }
      });
      modal.present();
    }
  }


  validateForm(form:any){
    return true
  }

}
