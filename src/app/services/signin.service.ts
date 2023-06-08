import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Api} from "../utils/api"

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private backendUrl = Api

  constructor(private http: HttpClient) { }


  authenticate(agent: any): Observable<any> {
    const url = `${this.backendUrl}/auth/authenticate/agent`;
    console.log(url);

    return this.http.post(url, agent);
  }
}
