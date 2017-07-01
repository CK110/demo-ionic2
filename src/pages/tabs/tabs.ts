import { Component } from '@angular/core';

import { MessagePage } from '../message/message';
import { ContactPage } from '../contact/contact';
import { TodoPage } from '../todo/todo';
import { OfficePage } from "../office/office";
import { PersonPage } from "../person/person";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagePage;
  tab2Root = TodoPage;
  tab3Root = OfficePage;
  tab4Root = ContactPage;
  tab5Root = PersonPage;

  constructor() {

  }
}
