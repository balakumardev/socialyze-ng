import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-admin-hashtags',
  templateUrl: './admin-hashtags.component.html',
  styleUrls: ['./admin-hashtags.component.scss']
})
export class AdminHashtagsComponent implements OnInit {
  category: number;
  loaded: boolean = false;
  constructor(private data: DataService, private thisroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.thisroute.queryParams.subscribe(
      (params: Params) => {
        if (!+params['category'])
          this.category = 1;
        else {
          this.category = +params['category'];
          console.log("Category changed to " + this.category);
        }
      }
    )
  }

}
