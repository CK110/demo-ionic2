import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandListPage } from './list';
import {FilterPage} from "./filter/filter";
import {SharedPipesModule} from "../../../pipes/sharedPipesModule";

@NgModule({
  declarations: [
    AtmErrandListPage,
    FilterPage
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandListPage),
    SharedPipesModule,
  ],
  exports: [
    AtmErrandListPage
  ],
  entryComponents:[FilterPage]

})
export class AtmErrandListPageModule {}
