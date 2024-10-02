import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LOGIN } from '../app/core/constants/routes.constants';

export const routes: Routes = [
  {
    path: LOGIN,
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
  },
];
