import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";
import { LOGIN }  from '../../api/api';
import {HttpService} from "../../providers/http-service";
import {UserData} from "../../providers/user-data";
import {JMessageHelper} from "../../providers/jmessage-helper";
import {Http} from "@angular/http";
import {NativeService} from "../../providers/native-service";
import {StorageService} from "../../providers/storage-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private loadingCtrl: LoadingController,
              private httpService:HttpService,
              private userData:UserData,
              public viewController:ViewController,
              public jMessageHelper:JMessageHelper,
              public http:Http,
              private nativeService:NativeService,
              private storageService:StorageService,
              private toastCtrl:ToastController) {

    this.loginForm = this.formBuilder.group({
      username: ['wjchen', Validators.required],
      password: ['000001',Validators.required],
    });
  }

   login(){
    if(this.loginForm.valid){

      // let loading = this.loadingCtrl.create({
      //   content: '请稍后...',
      //   dismissOnPageChange:true
      // });
      // loading.present();

      let param = this.loginForm.value;
      param['uuid'] = this.nativeService.getDeviceUUID();

      this.httpService.post(LOGIN,param).map(res => res.json()).subscribe( async (data)=>{
        // this.jMessageHelper.login(this.loginForm.value.user,this.loginForm.value.password);
        if(data['code'] === 0){
          //登录信息存储到localStage,再跳转主页
          await this.storageService.setCurrentUser(data['data'].username,data['data'].token);

          this.navCtrl.setRoot(TabsPage);

          this.storageService.getCurrentUser().then((res)=>{
            console.log(`当前用户信息:${JSON.stringify(res)}`);
          })
        }else{
          this.toastCtrl.create({
            message: data['data'].message,
            duration: 1000,
            position: 'top'
          }).present();
        }
      })

    }
  }

}
