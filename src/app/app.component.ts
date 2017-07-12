import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {UserData} from "../providers/user-data";
import {TabsPage} from "../pages/tabs/tabs";
import {TutorialPage} from "../pages/tutorial/tutorial";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any;


  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen,public userData: UserData) {
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
    });
  }
}
