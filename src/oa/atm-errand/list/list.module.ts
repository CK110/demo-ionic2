import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandListPage } from './list';

@NgModule({
  declarations: [
    AtmErrandListPage,
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandListPage),
  ],
  exports: [
    AtmErrandListPage
  ]
})
export class ListPageModule {}
