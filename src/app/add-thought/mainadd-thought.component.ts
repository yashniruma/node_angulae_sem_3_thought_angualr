import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-add-thought',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-thought.component.html',
  styleUrl: './add-thought.component.scss'
})
export class AddThoughtComponent {

  thought_array: any[] = [];
  userID: number | null = null; // User ID will be set dynamically
  // isResultLoaded = false;
  // isUpdateFormActive = false;

  // Create A variable for store the user  data 
  thought: string = '';
  
  constructor(private http: HttpClient, private router: Router) {
    console.log('thought work done____shimandhar_swami');
  }

  save() {

    // Only proceed if the user is authenticated
    const token_add = localStorage.getItem('token');

    if (token_add) { 
    const decode_token: any = jwtDecode(token_add);
      console.log(decode_token);
      console.log("userID :-");
      console.log(decode_token.userID);

      this.userID = decode_token.userID;
      
      if (!decode_token) {
        // If the user is not authenticated (token is missing), redirect to login
        alert('You need to be logged in to add a thought.');
        this.router.navigate(['/app-login']);
        return; // Stop further execution
      }
    }
    
    //  Only proceed if the user is authenticated
    const token = localStorage.getItem('token');

    if (!token) {
      // If the user is not authenticated (token is missing), redirect to login
      alert('You need to be logged in to add a thought.');
      this.router.navigate(['/app-login']);
      return; // Stop further execution
    }


    if (this.thought.trim() === '') {
      alert('Thought is empty, please write your nice thought.');
      return;// Stop further execution
    }

    // Proceed with adding the thought if the token exists and thought is not empty
    // const data = {
    //   "thought": this.thought,
    // };

    // Add the Authorization header with the token
    // const headers = { 'Authorization': `Bearer ${token}` };

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // const token = localStorage.getItem('token');

    // this.http.post("http://localhost:8086/api/add/thought", data, { headers }).subscribe(
    // this.http.post("http://localhost:8086/api/add/thought", { thought: this.thought }, { headers }).subscribe(
    this.http.post("http://localhost:8086/api/add/thought", { thought: this.thought ,userID :this.userID },{headers}).subscribe(
      (res_d: any) => {
        console.log(res_d);
        if (res_d.status) {
          alert('Thought added successfully');
          this.router.navigate(['app-allthought']); // Ensure the route is correct
        } else {
          alert('Something went wrong');
          this.router.navigate(['/']); // Optional: Redirect to a safe route
        }
      },
      (err) => {
        console.error('Error occurred:', err);
        alert('Failed to add thought');
      }
    );
  }
}
