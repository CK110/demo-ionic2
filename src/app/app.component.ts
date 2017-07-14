import { Component } from '@angular/core';
import {ModalController, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {UserData} from "../providers/user-data";
import {TabsPage} from "../pages/tabs/tabs";
import {TutorialPage} from "../pages/tutorial/tutorial";
import {NativeService} from "../providers/native-service";
import {CodePush} from "@ionic-native/code-push";
import {JPushPlugin} from "../typings/modules/jpush/index";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public userData: UserData,
              public nativeService:NativeService,
              public codePush:CodePush,
              public jPush: JPushPlugin,
              public toastCtrl:ToastController,
              public modalCtrl:ModalController) {

    Promise.all([this.userData.checkHasSeenTutorial(), this.userData.hasLoggedIn()]).then((res)=>{
      if(res[0]){
       if(res[1]){
         this.rootPage = TabsPage;

         this.assertLockScreen();
       }else {
         this.rootPage = LoginPage;
       }
      }else {
       this.rootPage = TutorialPage;
      }
      this.initializeApp();
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

      // 更改启动动画
      this.splashScreen.hide();// this.modalCtrl.create(SplashPage).present();


      this.registerBackButtonAction();
      this.assertJPush();

      this.platform.resume.subscribe(()=>{
        this.assertNetwork();
        this.assertCodePush();
        this.assertLockScreen();
      })

    })
  }

  /**
   * 热更新
   */
  assertCodePush(){
    //热更新
    if (this.nativeService.isMobile()) {
      console.log('手机模式');
      this.platform.resume.subscribe(() =>{
        console.log('后台切换 - 热更新--> start');
        const downloadProgress = (progress) => { console.log(`Downloaded progress ${progress.receivedBytes} of ${progress.totalBytes}`); }

        this.codePush.sync({'updateDialog':true}, downloadProgress).subscribe((syncStatus) =>{
          console.log(syncStatus);
          console.log( '热更新 ios--> end');
        });
      });
    }
  }

  /**
   * 极光推送
   */
  assertJPush(){
    this.jPush.init();

    this.userData.getUsername().then((username)=>{
      this.jPush.setAlias(''+username);
    })
  }

  /**
   * 检查网络
   */
  assertNetwork() {
    if (!this.nativeService.isConnecting()) {
      this.toastCtrl.create({
        message: '未检测到网络,请连接网络',
        position: 'top'
      }).present();
    }
  }

  /**
   * TODO
   * 注册返回按键事件
   */
  registerBackButtonAction(){

  }

  /**
   * 检查是否需要指纹验证
   */
  assertLockScreen(){
    // 是否是iphone
    if(this.nativeService.isIos()){

      this.userData.getUserSetting().then((res)=>{
        if(res){
          let modal = this.modalCtrl.create('LockScreenPage');
          modal.present();
        }
      })

    }
  }


}
