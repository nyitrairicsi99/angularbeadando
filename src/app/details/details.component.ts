import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  template: `
    <p>
      details works! {{this.id}}
    </p>
  `,
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
  id : number = 0;
  constructor(
    private route: ActivatedRoute
  ) {
    
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
