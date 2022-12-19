import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { AuthPageModule } from './pages/auth-page/auth-page.module';
import { HowtoPageModule } from './pages/howto-page/howto-page.module';
import { AllmeetPageModule } from './pages/allmeet-page/allmeet-page.module';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { MymeetPageModule } from './pages/mymeet-page/mymeet-page.module';
import { EditorPageModule } from './pages/editor-page/editor-page.module';
import { CreatorPageModule } from './pages/creator-page/creator-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    AuthPageModule,
    HowtoPageModule,
    AllmeetPageModule,
    MymeetPageModule,
    EditorPageModule,
    CreatorPageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
