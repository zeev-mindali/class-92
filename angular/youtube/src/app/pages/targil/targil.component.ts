import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-targil',
    templateUrl: './targil.component.html',
    styleUrls: ['./targil.component.css']
})
export class TargilComponent implements OnInit {
    myColor = "black"
    constructor() { }

    ngOnInit(): void {
    }

    onColorChange(event: any) {
        console.log(event.target.value);
        this.myColor = event.target.value;
    }
}
