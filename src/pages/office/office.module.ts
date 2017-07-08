import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficePage } from './office';
import { RollnoticeComponentModule } from '../../components/rollnotice/rollnotice.module';
import {NoticebarModule} from "../../components/noticebar/noticebar.module";

@NgModule({
  declarations: [
    OfficePage,
  ],
  imports: [
    IonicPageModule.forChild(OfficePage),
    RollnoticeComponentModule,
    NoticebarModule
  ],
  exports: [
    OfficePage
  ]
})
export class OfficePageModule {}
