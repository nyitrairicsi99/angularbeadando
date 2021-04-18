import { Component, OnInit } from '@angular/core';
import { CurrencyData } from '../currency.model';
import { storageService } from '../storage.service';

@Component({
  selector: 'app-list',
  template: `
    <table class="table">
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        <tr *ngFor="let data of service.datas">
          <td>{{data.name}}</td>
          <td>{{data.price}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {

  constructor(
    public service: storageService
  ) {

  }

  ngOnInit(): void {
    if (this.service.datas.length === 0) {
      this.service.fetch().subscribe(
        (data:any) => this.service.datas = data,
        error => console.log(error),
        () => {
          for (let i = 0; i < this.service.datas.length; i++) {
            console.log(this.service.datas[i].name)
            //this.service.datas[i] = new CurrencyData(datas[0],);
          }
        }
      )
    }
  }

}
