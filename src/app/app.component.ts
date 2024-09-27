import { Component , OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YmhtComponent } from './ymht/ymht.component';
import { CommonModule } from '@angular/common';  // Ensure CommonModule is imported
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Router } from '@angular/router';
// import { AddYmhtComponent } from './add-ymht/add-ymht.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
// import { AddThoughtComponent } from './add-thought/add-thought.component';
// import { AddThoughtComponent } from './add-thought/add-thought.component';
import { AddYmhtComponent } from './add-ymht/add-ymht.component';

import { AllthoughtComponent } from './allthought/allthought.component';
import { AddThoughtComponent } from './add-thought/mainadd-thought.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AlluserComponent } from './admin/alluser/alluser.component';
import { GoalComponent } from './admin/goal/goal.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [YmhtComponent,
    CommonModule,
    NavBarComponent,
    // AddYmhtComponent,
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddThoughtComponent,
    AllthoughtComponent,
    DashboardComponent,
    AboutusComponent,
    EditThoughtComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    AlluserComponent,
    GoalComponent,
    ForgetpassComponent ,
    
    
  ],
  templateUrl: './app.component.html',

  // template: `
  //   <div *ngIf="showAboutPage" class="about-container">
  //     <app-aboutus></app-aboutus>
  //     <button (click)="skipAbout()">Skip</button>
  //   </div>
  //   <router-outlet *ngIf="!showAboutPage"></router-outlet>
  // `,

  styleUrl: './app.component.scss'
})
// export class AppComponent implements OnInit{
export class AppComponent  {


  title = 'angular-crud';

  userRole: string | null = '';

  // ngOnInit(): void {
  //   // Assign the role from localStorage to a component property
  //   this.userRole = localStorage.getItem('role');
  // }


  // Method to check if the user role is admin
  // isAdmin(): boolean {
  //   return window.sessionStorage.getItem('role') === 'admin';
  // }

  // // Method to check if the user is not admin
  // isNotAdmin(): boolean {
  //   return window.sessionStorage.getItem('role') !== 'admin';
  // }


  // getRole(): string | null {
  //   // Use localStorage to get the role directly
  //   return localStorage.getItem('role');
  // }
  showAboutPage = true;

  constructor(private router: Router) { }
  
  // ngOnInit(): void {
  //   // Automatically skip after 1 minute (60,000 ms)
  //   setTimeout(() => {
  //     this.skipAbout();
  //   }, 60000); // 1 minute
  // }

  skipAbout(): void {
    this.showAboutPage = false;
    this.router.navigate(['']);  // Redirect to your desired page, like 'home'
  }

  showAddForm = false;

  

 
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }


}
