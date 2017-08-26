import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import {ErrandApprovePage} from "../../oa/errand/approve/approve";
import {FilterPage} from "./filter/filter";
import {NativeService} from "../../providers/native-service";
import {HttpClient} from "../../providers/http-client";
import {TODO_LIST} from "../../api/api";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  brokenNetwork: boolean = false;
  type: string = "myApprove"; // 审批类型: 待我审批/我申请的

  searchFilter:object={
    filter:'',
    orderBy:'desc',
    page: '1',
    pagesize:'20'

  }; //输入的查询条件
  todolist:any[];
  searching: any = false;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public nativeService:NativeService,public httpClient:HttpClient) {
  }

  ionViewDidLoad() {
    if (!this.nativeService.isConnecting()) {
      this.brokenNetwork = true;
    }else {
      this.brokenNetwork = false;
      // 初始化数据
      this.getFilteredList();
    }
  }

  /**
   * 获取todo列表
   */
  getFilteredList(){
    this.httpClient.post(TODO_LIST,this.searchFilter,false).subscribe( res=>{
      this.todolist =res.json()['taskList'];
    })
  }

  async onSearchInput(){
    this.searching = true;
    await this.getFilteredList();
    this.searching = false;
  }

  changeOrderBy(){
    //更改时间排序方式，再起请求数据
  }

  /**
  * 跳转到流程审批详细页
  * @param todo
  */
 openNavDetailsPage(page) {
   if(page ==="errand"){
     this.navCtrl.push(ErrandApprovePage,{
       param: { processId:'1',taskId:'1'}
     });
   }
 }

 /**
  * 下拉刷新
  * @param refresher
  */
 async doRefresh(refresher){
   console.log('代办任务下拉刷新', refresher);
   await this.getFilteredList();
   refresher.complete();
 }

  /**
   * 类似京东过滤页面效果
   */
  openFilter(){
    this.modalCtrl.create(FilterPage, {}, {
      enterAnimation: 'modal-from-right-enter',
      leaveAnimation: 'modal-from-right-leave'
    }).present();
  }

}
