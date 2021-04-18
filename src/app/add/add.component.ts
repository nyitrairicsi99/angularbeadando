import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { storageService } from '../storage.service';

@Component({
  selector: 'app-add',
  template: ``,
  styles: [
  ]
})
export class AddComponent implements OnInit {

  constructor(
    public service: storageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/details/'+(this.service.getMaxId() + 1)]);
  }

}
