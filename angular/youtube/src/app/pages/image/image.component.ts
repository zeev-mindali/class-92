import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
    image = "https://fashionweekdaily.com/wp-content/uploads/2021/07/lpoi.jpg";
    constructor() { }

    ngOnInit(): void {
    }

}
