import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  message: string = '';

  constructor(private authService: AuthService) {}

  login() {
    console.log('Login clicked', this.credentials);
    if (!this.credentials.email || !this.credentials.password) {
      this.message = 'All fields are required!';
      return;
    }

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.data.token);

        alert('Login Successful!');

        console.log('Login successful:', response);
        window.location.href = '';

        this.message = 'Login successful!';
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.message = 'Login failed. Try again.';
      }
    });
  }

}

