import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-directive',
    templateUrl: './my-directive.component.html',
    styleUrls: ['./my-directive.component.css']
})
export class MyDirectiveComponent implements OnInit {
    myTitle = "this is a construction directive";
    showTitle = true;
    h2Color = "red";
    changeColor = true;

    constructor() { }

    ngOnInit(): void {
    }

    onBtnClick() {
        this.showTitle = !this.showTitle;
    }

    changeColorFunction() {

        this.changeColor = !this.changeColor;
        console.log("change color function: ", this.changeColor);
        return (this.changeColor) ? this.h2Color = "red" : this.h2Color = "white";

    }
}

//react => condition && display if ture