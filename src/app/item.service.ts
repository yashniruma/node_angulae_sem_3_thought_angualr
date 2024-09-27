import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private token: string | null = null;

  constructor(private router: Router) { }

  // Store the token
  setToken(token: string) {
    this.token = token;
  }

  // Clear the token (on logout)
  clearToken() {
    this.token = null;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.token !== null;
  }

  // Optional: Navigate to login page on logout
  logout() {
    this.clearToken();
    this.router.navigate(['/app-login']);
  }

}
