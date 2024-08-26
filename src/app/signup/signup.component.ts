import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JwtService } from '../services/jwt.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private jwtService: JwtService, private router: Router ) {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.registerForm.valid) {
      this.jwtService.signup(this.registerForm.value).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/signin']); // Remplacez '/signin' par la route appropriée
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
    } else {
      console.warn('Form is invalid');
    }
  }
}

