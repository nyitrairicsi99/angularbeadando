import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login works!
      <input type="text" [(ngModel)]="username">
      <input type="password" [(ngModel)]="password">
      <button (click)="login()">Login</button>
    </p>
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
