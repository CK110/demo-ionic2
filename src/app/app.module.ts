import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message';
import { TodoPage } from '../pages/todo/todo';
import { PersonPage } from '../pages/person/person';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OfficePageModule } from '../pages/office/office.module';

import { RollnoticeComponentModule } from '../components/rollnotice/rollnotice.module';

const Third_Comonent_Module =[RollnoticeComponentModule];

const Tab_Root_Page = [MessagePage,TodoPage,ContactPage,PersonPage];
const Tab_Root_Page_Module = [OfficePageModule];


@NgModule({
  declarations: [
    MyApp,

    TabsPage,
    Tab_Root_Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Third_Comonent_Module,
    Tab_Root_Page_Module,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,
    Tab_Root_Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
