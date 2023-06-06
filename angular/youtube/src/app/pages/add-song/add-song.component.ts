import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-song',
    templateUrl: './add-song.component.html',
    styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

    songURL = "";

    constructor() { }

    ngOnInit(): void {
    }

    onSongUrlUpdate(event: any) {
        this.songURL = event.target.value;
    }

}
