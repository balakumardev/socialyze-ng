import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {ViewTweetsComponent} from "../view-tweets/view-tweets.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'view-tweets',
        component: ViewTweetsComponent,
        data: {
          title: 'View Tweets'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
