import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item.component';
import { ButtonModule } from '../button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserItemComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserItemComponent
  ]
})
export class UserItemModule { }
