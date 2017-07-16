import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DormitoryPage } from './dormitory';

@NgModule({
  declarations: [
    DormitoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DormitoryPage),
  ],
  exports: [
    DormitoryPage
  ]
})
export class DormitoryPageModule {}
