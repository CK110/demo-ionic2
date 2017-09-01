import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrandViewPage } from './view';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";

@NgModule({
  declarations: [
    ErrandViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ErrandViewPage),
    ApprovehistoryModule
  ],
  exports: [
    ErrandViewPage
  ]
})
export class ErrandViewPageModule {}
