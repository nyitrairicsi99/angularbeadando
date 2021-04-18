import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyData } from '../currency.model';
import { storageService } from '../storage.service';

@Component({
  selector: 'app-list',
  template: `
    <section id="list">
      <table class="table">
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Delete</th>
          <th>Modify</th>
        </thead>
        <tbody>
          <tr *ngFor="let data of service.datas">
            <td>{{data.name}}</td>
            <td>{{data.price}}</td>
            <td><button mat-stroked-button color="primary" (click)="delete(data)">Delete</button></td>
            <td><button mat-stroked-button color="primary" (click)="modify(data)">Modify</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {

  constructor(
    public service: storageService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.service.datas.length === 0) {
      this.service.fetch().subscribe(
        (data:any) => this.service.datas = data,
        error => console.log(error),
        () => {}
      )
    }
  }

  delete(data: CurrencyData) {
    this.service.delete(data);
  }

  modify(data: CurrencyData) {
    this.router.navigate(['/details/'+data.id]);
  }

}
