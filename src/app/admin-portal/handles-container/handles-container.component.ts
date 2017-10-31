import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-handles-container',
  templateUrl: './handles-container.component.html',
  styleUrls: ['./handles-container.component.scss']
})
export class HandlesContainerComponent implements OnChanges {
  handles: any;
  result: any;
  @Input() id;
  loaded: boolean = false;
  status: boolean;

  constructor(private data: DataService) {  }

  ngOnChanges(chang: SimpleChanges) {
    this.data.getHandles(this.id).subscribe(
      (response) => {
        this.handles = response.json();
        this.loaded = true;
      }
    );
  }
}
