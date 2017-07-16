import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDepartmentPage } from './my-department';

@NgModule({
  declarations: [
    MyDepartmentPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDepartmentPage),
  ],
  exports: [
    MyDepartmentPage
  ]
})
export class MyDepartmentPageModule {}
