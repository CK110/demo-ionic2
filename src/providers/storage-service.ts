import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {

  private username:string;
  private token:string;

  constructor(private storage:Storage){}

  async getUsername() {
    await this.getCurrentUser().then((res)=>{
      this.username= res['username'];
    })
    return this.username;
  };


  async getToken(){
    await this.getCurrentUser().then((res)=>{
      this.token= res['token'];
    })
    return this.token;
  }

  setCurrentUser(username:string,token:string){
    this.storage.set('currentUser', JSON.stringify({ username: username, token: token }));
  }

  getCurrentUser(){
    return this.storage.get('currentUser');
  }


}
