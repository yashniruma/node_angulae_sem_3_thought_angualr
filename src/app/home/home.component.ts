import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      // Redirect to login if not authenticated
      this.router.navigate(['/app-login']);
    }
  }
}
