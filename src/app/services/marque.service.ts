// marque.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marque } from './marque.model';  // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private apiUrl = 'http://localhost:8080/api/marques';  // Remplacez par l'URL réelle de votre API

  constructor(private http: HttpClient) { }

  getAllMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiUrl);
  }

  getMarqueById(id: number): Observable<Marque> {
    return this.http.get<Marque>(`${this.apiUrl}/${id}`);
  }

  addMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(`${this.apiUrl}/ajoutermarque`, marque);
  }

  updateMarque(id: number, marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(`${this.apiUrl}/${id}`, marque);
  }

  deleteMarque(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
