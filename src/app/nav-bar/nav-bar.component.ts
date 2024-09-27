import { Component ,output , EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  constructor(private router: Router) { }
  // Check if the user is logged in
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  // @Output() addButtonClicked = new EventEmitter<void>();
  @Output() addClick  = new EventEmitter<void>();

  // toggleAddForm() {
  //   this.addButtonClicked.emit();
  // }

  onAddClick() {
    this.addClick.emit();// This emits the event to the parent component
  }

  logout() {
    localStorage.removeItem('token');  // Clear token from localStorage
    this.router.navigate(['app-login']);  // Redirect to login page
    
  }
  
}
