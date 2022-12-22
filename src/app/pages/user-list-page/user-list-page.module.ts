import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageComponent } from './user-list-page.component';
import { UserItemModule } from 'src/app/components/user-item/user-item.module';



@NgModule({
  declarations: [
    UserListPageComponent
  ],
  imports: [
    CommonModule,
    UserItemModule
  ],
  exports: [
    UserListPageComponent
  ]
})
export class UserListPageModule { }
