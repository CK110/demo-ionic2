import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppListPage } from './list';
import {FilterPageModule} from "./filter/filter.module";
import {CurrentTaskPipe} from "../../../pipes/current-task/current-task";

@NgModule({
  declarations: [
    AirAppListPage,
    CurrentTaskPipe
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
