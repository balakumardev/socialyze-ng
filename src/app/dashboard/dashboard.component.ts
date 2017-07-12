import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from "../data.service";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  hashtags: Object[];
  loaded: boolean = false;
  nohashtags: boolean = false;
  constructor( private router: Router, private thisRoute: ActivatedRoute, private data: DataService ) { }
  ngOnInit(): void {
    if(this.thisRoute.snapshot.queryParams['cat']) {
      this.data.getHashtags(+this.thisRoute.snapshot.queryParams['cat']).subscribe(
        (response) => {
          this.hashtags = response.json();
          this.loaded = true;
        }
      );
    } else { this.nohashtags = true; this.loaded = true; }

    this.thisRoute.queryParams.subscribe(
      (params: Params) => {
        if(!isNaN(+params['cat'])) {
          this.data.getHashtags((+params['cat'])).subscribe(
            (response) => {
              this.nohashtags = false;
              this.hashtags = response.json();
            }
          );
        } else {
          this.nohashtags = true;
          this.hashtags = null;
        }
      }
    );
  }
}
