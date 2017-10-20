import {Component, OnInit,Input,ViewChild,ElementRef} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: any;
  hashtags: any[] = [];
  nohashtags: boolean = false;
  loaded: boolean = false;

  constructor(private router: Router, private thisRoute: ActivatedRoute, private data: DataService) {
  }

	@ViewChild('onoroff') checked : ElementRef;
  changeImage(event : any) {
    (<HTMLImageElement>event.target).src = '../../assets/img/refresh_hover.svg';
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
          this.loaded = false;
          this.data.getCategories().subscribe(
            (response) => {
              this.categories = response.json();
              let first: boolean = true;
              let count: number = 0;
              for (let category of this.categories) {
                this.data.getHashtags(category['id']).subscribe(
                  (response) => {
                    if (response.json().length > 0) {
                      let resp = response.json();
                      if (first) {
                        this.hashtags = resp;
                        first = false;
                      } else {
                        this.hashtags = this.hashtags.concat(resp);
                      }
                    }

                    if (++count == this.categories.length) {
                      console.log(this.hashtags);
                      this.loaded = true;
                    }
                  }
                );
              }
            }
          );
        }

        if (this.hashtags == null || this.hashtags.length == 0) {
          this.nohashtags = true;
        }
      }
    );
  }


}
