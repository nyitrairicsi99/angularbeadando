import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyData } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class storageService {
    public datas: CurrencyData[] = [];
    
    constructor(
        private http: HttpClient
    ) {

    }

    public fetch(): Observable<any> {
        return this.http.get("https://ucp.fly-mta.hu/api/stocknow.php");
    }
}