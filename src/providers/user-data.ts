import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';



/**
 * 用户登录service
 */
@Injectable()
export class UserData {

  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  USE_TouchID = 'useTouchID';

  constructor(public events: Events,public storage: Storage) {

  }

  setUsername(username: string) {
    this.storage.set('username', username);
  };

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  loginSuccess(username: string) {
    return Promise.all([this.storage.set(this.HAS_LOGGED_IN, true),
      this.setUsername(username)]);
  };

  logout() {
    return Promise.all([this.storage.remove(this.HAS_LOGGED_IN),
      this.storage.remove('username')]);
  };

  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  hasSeenTutorial(){
    return this.storage.set('hasSeenTutorial', 'true');
  }

  checkHasSeenTutorial() {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    })
  };

  userSetting(setting:any){
    this.storage.set(this.USE_TouchID, setting);
  }

  getUserSetting(){
    return this.storage.get(this.USE_TouchID).then((value) => {
      return value;
    });
  }

}
