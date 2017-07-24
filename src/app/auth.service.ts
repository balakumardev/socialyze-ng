import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";

export class AuthService {
  apiKey: string = null;
  provider: any;
  user: any;
  constructor() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  login() {
    firebase.auth().signInWithPopup(this.provider).then(
      (response) => {
        this.apiKey = response.credential.accessToken;
        this.user = response.user;
        console.log(this.user);
        localStorage.setItem('userToken', this.apiKey);
        localStorage.setItem('userInfo', JSON.stringify(response.user));
      }
    )
  }

  logout() {
    firebase.auth().signOut();
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    this.apiKey = null;
  }

  isAuthenticated() {
    return this.apiKey != null;
  }

  getUserInfo() {
    return this.user;
  }

}
