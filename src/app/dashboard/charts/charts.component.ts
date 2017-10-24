import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  hashtag : any;
  resp  : any;
  private positive : number = 0;
  private negative : number = 0;
  private neutral : number = 0;
  loaded: boolean = false;


  // Pie
  public pieChartLabels: string[] = ['Positive', 'Negative','Neutral'];
  public pieChartData: number[];
  public pieChartType: string = 'pie';

  public doughnutChartLabels: string[] = ['Positive', 'Negative','Neutral'];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'doughnut';

  constructor(private thisroute: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.hashtag = this.thisroute.snapshot.queryParams['hash'];
    this.data.getSentimentScore(this.hashtag).subscribe(
      (response) => {
        this.resp = response.json();
        this.positive = +this.resp['positive'];
        this.negative = +this.resp['negative'];
        this.neutral = +this.resp['neutral'];
        this.pieChartData = [this.positive, this.negative, this.neutral];
        this.doughnutChartData = [this.positive, this.negative, this.neutral];
        this.loaded = true;
      });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
