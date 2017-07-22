import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";
import { LOGIN }  from '../../api/api';
import {HttpService} from "../../providers/http-service";
import {UserData} from "../../providers/user-data";

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
              private userData:UserData,public viewController:ViewController) {

    this.loginForm = this.formBuilder.group({
      user: ['wjchen', Validators.required],
      password: ['000001',Validators.required],
    });
  }

  login(){
    if(this.loginForm.valid){

      let loading = this.loadingCtrl.create({
        content: '请稍后...',
        dismissOnPageChange:true
      });
      loading.present();

      this.httpService.post(LOGIN,this.loginForm.value).subscribe((res)=>{
        //登录信息存储到localStage,再跳转主页
        this.userData.loginSuccess(this.loginForm.value.user).then(()=>{
          // this.navCtrl.ro(TabsPage);
          // this.viewController.dismiss();

          this.navCtrl.setRoot(TabsPage);
        });
      })

    }
  }

}
