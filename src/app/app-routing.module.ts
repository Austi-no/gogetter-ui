import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { StartComponent } from './components/start/start.component';
import { ForumComponent } from './components/forum/forum.component';
import { SignupComponent } from './user-administration/signup/signup.component';
import { LoginComponent } from './user-administration/login/login.component';
import { AuthGuard } from './user-administration/helpers/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    // canActivate:[AuthGuard],
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./components/start/start.module').then(m => m.StartModule), canActivate: [AuthGuard] },
      { path: 'start', loadChildren: () => import('./components/start/start.module').then(m => m.StartModule), canActivate: [AuthGuard] },
      { path: 'create-event', loadChildren: () => import('./components/event/create-event/create-event.module').then(m => m.CreateEventModule), canActivate: [AuthGuard] },
      { path: 'events', loadChildren: () => import('./components/event/events-list/events.module').then(m => m.EventsModule), canActivate: [AuthGuard] },
      { path: 'event/:id', loadChildren: () => import('./components/event/event-detail/event-detail.module').then(m => m.EventDetailModule), canActivate: [AuthGuard] },
      { path: 'forum', loadChildren: () => import('./components/forum/forum.module').then(m => m.ForumModule), canActivate: [AuthGuard] },
      { path: 'groups', loadChildren: () => import('./components/groups/groups.module').then(m => m.GroupsModule), canActivate: [AuthGuard] },
      { path: 'guide', loadChildren: () => import('./components/guide/guide.module').then(m => m.GuideModule), canActivate: [AuthGuard] },
      { path: 'members', loadChildren: () => import('./components/members/members.module').then(m => m.MembersModule), canActivate: [AuthGuard] }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
