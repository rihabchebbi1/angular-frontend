import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private apiUrl = 'http://localhost:8080/api/v1/auth'; // Assurez-vous que l'URL pointe vers votre backend

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
  signin(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, data);
  }
}
