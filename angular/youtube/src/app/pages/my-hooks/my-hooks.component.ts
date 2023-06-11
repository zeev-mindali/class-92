import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-hooks',
    templateUrl: './my-hooks.component.html',
    styleUrls: ['./my-hooks.component.css']
})
export class MyHooksComponent implements OnInit {
    ngOnInit(): void {
        console.log("running ngOnInit");
    }

    

}


/*
    ngOnChanges
    ngOnInit
    ngOnDestroy

*/