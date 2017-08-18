import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandListPage } from './list';
import {FilterPage} from "./filter/filter";

@NgModule({
  declarations: [
    AtmErrandListPage,
    FilterPage
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandListPage),
  ],
  exports: [
    AtmErrandListPage
  ],
  entryComponents:[FilterPage]

})
export class AtmErrandListPageModule {}
