import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JwtService } from '../services/jwt.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jwtService: JwtService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.loginForm.valid) {
      this.jwtService.signin(this.loginForm.value).subscribe(
        (response: any) => { // Remplacez `any` par le type approprié si vous le connaissez
          console.log('User registered successfully:', response);
        },
        (error: HttpErrorResponse) => { // Vous pouvez ajuster le type en fonction de l'erreur attendue
          console.error('Registration error:', error);
        }
      );
    } else {
      console.warn('Form is invalid');
    }
  }
}
