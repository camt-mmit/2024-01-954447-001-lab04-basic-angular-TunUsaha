import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello world',
    pathMatch: 'full',
  },
  {
    path: 'hello world',
    component: HelloWorldComponent,
  },

  {
    path: 'Profile',
    component: ProfileComponent,
  },

  {
    path: 'Friends',
    component: FriendsComponent,
  },

  {
    path: 'Status',
    component: StatusComponent,
  },
];
