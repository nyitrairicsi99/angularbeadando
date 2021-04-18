import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { storageService } from '../storage.service';

@Component({
  selector: 'app-details',
  template: `
    <section id="login">
      <h3>{{this.text}} {{this.id}}</h3>
      Name: <input type="text" [(ngModel)]="name" placeholder={{this.name}}><br />
      Price: <input type="text" [(ngModel)]="price" placeholder={{this.price}}>
      <small id="pricehelp" class="form-text text-muted">Price has to be between 0 and 2000000</small>
      <br />
      <button (click)="update()">{{this.buttonText}}</button>
    </section>
  `,
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
  id : number = 0;
  text : string = "";
  buttonText : string = "";
  name : string = "";
  price : number = 0;
  constructor(
    public service: storageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    let selected =  this.service.find(this.id)
    if (selected==undefined) {
      this.text = "Add new row with id"
      this.buttonText = "Add"
    } else {
      this.text = "Modify row with id";
      this.buttonText = "Modify";
      this.name = selected.name || "";
      this.price = selected.price || 0;
    }
  }

  update() {
    let selected =  this.service.find(this.id);
    if (selected==undefined) {
      if (this.name.length<16 && this.name.length>0 && this.price>0 && this.price<=2000000) {
        this.service.add(this.name,this.price);
        this.router.navigate(['/list']);
      }
    } else {
      this.service.modify(selected,this.name,this.price);
      this.router.navigate(['/list']);
    }
  }

}
