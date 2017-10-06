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
  private positive : any = 0;
  private negative : any = 0;
  private neutral : any = 0;
  loaded: boolean = false;
  constructor(private thisroute: ActivatedRoute,private data: DataService) { }

  ngOnInit() {
		this.tweets = this.thisroute.snapshot.queryParams['tweets'];
		this.retweets = this.thisroute.snapshot.queryParams['retweets'];
    this.hashtag = this.thisroute.snapshot.queryParams['hash'];
    this.data.getSentimentScore(this.hashtag).subscribe(
      (response) => {
           this.resp = response.json();
           this.positive = this.resp['positive'];
           this.negative = this.resp['negative'];
           this.neutral = this.resp['neutral'];
      });

  }
  // Pie
  public pieChartLabels: string[] = ['Positive', 'Negative','Neutral'];
  public pieChartData: number[];
  public pieChartType: string = 'pie';
	public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels: string[] = ['Types of tweets'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[];
  public doughnutChartLabels: string[] = ['positive','negative','neutral'];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'doughnut';
  ngAfterContentInit() {


	
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
