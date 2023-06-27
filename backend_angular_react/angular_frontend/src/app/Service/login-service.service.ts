import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginServiceService implements OnInit {
    myURL = "http://localhost:4000/api/user/checkLogin";

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

    }

    login(userName: string, password: string): Observable<any> {
        const data = {
            "user_name": userName,
            "password": password
        }
        const result = this.http.post(this.myURL, data);
        //console.log(result)
        return result;
    }
}
