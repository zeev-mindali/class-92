import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
    listFruits_ar = ["apple", "kiwi"]
    constructor(private fruits: FruitsService) {
        this.listFruits_ar = fruits.getFruits();
    }

    ngOnInit(): void {
    }

}
