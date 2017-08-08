import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ErrandAddPage} from "./add";

@NgModule({
  declarations: [
    ErrandAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ErrandAddPage),
  ],
  exports: [
    ErrandAddPage
  ]
})
export class ErrandAddPageModule {}
