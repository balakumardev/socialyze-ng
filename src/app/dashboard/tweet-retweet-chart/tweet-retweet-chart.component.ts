import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-retweet-chart',
  templateUrl: './tweet-retweet-chart.component.html',
  styleUrls: ['./tweet-retweet-chart.component.scss']
})
export class TweetRetweetChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Pie
  public pieChartLabels: string[] = ['Tweets', 'Retweets'];
  public pieChartData: number[] = [300, 100];
  public pieChartType: string = 'pie';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
