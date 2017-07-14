import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ErrandApprovePage} from "../../oa/errand/approve/approve";

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  type: string = "myApprove"; // 审批类型: 待我审批/我申请的

  todolist:any[]=[
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
    {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  /**
  * 跳转到流程列表页
  */
 processList(){
  //  this.navCtrl.push(ProcessListPage);
 }

 /**
  * 跳转到流程审批详细页
  * @param todo
  */
 openNavDetailsPage(page) {
   if(page ==="errand"){
     this.navCtrl.push(ErrandApprovePage);
   }else{
    //  this.navCtrl.push(TodoDetailsPage, { todo: todo });

     // this.navCtrl.parent.push(TodoDetailsPage, { todo: todo })
   }

 }

 /**
  * 下拉刷新
  * @param refresher
  */
 doRefresh(refresher){
   console.log('代办任务下拉刷新', refresher);
  //  this.todoService.getTodoList().subscribe( list=>{
  //    console.log(list);
  //    this.todolist=list;
  //    refresher.complete();
  //  })

  setTimeout(()=>{
    refresher.complete();
  },1000)
 }

}
