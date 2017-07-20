import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-hashtag',
  templateUrl: './add-hashtag.component.html',
  styleUrls: ['./add-hashtag.component.scss']
})
export class AddHashtagComponent implements OnInit {
	hashtags: any;
	categories : any;
	id : any;
	name : any;
	loaded: boolean=false;
  constructor(private data: DataService) { }

  ngOnInit() {
	this.data.getCategories().subscribe(
            (response) => {
              this.categories = response.json();
			  console.log(this.categories);
			   this.loaded = true;
            }
          );


  }
	logForm(form: NgForm) {
 this.data.putHashtag(form.value.id,form.value.name).subscribe(
            (response) => {
                console.log(form.value.name.value.trim());

            }
          );
		  form.reset();
  }
}
