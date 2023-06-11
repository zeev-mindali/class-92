import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appBetterGreen]'
})
export class BetterGreenDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.background = "green";
        this.elementRef.nativeElement.style.color = "white";
    }

    @HostListener('mouseenter') mouseover() {
        this.elementRef.nativeElement.style.color = "red";
    }

    @HostListener('mouseleave') mouseleave() {
        this.elementRef.nativeElement.style.color = "white";
    }

}
