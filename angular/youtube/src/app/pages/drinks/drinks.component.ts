import { Component, OnInit } from '@angular/core';
import { DrinkServiceService } from 'src/app/services/drink-service.service';

@Component({
    selector: 'app-drinks',
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
    drinks: any = []
    constructor(private drinkService: DrinkServiceService) {
        this.drinks = drinkService.getDrinks();
    }

    ngOnInit(): void {
    }

}
