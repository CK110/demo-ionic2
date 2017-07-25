import { Injectable } from '@angular/core';
declare var window:any;

@Injectable()
export class JMessageHelper {
  constructor() { }

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

  getAllMessages(){
    window.JMessage.getAllMessages('single', 'kaichen', '', (event)=>{
      console.log(event);
    }, ()=>{

    })

  }

}
