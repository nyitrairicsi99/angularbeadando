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

    public delete(data: CurrencyData) {
        for (let i = 0; i < this.datas.length; i++) {
            if (this.datas[i]===data) {
                this.datas.splice(i,1);
            }
        }
    }

    public add(name: string,price: number) {
        let data = new CurrencyData();
        data.name = name;
        data.price = price;
        this.datas.push(data);
    }

    public modify(data: CurrencyData,name: string,price: number) {
        data.name = name;
        data.price = price;
    }

    public getMaxId(): number {
        let biggest = 0;
        this.datas.forEach(element => {
            if ((element.id || 0)>biggest) {
                biggest = (element.id || 0)
            }
        });

        return biggest;
    }

    public find(id: number): CurrencyData | undefined {
        let found = undefined;
        this.datas.forEach(element => {
            if ((element.id || 0)==id) {
                found =  element;
            }
        });

        return found;
    }

    public fetch(): Observable<any> {
        return this.http.get("https://ucp.fly-mta.hu/api/stocknow.php");
    }
}