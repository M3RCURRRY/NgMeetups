import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageComponent } from './user-list-page.component';
import { UserItemModule } from 'src/app/components/user-item/user-item.module';
import { UserFormModule } from 'src/app/components/user-form/user-form.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListPageComponent
  ],
  imports: [
    CommonModule,
    UserItemModule,
    UserFormModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserListPageComponent
  ]
})
export class UserListPageModule { }
