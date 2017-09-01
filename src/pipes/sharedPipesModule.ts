import { NgModule } from '@angular/core';
import {CurrentTaskPipe} from "./current-task/current-task";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    exports: [CurrentTaskPipe],
    declarations: [CurrentTaskPipe],
    providers: [],
})
export class SharedPipesModule {
}
