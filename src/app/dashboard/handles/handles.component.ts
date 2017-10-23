import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-handles',
  templateUrl: './handles.component.html',
  styleUrls: ['./handles.component.scss']
})
export class HandlesComponent implements OnInit {
  @Input() mention: string;
  @ViewChild('placeholder') elem: ElementRef;
  constructor() { }

  ngOnInit() {
    let js: HTMLScriptElement= document.createElement("script");
    js.id = "twitter-wjs";
    js.src = "http://platform.twitter.com/widgets.js";
    let placeholder = document.querySelector('.placeholder');

    this.elem.nativeElement.append(js);
  }

}
