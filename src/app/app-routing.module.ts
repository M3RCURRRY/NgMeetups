import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmeetPageComponent } from './pages/allmeet-page/allmeet-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HowtoPageComponent } from './pages/howto-page/howto-page.component';
import { MymeetPageComponent } from './pages/mymeet-page/mymeet-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'howto', component: HowtoPageComponent },
  { path: 'all-meetups', component: AllmeetPageComponent, canActivate: [AuthGuard] },
  { path: 'my-meetups', component: MymeetPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
