import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-view-tweets',
  templateUrl: './view-tweets.component.html',
  styleUrls: ['./view-tweets.component.css']
})
export class ViewTweetsComponent implements OnInit {
  tweets: Object;
  loaded: boolean;

  constructor(private data: DataService, private thisroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.data.getTweets(this.thisroute.snapshot.queryParams['hashtag'], 10).subscribe(
      (response) => {
        console.log(response.json());
        this.tweets = response.json();
        for(let tweet in this.tweets) {
          this.data.getNumTweetsByUser(this.tweets[tweet].tweet.tweetJSON.user.id_str, this.thisroute.snapshot.queryParams['hashtag'])
            .subscribe( (response) => { this.tweets[tweet].totalTweets = +response.text();});
        }
        this.loaded = true;
      }
    );
  }
  getTotalTweets(id : string) {
    this.ngOnInit()
  }
}
