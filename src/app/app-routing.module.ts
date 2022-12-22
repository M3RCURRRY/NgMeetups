import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmeetPageComponent } from './pages/allmeet-page/allmeet-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CreatorPageComponent } from './pages/creator-page/creator-page.component';
import { EditorPageComponent } from './pages/editor-page/editor-page.component';
import { HowtoPageComponent } from './pages/howto-page/howto-page.component';
import { MymeetPageComponent } from './pages/mymeet-page/mymeet-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'howto', component: HowtoPageComponent },
  { path: 'all-meetups', component: AllmeetPageComponent, canActivate: [AuthGuard] },
  { path: 'my-meetups', component: MymeetPageComponent, canActivate: [AuthGuard] },
  { path: 'edit-meetup', component: EditorPageComponent, canActivate: [AuthGuard] },
  { path: 'create-meetup', component: CreatorPageComponent, canActivate: [AuthGuard] },
  { path: 'users-list', component: UserListPageComponent, canActivate: [AuthGuard, AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
