import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appUserResult]'
})
export class UserResultDirective implements OnInit {
    
    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.background = "white";
        this.elementRef.nativeElement.style.color = "black";
    }

}
