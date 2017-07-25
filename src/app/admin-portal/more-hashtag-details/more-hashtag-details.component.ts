import { Component, OnInit,Input } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-more-hashtag-details',
  templateUrl: './more-hashtag-details.component.html',
  styleUrls: ['./more-hashtag-details.component.scss']
})
export class MoreHashtagDetailsComponent implements OnInit {
  @Input() ihashtag : object;
  status : boolean = true;
  st : string;
  hashtag : object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.hashtag=this.ihashtag;
    this.data.gettrackedhashtagstatus(this.hashtag['hashtag']).subscribe(
      (response) => {
        this.st = response.text();
        if(this.st=="false"){
          this.status=false;
        }
      }
    );
  }
  onclick(hashtag : string){
    this.data.removehashtag(hashtag).subscribe(
      (response) => {
        window.location.reload();
      }
    );
  }

}
