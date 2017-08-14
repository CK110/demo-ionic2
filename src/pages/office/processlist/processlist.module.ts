import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcesslistPage } from './processlist';

@NgModule({
  declarations: [
    ProcesslistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcesslistPage),
  ],
  exports: [
    ProcesslistPage
  ]
})
export class ProcesslistPageModule {}
