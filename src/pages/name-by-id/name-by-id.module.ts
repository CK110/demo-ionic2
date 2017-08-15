import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NameByIdPage } from './name-by-id';

@NgModule({
  declarations: [
    NameByIdPage,
  ],
  imports: [
    IonicPageModule.forChild(NameByIdPage),
  ],
  exports: [
    NameByIdPage
  ]
})
export class NameByIdPageModule {}
