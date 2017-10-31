import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-add-hashtag',
  templateUrl: './add-hashtag.component.html',
  styleUrls: ['./add-hashtag.component.scss']
})
export class AddHashtagComponent implements OnInit {
  hashtags: any;
  categories: any;
  category: number;
  name: any;
  loaded: boolean = false;
  success: boolean = false;
  constructor(private data: DataService, private thisroute:ActivatedRoute) {
  }

  ngOnInit() {
    this.data.getCategories().subscribe(
      (response) => {
        this.categories = response.json();
        this.loaded = true;
      }
    );
    this.thisroute.queryParams.subscribe(
      (response: Params) => {
        this.category = +response['cat'];
      }
    )
  }

  logForm(form: NgForm) {
    this.data.putHashtag(this.category, form.value.name).subscribe(
      (response) => {
        this.success = true;
      }
    );
    form.reset();
  }
}
