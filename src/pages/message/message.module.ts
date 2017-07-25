import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MessagePage} from "./message";
import {DemoPageModule} from "./demo/demo.module";

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    DemoPageModule
  ],
  exports: [
    MessagePage
  ]
})
export class MessagePageModule {}
