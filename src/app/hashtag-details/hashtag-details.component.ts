import { Component, OnInit ,Input} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-hashtag-details',
  templateUrl: './hashtag-details.component.html',
  styleUrls: ['./hashtag-details.component.scss']
})
export class HashtagDetailsComponent implements OnInit {
	hashtags : any;
	@Input() id;
	loaded : boolean=false;

  constructor(private data: DataService) { }

  ngOnInit() {
	   this.data.getHashtags(this.id).subscribe(
            (response) => {
              this.hashtags = response.json();
              this.loaded = true;
			 
            }
          );
  }

}
