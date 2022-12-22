import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    UserItemComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    UserItemComponent
  ]
})
export class UserItemModule { }
