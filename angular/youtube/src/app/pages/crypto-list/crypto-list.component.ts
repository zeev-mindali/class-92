import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
    selector: 'app-crypto-list',
    templateUrl: './crypto-list.component.html',
    styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {
    cryptoData: any = "";
    constructor(private cryptoService: CryptoService) { }

    ngOnInit(): void {
        //simple demo of getting message each second
        // this.cryptoService.getTestData().subscribe((data: any) => {
        //     console.log(data);
        // });

        //get a data from api request
        this.cryptoService.makeApiRequest().subscribe(data => {
            console.log(data)
            this.cryptoData = data;
        });
    }

}
