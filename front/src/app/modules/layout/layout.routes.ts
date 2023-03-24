import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('../dashboard/dashboard.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];
