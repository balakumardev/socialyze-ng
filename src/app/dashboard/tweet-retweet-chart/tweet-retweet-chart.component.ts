import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-tweet-retweet-chart',
  templateUrl: './tweet-retweet-chart.component.html',
  styleUrls: ['./tweet-retweet-chart.component.scss']
})
export class TweetRetweetChartComponent implements OnInit, AfterContentInit {
  tweets : object;
  retweets : object;
  loaded: boolean = false;
  constructor(private thisroute: ActivatedRoute) { }

  ngOnInit() {
		this.tweets = this.thisroute.snapshot.queryParams['tweets'];
		this.retweets = this.thisroute.snapshot.queryParams['retweets'];
  }
  // Pie
  public pieChartLabels: string[] = ['Tweets', 'Retweets'];
  public pieChartData: number[];
  public pieChartType: string = 'pie';

  ngAfterContentInit() {
    this.pieChartData = [+this.tweets, +this.retweets];
    console.log(this.pieChartData);
    this.loaded = true;
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
