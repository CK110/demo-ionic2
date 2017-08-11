import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppListPage } from './list';

@NgModule({
  declarations: [
    AirAppListPage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppListPage),
  ],
  exports: [
    AirAppListPage
  ]
})
export class AirAppListPageModule {}
