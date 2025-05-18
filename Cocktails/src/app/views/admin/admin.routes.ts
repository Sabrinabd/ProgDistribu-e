import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'cocktails',
        loadChildren: async () =>
          (await import('../admin-cocktails/admin-cocktails-routes'))
            .routes,
      },
      {
        path: '',
        redirectTo: 'cocktails',
        pathMatch: 'full',
      },
    ],
  },
];
