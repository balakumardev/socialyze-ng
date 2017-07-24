import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from "./auth.service";
@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    if (localStorage.getItem('userToken')) {
      this.auth.apiKey = localStorage.getItem('userToken');
      this.auth.user = JSON.parse(localStorage.getItem('userInfo'));
    }
    firebase.initializeApp(
      {
        apiKey: "AIzaSyCFjnrYjuUTxCTfxd-it0A4hlXgE31Gmyc",
        authDomain: "twitterstreams-cbef1.firebaseapp.com"
      }
    );

  }
}
