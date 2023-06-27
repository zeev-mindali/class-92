import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './Service/login-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular_frontend';
    userName = '';
    userPass = '';
    myURL = "http://localhost:4000/api/user/checkLogin";
    logged = false;

    constructor(private loginService: LoginServiceService) {

    }

    ngOnInit(): void {
        this.loginService.login(this.userName, this.userPass).subscribe(data => {
            console.log(data);
            this.logged = true;
        })
    }

    onUserChange(event: any) {
        this.userName = event.target.value;
    }

    onPassChange(event: any) {
        this.userPass = event.target.value;
    }

    onMakeLogin() {
        console.log("user: ", this.userName);
        console.log("pass: ", this.userPass);

        this.loginService.login(this.userName, this.userPass);
    }
}
