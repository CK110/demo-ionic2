import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppListPage } from './list';
import {FilterPageModule} from "./filter/filter.module";
import {SharedPipesModule} from "../../../pipes/sharedPipesModule";

@NgModule({
  declarations: [
    AirAppListPage
  ],
  imports: [
    IonicPageModule.forChild(AirAppListPage),
    FilterPageModule,
    SharedPipesModule
  ],
  exports: [
    AirAppListPage
  ]
})
export class AirAppListPageModule {}
