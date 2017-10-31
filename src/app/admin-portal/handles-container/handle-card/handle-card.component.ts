import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../data.service";

@Component({
  selector: 'app-handle-card',
  templateUrl: './handle-card.component.html',
  styleUrls: ['./handle-card.component.scss']
})
export class HandleCardComponent implements OnInit {
  @Input() ihandle: string;
  status: boolean = true;
  st: string;
  handle: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.handle = this.ihandle;
  }

  onclick(handle: string, event: any) {
    this.data.removeHandle(handle).subscribe(
      (response) => {
        let ele = event.target;
        while ((ele = ele.parentElement) && !ele.classList.contains('card'));
        ele.remove();
      }
    );
  }
}
