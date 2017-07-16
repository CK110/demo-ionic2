import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceStationPage } from './service-station';

@NgModule({
  declarations: [
    ServiceStationPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceStationPage),
  ],
  exports: [
    ServiceStationPage
  ]
})
export class ServiceStationPageModule {}
