import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  categories: Object[];
  loaded: boolean = false;
  constructor(private data: DataService) { }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }


  ngOnInit(): void {
    this.data.getCategories().subscribe(
      (response) => {
        console.log(response.text());
        console.log(response.json());
        this.categories = response.json();
        this.loaded = true;
      }
    );
  }

}
