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
                localStorage.setItem('dataSource', JSON.stringify(this.datas));
            }
        }
    }

    public add(name: string,price: number) {
        let data = new CurrencyData();
        data.name = name;
        data.price = Number.parseInt(price.toString());
        data.id = this.getMaxId()+1;
        this.datas.push(data);
        localStorage.setItem('dataSource', JSON.stringify(this.datas));
    }

    public modify(data: CurrencyData,name: string,price: number) {
        data.name = name;
        data.price = price;
        localStorage.setItem('dataSource', JSON.stringify(this.datas));
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