import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//模拟后台
import { fakeBackendProvider } from '../mock/mock';
import { HttpModule } from '@angular/http';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message';
import { TodoPage } from '../pages/todo/todo';
import { PersonPage } from '../pages/person/person';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OfficePageModule } from '../pages/office/office.module';

import { RollnoticeComponentModule } from '../components/rollnotice/rollnotice.module';
import {OA_PAGES} from "../oa/index";
import {ApprovehistoryModule} from "../components/approvehistory/approvehistory.module";
import {NoticebarModule} from "../components/noticebar/noticebar.module";
import {CallNumber} from "@ionic-native/call-number";
import {LoginPageModule} from "../pages/login/login.module";
import {HttpService} from "../providers/http-service";
import {GlobalData} from "../providers/global-data";
import {UserData} from "../providers/user-data";
import {IonicStorageModule} from "@ionic/storage";


const Custom_Provides =[
  HttpService,
  GlobalData,
  UserData
]

const Native_Provides=[
  CallNumber,
];

const Native_Module=[
  IonicStorageModule.forRoot()
]

const Third_Comonent_Module =[
  RollnoticeComponentModule,
  ApprovehistoryModule,
  NoticebarModule
];

const Tab_Root_Page = [MessagePage,TodoPage,ContactPage,PersonPage];
const Tab_Root_Page_Module = [OfficePageModule];


@NgModule({
  declarations: [
    MyApp,

    TabsPage,
    Tab_Root_Page,
    OA_PAGES,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
    }),
    Third_Comonent_Module,
    Tab_Root_Page_Module,
    LoginPageModule,
    Native_Module

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,
    Tab_Root_Page,
    OA_PAGES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Native_Provides,
    Custom_Provides,

    // 模拟后台的provider
    fakeBackendProvider,

  ]
})
export class AppModule {}
