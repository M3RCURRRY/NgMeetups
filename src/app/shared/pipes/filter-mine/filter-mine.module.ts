import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMinePipe } from './filter-mine.pipe';



@NgModule({
  declarations: [
    FilterMinePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterMinePipe
  ]
})
export class FilterMineModule { }
