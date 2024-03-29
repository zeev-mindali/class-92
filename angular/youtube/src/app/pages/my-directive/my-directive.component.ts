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
    myTime = new Date().toLocaleTimeString();
    myBoxes = ["red_box", "green_box", "yellow_box"];
    myIndex = 0;

    constructor() { }

    ngOnInit(): void {
        setInterval(() => {
            this.myTime = new Date().toLocaleTimeString();
        }, 950)
    }

    onBtnClick() {
        this.showTitle = !this.showTitle;
    }

    changeColorFunction() {

        this.changeColor = !this.changeColor;
        console.log("change color function: ", this.changeColor);
        return (this.changeColor) ? this.h2Color = "red" : this.h2Color = "white";

    }

    nextBox() {
        this.myIndex++;
        if (this.myIndex == this.myBoxes.length) {
            this.myIndex = 0;
        }
        
    }
}

//react => condition && display if ture