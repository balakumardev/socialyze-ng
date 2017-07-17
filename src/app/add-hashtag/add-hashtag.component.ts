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
	id : any;
	name : any;
  constructor(private data: DataService) { }

  ngOnInit() {	  
  }
	logForm(form: NgForm) {
 this.data.putHashtag(form.value.id,form.value.name).subscribe(
            (response) => {
              this.hashtags = response.json();
			  console.log(this.hashtags);
            }
          );
		  form.reset();
  }
}
