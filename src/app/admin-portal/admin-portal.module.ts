import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashtagDetailsComponent } from '../hashtag-details/hashtag-details.component';
import { AddHashtagComponent } from '../add-hashtag/add-hashtag.component';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import {HttpModule} from "@angular/http";
import {LaddaModule} from "angular2-ladda";
import { AdminHashtagsComponent } from '../admin-hashtags/admin-hashtags.component';
import { SwitchComponent } from './switch/switch.component';
import { MoreHashtagDetailsComponent } from './more-hashtag-details/more-hashtag-details.component';

@NgModule({
  imports: [
    CommonModule,
	AdminPortalRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpModule,
    LaddaModule,
	FormsModule

  ],
  declarations: [ HashtagDetailsComponent,AddHashtagComponent,AdminHashtagsComponent,SwitchComponent, MoreHashtagDetailsComponent]
})
export class AdminPortalModule { }
