import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../services/produit.model';  // Assurez-vous que le chemin est correct
import { CommonModule } from '@angular/common';
import { MarqueService } from '../../services/marque.service';

@Component({
  selector: 'app-ajouter-produit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  produitForm!: FormGroup;  // Ajoutez '!' pour indiquer que cette propriété sera initialisée plus tard

  constructor(
    private fb: FormBuilder,
    private produitService: ProduitService,
    private marqueService: MarqueService,
    private router: Router
  )  {}

  ngOnInit(): void {
    this.produitForm = this.fb.group({
      codeProd: ['', Validators.required],
      libelle: ['', Validators.required],
      description: [''],
      prixTTC: [null, [Validators.required, Validators.min(0)]],
      prixHT: [null, [Validators.required, Validators.min(0)]],
      tva: [null, [Validators.required, Validators.min(0)]],
      marqueId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.produitForm.invalid) {
        console.log('Le formulaire est invalide');
        return;
    }

    const produit: Produit = this.produitForm.value;
    console.log('Produit envoyé:', produit);  // Ajoutez ce log pour vérifier les données envoyées

    this.produitService.saveProduit(produit).subscribe({
        next: (response) => {
            console.log('Produit enregistré avec succès', response);
            this.router.navigate(['/produits']);
        },
        error: (error) => {
            console.error('Erreur lors de l\'enregistrement du produit', error);
        }
    });
}
}