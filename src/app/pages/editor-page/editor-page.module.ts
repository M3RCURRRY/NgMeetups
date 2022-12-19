import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorPageComponent } from './editor-page.component';
import { MeetupFormModule } from 'src/app/components/meetup-form/meetup-form.module';



@NgModule({
  declarations: [
    EditorPageComponent
  ],
  imports: [
    CommonModule,
    MeetupFormModule
  ]
})
export class EditorPageModule { }
