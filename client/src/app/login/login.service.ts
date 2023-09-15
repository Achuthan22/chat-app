import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(this.URL + "/users/login", loginData).pipe();
  }
}
