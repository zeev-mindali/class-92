import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular_frontend';
    userName = '';
    userPass = '';
    myURL = "http://localhost:4000/api/user/checkLogin";

    constructor(private http: HttpClient) {

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

        const data = {
            "user_name": this.userName,
            "password": this.userPass
        }

        this.http.post(this.myURL, data).forEach(item => console.log(item));
    }
}
