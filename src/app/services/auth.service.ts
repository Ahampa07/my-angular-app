import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/auth'; 

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/email/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/email/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove token on logout
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token); // Save token in local storage
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

