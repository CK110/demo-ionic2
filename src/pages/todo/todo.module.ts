import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {TodoPage} from "./todo";
import {FilterPageModule} from "./filter/filter.module";

@NgModule({
  declarations: [
    TodoPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoPage),
    FilterPageModule
  ],
  exports: [
    TodoPage
  ]
})
export class TodoPageModule {}
