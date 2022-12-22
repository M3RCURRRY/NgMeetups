import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorPageComponent } from './creator-page.component';
import { MeetupFormModule } from 'src/app/components/meetup-form/meetup-form.module';



@NgModule({
  declarations: [
    CreatorPageComponent
  ],
  imports: [
    CommonModule,
    MeetupFormModule
  ]
})
export class CreatorPageModule { }
