import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    loggedin = false;
    constructor(private router: Router) { }

    login(username: string,password: string) {
        if (username=="admin" && password=="admin") {
            this.loggedin = true
            this.router.navigate(['/list']);
        } else {
            this.router.navigate(['/login']);
        }
    }

    isLoggedIn() {
        return this.loggedin;
    }

}