import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MymeetPageComponent } from './mymeet-page.component';
import { MeetupItemModule } from 'src/app/meetup-item/meetup-item.module';
import { FilterMinePipe } from 'src/app/shared/pipes/filter-mine/filter-mine.pipe';



@NgModule({
  declarations: [
    MymeetPageComponent,
    FilterMinePipe
  ],
  imports: [
    CommonModule,
    MeetupItemModule
  ]
})
export class MymeetPageModule { }
