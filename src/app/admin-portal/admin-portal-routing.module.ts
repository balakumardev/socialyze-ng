import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminHashtagsComponent } from '../admin-hashtags/admin-hashtags.component';
import { HashtagDetailsComponent } from '../hashtag-details/hashtag-details.component';
import { AddHashtagComponent } from '../add-hashtag/add-hashtag.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminHashtagsComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'add-hashtag',
        component: AddHashtagComponent ,
        data: {
          title: 'add-hashtag'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule {
}
