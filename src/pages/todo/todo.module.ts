import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {TodoPage} from "./todo";
import {FilterPageModule} from "./filter/filter.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TodoPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoPage),
    FilterPageModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TodoPage
  ]
})
export class TodoPageModule {}
