import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
    selector: 'app-input-user',
    templateUrl: './input-user.component.html',
    styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
    fruit_input = "";
    constructor(private fruitService: FruitsService) { }

    ngOnInit(): void {
    }

    addFruit() {
        this.fruitService.addFruits(this.fruit_input);
        this.fruit_input = "";
    }
}
