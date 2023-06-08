import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Api} from "../../utils/api"

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private backendUrl = Api
  constructor(private http: HttpClient) { }

  // postClient(data: any) {
  //   return this.http.post<any>("http://localhost:8080/client", data)

  // }

  getClients() : Observable<any[]>{
    return this.http.get<any[]>(`${this.backendUrl}/client`)
  }
}
