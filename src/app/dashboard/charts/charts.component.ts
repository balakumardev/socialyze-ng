import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";
import {
  AgmCoreModule
} from '@agm/core';
import {  AgmJsMarkerClustererModule,  ClusterManager } from '@agm/js-marker-clusterer';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  loadedLocations: boolean = false;
  hashtag : any;
  resp  : any;
  private positive : number = 0;
  private negative : number = 0;
  private neutral : number = 0;
  locations : object;
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

    this.data.getLocations(this.hashtag).subscribe(
      (response) => {
        this.locations = response.json();
        this.loadedLocations = true;
      }
    );
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

  zoom: number = 1;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }


  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
}
