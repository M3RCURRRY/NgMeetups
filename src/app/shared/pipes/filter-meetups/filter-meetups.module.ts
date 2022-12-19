import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMeetupsPipe } from './filter-meetups.pipe';



@NgModule({
  declarations: [
    FilterMeetupsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterMeetupsPipe
  ]
})
export class FilterMeetupsModule { }
