import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from "../data.service";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  hashtags: Object[];
  loaded: boolean = false;
  errorExists: boolean = false;
  errorText: string = "Unknown error";
  constructor( private router: Router, private thisRoute: ActivatedRoute, private data: DataService ) { }
  ngOnInit(): void {
    if(this.thisRoute.snapshot.queryParams['cat']) {
      this.data.getHashtags(+this.thisRoute.snapshot.queryParams['cat']).subscribe(
        (response) => {
          this.hashtags = response.json();
          if (this.hashtags.length == 0) {
            this.errorText = "No hashtags found in this category";
            this.errorExists = true;
          }
          this.loaded = true;
        }
      );
    } else { this.errorExists = true; this.errorText = "No category requested"; this.loaded = true; }

    this.thisRoute.queryParams.subscribe(
      (params: Params) => {
        if(!isNaN(+params['cat'])) {
          this.data.getHashtags((+params['cat'])).subscribe(
            (response) => {
              this.errorExists = false;
              this.hashtags = response.json();
            }
          );
        } else {
          this.errorText = "No category requested";
          this.errorExists = true;
          this.hashtags = null;
        }
      }
    );
  }
}
