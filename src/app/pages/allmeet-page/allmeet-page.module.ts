import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllmeetPageComponent } from './allmeet-page.component';
import { MeetupItemModule } from 'src/app/components/meetup-item/meetup-item.module';



@NgModule({
  declarations: [
    AllmeetPageComponent
  ],
  imports: [
    CommonModule,
    MeetupItemModule
  ]
})
export class AllmeetPageModule { }
