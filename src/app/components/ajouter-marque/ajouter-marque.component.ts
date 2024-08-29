import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarqueService } from '../../services/marque.service';
import { Marque } from '../../services/marque.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-marque',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajouter-marque.component.html',
  styleUrls: ['./ajouter-marque.component.css']
})
export class AjouterMarqueComponent implements OnInit {
  marqueForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private marqueService: MarqueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.marqueForm = this.fb.group({
      libelle: ['', Validators.required],
      image: ['']  // Optional if image is not mandatory
    });
  }

  onSubmit(): void {
    if (this.marqueForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const marque: Marque = this.marqueForm.value;

    this.marqueService.addMarque(marque).subscribe({
      next: (response) => {
        console.log('Marque added successfully', response);
        this.router.navigate(['/marques']);  // Redirect to a list of marques or another page
      },
      error: (error) => {
        console.error('Error adding marque', error);
      }
    });
  }
}
