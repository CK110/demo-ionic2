import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ATM_Errand_APPROVE_BATCH_INIT, ATM_ERRAND_APPROVE_INIT} from "../../../api/api";
import {HttpClient} from "../../../providers/http-client";
import {BatchApprovePage} from "../../../pages/common/batch-approve/batch-approve";
import {ApvRecord} from "../../../pages/common/common-model";

@IonicPage()
@Component({
  selector: 'atm-errand-approve',
  templateUrl: 'approve.html',
})
export class AtmErrandApprovePage {
  activePage:number = 0;
  private pList:any[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient:HttpClient,
              public toastCtrl:ToastController,
              public modalCtrl:ModalController) {
    this.initInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovePage');
  }


  /**
   * 初始化批量审批页面
   * @returns {Promise<void>}
   */
  async initInfo() {
    const param = this.navParams.get('param');

    // 1. 当前item点击的流程的的相信信息
    let currentDetail={};
    // 2. 其他流程的参数数组
    let otherParamList:any[]=[];

    await this.init(param).then(v=>{
      currentDetail = v.detail;
      otherParamList= v.otherParam;
    })

    this.pList.push({
      param:param,
      detail:currentDetail, //后端获取的
      apvRecord:new ApvRecord('3342313','34322432','后续工作'), // 初始赋值（根据从后端获取的detail）
      onlySave: false,
      hasInit:true  //已经初始化，滑动时不init
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

  /**
   * 获取初始化批量审批页面所需要的数据
   * @param param
   * @returns {Promise<{detail: {}, otherParam: Array}>}
   */
  async init(param:any){
    let m = {
      detail:{},
      otherParam:[]
    }
    await this.httpClient.post(ATM_Errand_APPROVE_BATCH_INIT,param).map(res=>res.json()).subscribe((res)=>{
      m.detail = res['detail'];
      m.otherParam=res['other']

    })
    return m;
  }

  /**
   * 滑动审批
   * @param event
   */
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

  /**
   * 滑动，需要对当前页面表单信息进行校验
   * @param form
   * @returns {boolean}
   */
  validateForm(form:any){

    return true
  }

  /**
   * 滑动，初始化下个页面，所需要的数据
   * @param param
   * @returns {Promise<any>}
   */
  async getDetail(param:any){ //不查询current
    let detail:any;
    await this.httpClient.post(ATM_ERRAND_APPROVE_INIT,param).map(res=>res.json()).subscribe((res)=>{
      detail = res
    })
    return detail;
  }

  /**
   * 跳转到批量审批提交界面
   *
   * 组合出页面需要的数据
   *
   */
  toBatchApprovePage(){
    const needApvList =[];
    this.pList.filter(value=>{
      return value.apvRecord.apvPassed != ''; //排除没有填写审批的
    }).forEach(val =>{
      needApvList.push(val.apvRecord); //将pList对象中的apvRecord提取
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
      let modal = this.modalCtrl.create(BatchApprovePage, { param: needApvList },);
      modal.onDidDismiss(data => {
        // 1:代表是提交操作
        if(data.type === 1){
          this.navCtrl.pop();
        }
      });
      modal.present();
    }
  }


}
