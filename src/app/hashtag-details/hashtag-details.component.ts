import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-hashtag-details',
  templateUrl: './hashtag-details.component.html',
  styleUrls: ['./hashtag-details.component.scss']
})
export class HashtagDetailsComponent implements OnChanges {
  hashtags: any;
  result: any;
  @Input() id;
  loaded: boolean = false;
  status: boolean;

  constructor(private data: DataService) {
  }

  ngOnChanges(chang: SimpleChanges) {
    this.data.gettrackedhashtags(this.id).subscribe(
      (response) => {
        this.hashtags = response.json();
        this.loaded = true;
      }
    );
  }

}
