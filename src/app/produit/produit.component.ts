import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Produit, Marque } from '../services/product.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  marques: Marque[] = [];
  selectedProduit: Produit | null = null;
  produits: Produit[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProduits();
    this.loadMarques();
  }

  loadProduits(): void {
    this.productService.getProduits().subscribe(data => {
      this.produits = data;
    });
  }

  loadMarques(): void {
    this.productService.getMarques().subscribe(data => {
      this.marques = data;
    });
  }

  addProduit(): void {
    this.selectedProduit = {
      id: 0, // Add a default id value if necessary
      codeProd: '',
      libelle: '',
      description: '',
      prixTTC: 0,
      prixHT: 0,
      tva: 0,
      marque: null
    };
  }

  editProduit(id: number): void {
    this.productService.getProduit(id).subscribe(data => {
      this.selectedProduit = data;
    });
  }

  deleteProduit(id: number): void {
    this.productService.deleteProduit(id).subscribe(() => {
      this.produits = this.produits.filter(produit => produit.id !== id);
    });
  }

  saveProduit(): void {
    if (this.selectedProduit) {
      if (this.selectedProduit.id) {
        this.productService.updateProduit(this.selectedProduit).subscribe(() => {
          this.loadProduits();
          this.selectedProduit = null;
        });
      } else {
        this.productService.addProduit(this.selectedProduit).subscribe(() => {
          this.loadProduits();
          this.selectedProduit = null;
        });
      }
    }
  }

  cancel(): void {
    this.selectedProduit = null;
  }

  isProduitSelected(): boolean {
    return this.selectedProduit !== null;
  }
}
