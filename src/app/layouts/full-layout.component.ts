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
