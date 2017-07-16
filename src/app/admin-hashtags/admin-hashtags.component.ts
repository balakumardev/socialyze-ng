import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-admin-hashtags',
  templateUrl: './admin-hashtags.component.html',
  styleUrls: ['./admin-hashtags.component.scss']
})
export class AdminHashtagsComponent implements OnInit {
	categories : any;
	loaded: boolean = false;
  constructor(private data: DataService, private thisroute: ActivatedRoute) { }

  ngOnInit() {
	  this.data.getCategories().subscribe(
            (response) => {
              this.categories = response.json();
			  this.loaded=true;
            }
          );
		  
  }

}
