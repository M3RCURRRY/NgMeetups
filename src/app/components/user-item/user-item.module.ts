import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item.component';
import { ButtonModule } from '../button/button.module';
import { UserFormModule } from '../user-form/user-form.module';

@NgModule({
  declarations: [
    UserItemComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    UserFormModule
  ],
  exports: [
    UserItemComponent
  ]
})
export class UserItemModule { }
