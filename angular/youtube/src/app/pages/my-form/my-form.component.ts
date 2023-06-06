import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
    myAge = 0;
    showResult = false;

    constructor() { }

    ngOnInit(): void {
    }

    currentYear() {
        return new Date().getFullYear();
    }

    checkDate(event: any) {
        this.showResult = event.target.value > 0;
    }

}
