import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appWhite]'
})
export class WhiteDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.color = "white";
    }


}
