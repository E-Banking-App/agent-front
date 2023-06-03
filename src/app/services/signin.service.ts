import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private backendUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  
  authenticate(agent: any): Observable<any> {
    const url = `${this.backendUrl}/auth/authenticate/agent`;
    console.log(url);

    return this.http.post(url, agent);
  }
}
