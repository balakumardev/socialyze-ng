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
	public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Types of tweets'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[];
  public doughnutChartLabels: string[] = ['tweets','retweets'];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'doughnut';
  ngAfterContentInit() {
    this.pieChartData = [+this.tweets, +this.retweets];
	 this.doughnutChartData = [+this.tweets, +this.retweets];
	this.barChartData = [
    {data: [+this.tweets], label: 'tweets'},
    {data: [+this.retweets], label: 'retweets'}
  ];
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
