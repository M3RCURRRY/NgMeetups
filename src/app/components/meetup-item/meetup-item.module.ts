import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupItemComponent } from './meetup-item.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    MeetupItemComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    MeetupItemComponent
  ]
})
export class MeetupItemModule { }
