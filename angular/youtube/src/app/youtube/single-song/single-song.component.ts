import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-single-song',
    templateUrl: './single-song.component.html',
    styleUrls: ['./single-song.component.css']
})
export class SingleSongComponent implements OnInit {
    singleSongId: any = "no song id for you";
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.singleSongId = this.route.snapshot.paramMap.get('id');
    }
}
