import { Injectable } from '@angular/core';
import {AlertController} from "ionic-angular";
declare var window:any;

@Injectable()
export class JMessageHelper {
  constructor(public alertCtrl:AlertController) { }

  /**
   * 注册
   * @param username 用户名
   * @param password 密码
   */
  register(username:string, password:string){
    window.JMessage.register(username, password, (res)=>{
      console.log("JMessage 注册成功"+res);
    }, (error)=>{
      console.log("JMessage 注册失败"+error);
    })
  }


  /**
   * 登录
   * @param username
   * @param password
   */
  login(username:string, password:string){
    window.JMessage.login(username, password,  (res)=>{
      console.log("JMessage 登录成功"+res);
    }, (error)=>{
      console.log("JMessage 登录失败"+error);
    })
  }

  /**
   * 注销
   */
  loginOut(){
    window.JMessage.logout((success)=>{
      console.log('loginOut success:'+ success)
    }, (error)=>{
      console.log('loginOut error:'+ error)

    })

  }

  /**
   * 监听消息
   */
  onReceiveMessage(){

    /**
     * 增加消息监听
     */
    document.addEventListener('jmessage.onReceiveMessage', (event:any)=>{
      var conversation = event.conversation	// 会话对象
      var messageArr = event.messageList		// 离线消息数组

      console.log(JSON.stringify(conversation));
      console.log(JSON.stringify(messageArr));

      this.alertCtrl.create({
        title: 'jmessage onReceiveMessage',
        subTitle: JSON.stringify(event),
        buttons: ['OK']
      }).present();
    }, false)

  }

}
