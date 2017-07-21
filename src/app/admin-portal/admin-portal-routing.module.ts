import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminHashtagsComponent} from '../admin-hashtags/admin-hashtags.component';
import {AddHashtagComponent} from '../add-hashtag/add-hashtag.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Hashtag Management'
    },
    children: [
      {
        path: '',
        redirectTo: 'view-hashtags'
      },
      {
        path: 'view-hashtags',
        component: AdminHashtagsComponent,
        data: {
          title: 'View Hashtags'
        }
      },
      {
        path: 'add-hashtag',
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
export class AdminPortalRoutingModule {
}
