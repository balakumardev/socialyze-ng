import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-hashtag',
  templateUrl: './add-hashtag.component.html',
  styleUrls: ['./add-hashtag.component.scss']
})
export class AddHashtagComponent implements OnInit {
  hashtags: any;
  categories: any;
  category: any;
  name: any;
  loaded: boolean = false;
  success: boolean = false;
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getCategories().subscribe(
      (response) => {
        this.categories = response.json();
        this.loaded = true;
      }
    );
  }

  logForm(form: NgForm) {
    this.data.putHashtag(form.value.category, form.value.name).subscribe(
      (response) => {
        this.success = true;
      }
    );
    form.reset();
  }
}
