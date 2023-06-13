import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-props',
    templateUrl: './props.component.html',
    styleUrls: ['./props.component.css']
})
export class PropsComponent implements OnInit {
    title = "the jungle";
    listFruits_ar = ["apple", "mango"];
    isHeb = true;

    constructor() { }

    ngOnInit(): void {
    }

    addProductFromApp(val: any) {
        this.listFruits_ar.push(val)
    }

    returnButtonName() {
        return this.isHeb ? "הוסף" : "Add";
    }

    changeLanguage() {
        this.isHeb = !this.isHeb;
    }
}
