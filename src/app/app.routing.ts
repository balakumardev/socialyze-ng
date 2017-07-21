import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Layouts
import {FullLayoutComponent} from './layouts/full-layout.component';
import {SimpleLayoutComponent} from './layouts/simple-layout.component';
import {LoginComponent} from "./login/login.component";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'login',
    data: {
      title: 'Login'
    },
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './admin-portal/admin-portal.module#AdminPortalModule'
      }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
