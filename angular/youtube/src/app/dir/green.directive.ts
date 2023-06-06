import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appGreen]'
})
//מייבא את היכולת של הוק לפעול במחלקה
export class GreenDirective implements OnInit {
    //הפרייבט מאפשר להשתמש במשתנה שהעברנו אליו לבנאי בכל מקום במחלקה עצמה בלבד והפונקציות שלה
    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.background = "yellowgreen";
    }

}
