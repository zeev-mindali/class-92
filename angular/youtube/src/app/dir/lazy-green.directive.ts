import { Directive, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appLazyGreen]'
})
export class LazyGreenDirective implements OnInit {

    @HostBinding('style.color') clr = "white";
    @HostBinding('style.background') bg = "greenyellow";

    constructor(private elementRef: ElementRef) {

    }
    ngOnInit(): void {

    }

    @HostListener('mouseenter') mouseOver() {
        this.clr = "yellow";
    }

    @HostListener('mouseleave') mouseLeave() {
        this.clr = "white";
    }

}


/*

    x=5;
    y=x++; => x=6,y=5
    y=++x; => x=6,y=6

*/