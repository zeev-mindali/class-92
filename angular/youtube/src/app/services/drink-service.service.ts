import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DrinkServiceService {
    drinks_ar: any = [
        {
            name: "beer",
            price: 3,
            alcohol: 0.05,
            expired: "2024-05-10"
        },
        {
            name: "cola",
            price: 2.5,
            alcohol: 0,
            expired: "2025-01-28"
        },
        {
            name: "champion",
            price: 120.50,
            alcohol: 0.1,
            expired: "2023-06-20"
        }
    ];
    constructor() { }
    getDrinks() {
        return this.drinks_ar;
    }

    addDrink(drink: any) {
        this.drinks_ar.push(drink);
    }
}
