import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CryptoService {
    data: any = "";
    //cryptoURL = "https://api.coingecko.com/api/v3/coins/list";
    cryptoURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=102&page=1&sparkline=false";

    constructor(private http: HttpClient) { }

    makeApiRequest() {
        return this.http.get(this.cryptoURL);
    }

    getTestData() {
        this.data = new Observable(obs => {
            setTimeout(() => {
                obs.next("one second passed");
            }, 1000);
            setTimeout(() => {
                obs.next("two seconds passed");
            }, 2000);
            setTimeout(() => {
                obs.next("three seconds passed");
            }, 3000);
        });
        return this.data;
    }



}
