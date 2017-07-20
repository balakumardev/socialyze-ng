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
  st : string;
  constructor(private data: DataService) { }

  ngOnInit() {
  this.data.getstatus(this.name).subscribe(
         (response) => {
          this.st=response.text();
          if(this.st=="false"){
            this.status=false;
          }
         }
       );
  }
  onchange(event : any){
  event.target.value=this.data.updatestatus(this.name).subscribe(
         (response) => {
         }
       );
  }
}
