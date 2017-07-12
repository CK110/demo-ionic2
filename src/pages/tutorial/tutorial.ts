import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../login/login";
import {UserData} from "../../providers/user-data";

/**
 * Generated class for the TutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  showSkip = true;

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public userData:UserData) {

  }

  startApp() {

    this.userData.hasLoggedIn().then(hasLoggedIn=>{

      let nextPage:any;
      if(hasLoggedIn){
        nextPage = TabsPage
      }else{
        nextPage = LoginPage
      }

      this.userData.hasSeenTutorial().then(()=>{
        this.navCtrl.push(nextPage)
      })
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }
}
