import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-view-dash-tweets',
  templateUrl: './view-dash-tweets.component.html',
  styleUrls: ['./view-dash-tweets.component.scss']
})
export class ViewDashTweetsComponent implements OnInit {
  @Input() hashtag: any;

  tweets: Object;
  loaded: boolean;

  constructor(private data: DataService, private thisroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.data.getTweets(this.hashtag['hashtag'], 4).subscribe(
      (response) => {
        console.log(response.json());
        this.tweets = response.json();
        for(let tweet in this.tweets) {
          this.data.getNumTweetsByUser(this.tweets[tweet].tweet.tweetJSON.user.id_str, this.hashtag['hashtag'])
            .subscribe( (response) => { this.tweets[tweet].totalTweets = +response.text();});
        }
        this.loaded = true;
      }
    );
  }

  timeDifference(previousString) {
    var current = Date.now();
    let previous = Date.parse(previousString)
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed/1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed/msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay ) {
      return Math.round(elapsed/msPerHour ) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
      return Math.round(elapsed/msPerMonth) + ' months ago';
    }

    else {
      return Math.round(elapsed/msPerYear ) + ' years ago';
    }
  }

  getTotalTweets(id : string) {
    this.ngOnInit()
  }
}
