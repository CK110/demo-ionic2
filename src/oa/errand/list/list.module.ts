import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrandListPage } from './list';
import {SharedPipesModule} from "../../../pipes/sharedPipesModule";
import {FilterPage} from "./filter/filter";

@NgModule({
  declarations: [
    ErrandListPage,
    FilterPage
  ],
  imports: [
    IonicPageModule.forChild(ErrandListPage),
    SharedPipesModule,
  ],
  exports: [
    ErrandListPage,
  ],
  entryComponents:[FilterPage]
})
export class ErrandListPageModule {}
