import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" (click)="redirect('list')">List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" (click)="redirect('add')">Add</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angularbeadando';
  constructor(private router: Router) { }
  redirect(target:string) {
    this.router.navigate(['/'+target]);
  }
}
