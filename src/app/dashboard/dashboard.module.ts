import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {LaddaModule} from "angular2-ladda";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {ViewTweetsComponent} from "../view-tweets/view-tweets.component";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpModule,
    LaddaModule
  ],
  declarations: [ DashboardComponent, LoadingSpinnerComponent, ViewTweetsComponent ]
})
export class DashboardModule { }
