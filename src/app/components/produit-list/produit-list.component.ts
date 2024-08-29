import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../services/produit.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importer RouterModule ici
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],  // Ajouter RouterModule aux imports
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produits: Produit[] = [];  // Initialisation par défaut

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void {
    this.produitService.getAllProduits().subscribe((data: Produit[]) => {
      this.produits = data;
    });
  }

  deleteProduit(id: number): void {
    this.produitService.deleteProduit(id).subscribe(() => {
      this.getProduits();  // Rafraîchit la liste après suppression
    });
  }
}
