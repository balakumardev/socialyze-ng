import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: any;
  hashtags: any;
  loaded: boolean = false;

  constructor(private router: Router, private thisRoute: ActivatedRoute, private data: DataService) {
  }

  ngOnInit(): void {
    this.thisRoute.queryParams.subscribe(
      (params: Params) => {
        this.loaded = false;
        if (!isNaN(+params['cat'])) {
          this.data.getHashtags((+params['cat'])).subscribe(
            (response) => {
              this.hashtags = response.json();
              this.loaded = true;
            }
          );
        } else {
          //No category requested or invalid category
          //Showing all the categories.
          this.data.getCategories().subscribe(
            (response) => {
              this.categories = response.json();
              let first: boolean = true;
              let count: number = 0;
              for (let category of this.categories) {
                this.data.getHashtags(category['id']).subscribe(
                  (response) => {
                    if (response.json().length > 0) {
                      if (first) {
                        this.hashtags = response.json();
                        first = false;
                      } else this.hashtags.concat(response.json());
                    }

                    if (++count == this.categories.length)
                      this.loaded = true;
                  }
                );
              }
            }
          );
        }
      }
    );
  }
}
