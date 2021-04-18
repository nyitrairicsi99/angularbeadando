import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <section id="login">
      <h3>You have to log in to access the list!</h3>
      <input type="text" [(ngModel)]="username"><br />
      <input type="password" [(ngModel)]="password"><br /><br />
      <button (click)="login()">Login</button>
    </section>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService)  { }
  username = "admin";
  password = "admin";
  ngOnInit(): void {
    
  }

  login() {
    this.authService.login(this.username,this.password);
    this.username = "";
    this.password = "";
  }

}
