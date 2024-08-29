import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../services/produit.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  produit: Produit | null = null;  // Initialisation à null

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID depuis les paramètres de la route
    const idString = this.route.snapshot.paramMap.get('id');
    
    // Vérifier si l'ID est valide (non null et peut être converti en nombre)
    if (idString !== null) {
      const id = +idString;  // Convertir en nombre
      if (!isNaN(id)) {     // Assurez-vous que l'ID est un nombre valide
        this.produitService.getProduitById(id).subscribe((data: Produit) => {
          this.produit = data;
        });
      } else {
        console.error('ID invalide');
        // Gérer le cas d'ID invalide (par exemple, afficher un message d'erreur)
      }
    } else {
      console.error('ID non trouvé dans les paramètres de la route');
      // Gérer le cas où l'ID est null (par exemple, afficher un message d'erreur)
    }
  }
  
}
