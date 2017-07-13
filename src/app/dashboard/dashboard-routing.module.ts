import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {ViewTweetsComponent} from "../view-tweets/view-tweets.component";
import {TweetRetweetChartComponent} from "./tweet-retweet-chart/tweet-retweet-chart.component";

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
      },
      {
        path: 'tweet-retweet-chart',
        component: TweetRetweetChartComponent,
        data: {
          title: 'Charts for Tweets & Retweets'
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
