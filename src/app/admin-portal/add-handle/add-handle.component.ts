import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-handle',
  templateUrl: './add-handle.component.html',
  styleUrls: ['./add-handle.component.scss']
})
export class AddHandleComponent implements OnInit {
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
    this.data.addHandles(this.category, form.value.name).subscribe(
      (response) => {
        this.success = true;
      }
    );
    form.reset();
  }

}
