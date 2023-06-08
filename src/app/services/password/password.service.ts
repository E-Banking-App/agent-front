import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Api} from "../../utils/api"

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private backendUrl = Api


  constructor(private http: HttpClient) { }

    changePassword(password: any): Observable<any>{
    const url = `${this.backendUrl}/agent/change_password`;
    console.log(url);

    //get the token
    const token = localStorage.getItem('token');
    if (!token) {
      // Handle token not found case

    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(url, password, { headers });
  }
}
