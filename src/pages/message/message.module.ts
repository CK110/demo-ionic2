import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MessagePage} from "./message";
import {DemoPageModule} from "./demo/demo.module";
import {ContactPage} from "./contract/contact";
import {IndexListModule} from "../../components/index-list/index-list.module";

@NgModule({
  declarations: [
    MessagePage,
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    DemoPageModule,
    IndexListModule
  ],
  exports: [
    MessagePage
  ],
  entryComponents:[ContactPage]
})
export class MessagePageModule {}
