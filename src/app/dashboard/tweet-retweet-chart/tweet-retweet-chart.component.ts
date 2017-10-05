import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";
@Component({
  selector: 'app-tweet-retweet-chart',
  templateUrl: './tweet-retweet-chart.component.html',
  styleUrls: ['./tweet-retweet-chart.component.scss']
})
export class TweetRetweetChartComponent implements OnInit, AfterContentInit {
  tweets : object;
  retweets : object;
  hashtag : any;
  resp  : any;
  loaded: boolean = false;
  constructor(private thisroute: ActivatedRoute,private data: DataService) { }

  ngOnInit() {
		this.tweets = this.thisroute.snapshot.queryParams['tweets'];
		this.retweets = this.thisroute.snapshot.queryParams['retweets'];
    this.hashtag = this.thisroute.snapshot.queryParams['hash'];
    this.data.getSentimentScore(this.hashtag).subscribe(
      (response) => {
           this.resp = response.json();
      });
  }
  // Pie
  public pieChartLabels: string[] = ['Positive', 'Negative','Neutral'];
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
    this.pieChartData = [+this.resp['positive'], +this.resp['negative'],+this.resp['neutral']];
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
