import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FruitsService {
    fruits_ar: any = [];
    constructor() {
        this.fruits_ar = ["melon", "mango", "orange"];
    }

    getFruits() {
        return this.fruits_ar;
    }

    addFruits(newFruit: any) {
        this.fruits_ar.push(newFruit);
    }
}
