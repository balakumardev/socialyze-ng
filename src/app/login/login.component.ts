import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.value.username=="socialyze" && form.value.password=="socialyze123") {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = true;
    }

  }

}
