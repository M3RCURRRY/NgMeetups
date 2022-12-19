import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowtoPageComponent } from './howto-page.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HowtoPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ButtonModule
  ]
})
export class HowtoPageModule { 

}
