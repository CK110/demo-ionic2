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
import {TutorialPageModule} from "../pages/tutorial/tutorial.module";
import {NativeService} from "../providers/native-service";
import {CodePush} from "@ionic-native/code-push";
// import {JPushPlugin} from "../typings/modules/jpush/index";
import {Network} from "@ionic-native/network";
import {Toast} from "@ionic-native/toast";
import {TouchID} from "@ionic-native/touch-id";
import {DatePicker} from "@ionic-native/date-picker";
import {SplashPageModule} from "../pages/splash/splash.module";
import {ContactsPageModule} from "../pages/contacts/contacts.module";
import {JPush} from "ionic3-jpush";

import {AppAvailability} from "@ionic-native/app-availability";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {ToolPageModule} from "../pages/message/tool/tool.module";
import { Camera } from '@ionic-native/camera';
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {PersonPagePageModule} from "../pages/person/person.module";
import {IonicImageViewerModule} from "ionic-img-viewer";



const Custom_Provides =[
  HttpService,
  GlobalData,
  UserData,
  NativeService
]

const Native_Provides=[
  CallNumber,
  CodePush,
  // JPushPlugin,
  JPush,
  Network,
  Toast,
  TouchID,
  DatePicker,

  AppAvailability, // 其他app是否可用
  InAppBrowser, //打开其他app

  BarcodeScanner, //二维码
  Camera, // 拍照
  PhotoViewer, // 照片查看
];

const Native_Module=[
  IonicStorageModule.forRoot({
    name: 'myApp',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
  })
]

const Third_Comonent_Module =[
  RollnoticeComponentModule,
  ApprovehistoryModule,
  NoticebarModule,
  IonicImageViewerModule
];

const Tab_Root_Page = [
  MessagePage,
  TodoPage,
  ContactPage,
];
const Tab_Root_Page_Module = [
  OfficePageModule,
  TutorialPageModule,
  SplashPageModule,
  ContactsPageModule,
  ToolPageModule,
  PersonPagePageModule
];


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
      tabsHideOnSubPages: true, // 隐藏非rootPage的tab标签
      mode:'ios', // 样式统一ios
      backButtonText: '' //返回按钮只显示图标
    }),
    Third_Comonent_Module,
    Tab_Root_Page_Module,
    LoginPageModule,
    Native_Module,

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
