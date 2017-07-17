import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {ViewTweetsComponent} from "../view-tweets/view-tweets.component";
import {TweetRetweetChartComponent} from "./tweet-retweet-chart/tweet-retweet-chart.component";
import { AdminHashtagsComponent } from '../admin-hashtags/admin-hashtags.component';
import { AddHashtagComponent } from '../add-hashtag/add-hashtag.component';
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
      },
	   {
        path: 'Admin-UI',
        component: AdminHashtagsComponent,
        data: {
          title: 'Current Hashtags'
        }
      },
	  {
        path: 'Admin-UI/add-hashtag',
        component: AddHashtagComponent,
        data: {
          title: 'Add Hashtag'
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
