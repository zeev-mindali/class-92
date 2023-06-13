import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-props',
    templateUrl: './props.component.html',
    styleUrls: ['./props.component.css']
})
export class PropsComponent implements OnInit {
    title = "the jungle";
    listFruits_ar = ["apple", "mango"];
    fruit_input = "orange";
    constructor() { }

    ngOnInit(): void {
    }

    addProduct() {
        this.listFruits_ar.push(this.fruit_input);
    }

}
