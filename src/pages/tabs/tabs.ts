import { Component } from '@angular/core';

import { MessagePage } from '../message/message';
import { TodoPage } from '../todo/todo';
import { OfficePage } from "../office/office";
import { PersonPage } from "../person/person";
import {ContactsPage} from "../contacts/contacts";
import {Events} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagePage;
  tab1BadgeCount : number = 12;
  tab2Root = TodoPage;
  tab2BadgeCount : number = 10;

  tab3Root = OfficePage;
  tab4Root = ContactsPage;
  tab5Root = PersonPage;

  constructor(public events: Events) {

  }

  ionViewWillEnter() {
    this.subscribeToBadgeCountChange();
  }

  subscribeToBadgeCountChange(){
    // 订阅tab1 badge更新
    this.events.subscribe("tabs-tab1-page:badge-update", (number)=>{
      console.log("xxx");
      console.log(number);
      this.tab1BadgeCount = number;
    });

    // 订阅tab2 badge更新，
    this.events.subscribe("tabs-tab2-page:badge-update", (number)=>{
      this.tab2BadgeCount = number;
    });
  }


}
