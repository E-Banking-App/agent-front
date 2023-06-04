import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateClientService {
  private backendUrl = 'http://localhost:8080'; // Replace with your backend URL


  constructor(private http: HttpClient) { }


  creatClient(client: any): Observable<any>{
    const url = `${this.backendUrl}/client`;
    console.log(url);

    //get the token
    const token = localStorage.getItem('token');
    if (!token) {
      // Handle token not found case

    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(url, client, { headers });
  }


}
