import {ChangeDetectorRef, Component, DoCheck, NgZone, OnChanges, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit, DoCheck {
  categories: Object[];
  loaded: boolean = false;
  authenticated: boolean = false;
  lat: number;
  long: number;
  location: object;
  constructor(private data: DataService, public auth: AuthService, private change: NgZone) { }

  ngDoCheck() {
    this.authenticated = this.auth.isAuthenticated();
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any)=> {
        this.lat = +position.coords.latitude;
        this.long = +position.coords.longitude;
        this.data.getLocation(this.lat, this.long).subscribe(
          (response: any) => {
              this.location = response.json()['geonames'][0];

          }
        )
      });
    }
  }


  login() {
    this.auth.login();
    this.change.run(() => {});

    this.authenticated = this.auth.isAuthenticated();
  }

  showProfile() {
    console.info(this.auth.getUserInfo()['photoURL']);
  }
}
