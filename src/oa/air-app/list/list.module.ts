import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppListPage } from './list';
import {FilterPageModule} from "./filter/filter.module";

@NgModule({
  declarations: [
    AirAppListPage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppListPage),
    FilterPageModule
  ],
  exports: [
    AirAppListPage
  ]
})
export class AirAppListPageModule {}
