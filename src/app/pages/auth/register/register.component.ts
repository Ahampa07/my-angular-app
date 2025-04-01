import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { firstName: '', lastName: '', email: '', password: '' };
  message: string = '';

  constructor(private authService: AuthService) {}

  register() {
    console.log('Registering User:', this.user); // Debugging Output

    if (!this.user.firstName || !this.user.lastName|| !this.user.email || !this.user.password) {
      this.message = 'All fields are required!';
      return;
    }

    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.message = 'Registration successful!';
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.message = 'Registration failed. Try again.';
      }
    });
  }
}



