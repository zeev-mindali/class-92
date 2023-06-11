import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loopi-loop',
    templateUrl: './loopi-loop.component.html',
    styleUrls: ['./loopi-loop.component.css']
})
export class LoopiLoopComponent implements OnInit {
    grooms = ["adam", "matan", "alon1", "eden", "Tzvi"];
    myFruits = ["apple", "banana", "orange", "kiwi", "cherry"];
    //           pink   yellow   orange    green  red  
    constructor() { }

    ngOnInit(): void {
    }

}
