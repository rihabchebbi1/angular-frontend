import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8080/produits';  // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<Produit[]> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbWVuQGdtYWlsLmNvbSIsImlhdCI6MTcyNDkyMjg2OCwiZXhwIjoxNzI0OTI0MzA4fQ.3BQ6IwRurZ94Uol9vZjWw_SboGotMBqAKIBZe71vVkM'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Produit[]>(`${this.baseUrl}/getAllProduit`, { headers });
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.baseUrl}/${id}`);
  }

  saveProduit(produit: Produit): Observable<Produit> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbWVuQGdtYWlsLmNvbSIsImlhdCI6MTcyNDkyMjg2OCwiZXhwIjoxNzI0OTI0MzA4fQ.3BQ6IwRurZ94Uol9vZjWw_SboGotMBqAKIBZe71vVkM'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<Produit>(`${this.baseUrl}/ajouterproduit`, produit, { headers });
  }

  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteProduit/${id}`);
  }

  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.baseUrl}/updateProduit/${id}`, produit);
  }
}
