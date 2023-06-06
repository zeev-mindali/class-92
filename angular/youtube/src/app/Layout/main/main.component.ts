import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    title = "Song List";
    groom = "Matan";
    bride = "Tamar";
    myType = "text";
    myValue = "";

    constructor() { }

    ngOnInit(): void {
    }

    showLoved() {
        return this.groom + " wants to merry " + this.bride;
    }

    onPassUpdate(event: any) {
        this.myValue = event.target.value;
        console.log(event.target.value);
    }
}
