import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyData {
  public name: string | undefined;
  public price: number | undefined;
  public id: number | undefined;
  constructor() {
  }

}