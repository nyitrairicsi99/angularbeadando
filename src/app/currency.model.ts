import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class CurrencyData {
    public name: string | undefined;
    public price: BigInteger | undefined;
    public id: BigInteger | undefined;
    constructor() {
    }
  
  }