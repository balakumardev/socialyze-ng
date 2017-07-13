import {AfterContentInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tweet-retweet-chart',
  templateUrl: './tweet-retweet-chart.component.html',
  styleUrls: ['./tweet-retweet-chart.component.scss']
})
export class TweetRetweetChartComponent implements OnInit, AfterContentInit {
  @Input() tweets;
  @Input() retweets;
  loaded: boolean = false;
  constructor() { }

  ngOnInit() {

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
