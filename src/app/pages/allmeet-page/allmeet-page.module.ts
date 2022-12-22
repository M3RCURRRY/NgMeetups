import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllmeetPageComponent } from './allmeet-page.component';
import { MeetupItemModule } from 'src/app/components/meetup-item/meetup-item.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterMeetupsModule } from 'src/app/shared/pipes/filter-meetups/filter-meetups.module';



@NgModule({
  declarations: [
    AllmeetPageComponent
  ],
  imports: [
    CommonModule,
    MeetupItemModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FilterMeetupsModule
  ]
})
export class AllmeetPageModule { }
