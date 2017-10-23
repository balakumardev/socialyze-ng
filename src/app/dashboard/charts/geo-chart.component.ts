import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare var google:any;

@Directive({
  selector: '[GeoChart]'
})
export class GeoChartComponent implements OnInit {

  public drawElement:any;
  @Input('options') public options: Object;
  @Input('data') public data: Object;

  constructor(public element: ElementRef) {
    this.drawElement = this.element.nativeElement;
  }

  ngOnInit() {
    setTimeout(() =>{
      google.charts.load('upcoming', {'packages':['geochart']});
        setTimeout(() =>{
          this.drawGeoChart(this.options, this.data, this.drawElement);
        },1000);
      },1000
    );
  }

  drawGeoChart (options, data, element) {
    google.charts.setOnLoadCallback(drawMarkersMap);
    function drawMarkersMap() {
          var dataTable = google.visualization.arrayToDataTable(data);
          var chart = new google.visualization.GeoChart(element);
          chart.draw(dataTable, options);
    };
  }

}
