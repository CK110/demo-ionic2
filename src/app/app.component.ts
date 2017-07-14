import { Component } from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
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
  // rootPage:any = TabsPage;
  rootPage:any;


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public userData: UserData,
              public nativeService:NativeService,
              public codePush:CodePush,
              public jPush: JPushPlugin,
              public toastCtrl:ToastController) {

    Promise.all([this.userData.checkHasSeenTutorial(), this.userData.hasLoggedIn()]).then((res)=>{
      if(res[0]){
       if(res[1]){
         this.rootPage = TabsPage;
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
      this.splashScreen.hide();

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

      // 极光推送
      this.jPush.init().then(()=>{

        this.userData.getUsername().then((username)=>{
          this.jPush.setAlias(''+username);
        })

      })


      this.registerBackButtonAction();
      this.assertNetwork();

    })
  }

  /**
   * 检查网络
   */
  assertNetwork() {
    if (!this.nativeService.isConnecting()) {
      this.toastCtrl.create({
        message: '未检测到网络,请连接网络',
        showCloseButton: true,
        closeButtonText: '确定'
      }).present();
    }
  }

  /**
   * TODO
   * 注册返回按键事件
   */
  registerBackButtonAction(){

  }


}
