import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'adminnavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.scss'
})
export class AdminnavbarComponent {
  constructor(private router: Router) { }
  // Check if the user is logged in
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }  
  // onAddClick() {
  //   this.addClick.emit();// This emits the event to the parent component
  // }

  logout() {
    localStorage.removeItem('token');  // Clear token from localStorage
    this.router.navigate(['/app-login']);  // Redirect to login page
  }
}
