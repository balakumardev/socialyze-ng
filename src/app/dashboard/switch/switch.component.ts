import { Component, OnInit,Input } from '@angular/core';
import {DataService} from "../../data.service";
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() name : string;
  status : boolean=true;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  onchange(event : any){
  event.target.value=this.data.updatestatus(this.name).subscribe(
         (response) => {
         }
       );
  }
}
