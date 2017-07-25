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
// import {JPushPlugin} from "../typings/modules/jpush/index";
import {JPush} from "ionic3-jpush";

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
              // public jPush: JPushPlugin,
              public jPush: JPush,
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
      // this.assertJPush(); //极光配置
      // this.nativeService.detectionUpgrade();//检测app是否升级


      this.platform.resume.subscribe(()=>{
        this.assertNetwork();
        this.assertCodePush();
        this.assertLockScreen();
        // this.nativeService.detectionUpgrade();//检测app是否升级

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
    this.jPush.init().then((res)=>{
      console.log("jPush.init() sucess"+ JSON.stringify(res));
    }).catch((err)=>{
      console.log("jPush.init() err "+ JSON.stringify(err));
    });

    //JPush服务器给客户端返回一个唯一的该设备的标识
    this.jPush.getRegistrationID().then((res)=>{
      console.log( `getRegistrationID() --> ${JSON.stringify(res)}` )
    })

    this.userData.getUsername().then((username)=>{
      this.jPush.setAlias(''+username);
    });

    //设置tag，可以区分ios，android
    console.log("setTags() platforms--->"+ this.platform.platforms());
    this.jPush.setTags(this.platform.platforms()).then((res)=>{
      console.log("setTags() res --->" + JSON.stringify(res));
    }).catch((error)=>{
      console.log("setTags() error --->" + JSON.stringify(error));
    })


    // 判断系统设置中是否允许当前应用推送
    this.jPush.getUserNotificationSettings().then((result)=>{
      if(result == 0) {
        console.log("系统设置中已关闭应用推送" + result);
      } else if(result > 0) {
        console.log("系统设置中打开了应用推送" + result);
      }
    })

    // 获取点击通知内容
    this.jPush.openNotification().subscribe((event)=>{
      console.log(`openNotification()--> ${JSON.stringify(event)}`)
      let content
      if(this.nativeService.isAndroid()) {
        content = event
        alert(`Android 获取点击通知内容 openNotification--> ${JSON.stringify(content)}`)
      } else {
        content = event.aps
        alert(`ios 获取点击通知内容 openNotification--> ${JSON.stringify(content)}`)
      }
    });

    //获取通知内容
    this.jPush.receiveNotification().subscribe((event)=>{
      console.log(`receiveNotification() --> ${JSON.stringify(event)}`)
      let content
      if(this.nativeService.isAndroid()) {
        content = event
        alert(`Android 获取点击通知内容 openNotification--> ${JSON.stringify(content)}`)
      } else {
        content = event.aps
        alert(`ios 获取点击通知内容 openNotification--> ${JSON.stringify(content)}`)
      }
    });

    //收到自定义消息时触发这个事件，推荐使用事件的方式传递。
    this.jPush.receiveMessage().subscribe((event)=>{
      console.log(`receiveMessage()--> ${JSON.stringify(event)}`)
      var message
      if(this.nativeService.isAndroid()) {
        message = event.message;
      } else {
        message = event.content;
      }
      alert("收到自定义消息时 receiveMessage:" + message)
    });

    //ios 应用程序处于后台时收到推送会触发该事件，可以在后台执行一段代码。
    document.addEventListener("jpush.backgroundNotification", function(event) {
      var alertContent;
      alertContent = event['aps'].alert;
      alert("ios backgroundNotification:" + alertContent);
    } , false)


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
