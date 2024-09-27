import { Component, OnInit, PLATFORM_ID ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule
// import jwt_decode from 'jwt-decode';
// import { jwtDecode } from 'jwt-decode';// Import jwt-decode to extract token
import { jwtDecode } from 'jwt-decode';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ,RouterModule], // Ensure RouterModule is imported here if needed
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  data_Array: any[] = [];
  email_data: any[] = [];

  // userId: number = 1; // Assume the logged-in user's ID (can come from auth service)

  userId: number | null = null; // User ID will be set dynamically
  
  user_name: string | null = null;

  apiUrl: string = 'http://localhost:3000'; // Your Node.js backend URL

  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log('All thought  working done');
    // this.all_thought();
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) { // Ensure code runs only in the browser
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const decode_token: any = jwtDecode(token);
          console.log(decode_token);
          console.log("decode_token done");
          console.log(decode_token.username);
          console.log(decode_token.userID);
          console.log("decode_token done");

          // this.email_data = decode_token;
          
          this.userId = decode_token.userID; // Adjust based on your token's structure
          this.user_name = decode_token.username

          console.log( "user id"); // Adjust based on your token's structure
          console.log( this.userId); // Adjust based on your token's structure
        } catch (err) {
          console.error('Token decoding failed:', err);
        }
      }
    } else {
      
      console.warn('Running outside of browser environment');
    }
    
    this.user_thought(); // Fetch data when component initializes
  }

  

  // Method to load user thoughts from backend
 
  user_thought(): void {
    
   
    console.log('user_thought_method call');
    console.log(this.userId);

    if(this.userId !==null){

      this.http.get(`http://localhost:8086/api/user/thought/${this.userId}`).subscribe((res: any) => {
      console.log(res);

      if (res.status) {
        this.data_Array = res.data;
      } else {
        console.error(res.message);
      }
    
    });
    } else {
      alert('You need to be logged in .');
      console.warn('User ID is not set, cannot fetch user thoughts.');
      
    }
  }

  //start ->> delete thought  ->>

  // Function to confirm the delete, now accepting the thought ID as a parameter
  confirmDelete(id:number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.deleteRecord(id);  // Use the record's ID
      // this.deleteRecord(this.id);  // Use the record's ID
    }
  }

  deleteRecord(id: number) {
    const url = `http://localhost:8086/delete/${id}`;

    this.http.delete(url).subscribe((response) => {
      
      console.log('Thought deleted successfully', response);
      alert('deleted  ');
      
      // this.router.navigate(['app-allthought']);
      this.data_Array = this.data_Array.filter(thought => thought.id !== id); // Remove the deleted thought from the UI
    },
      (err) => {
        console.error('Error deleting thought', err);
      }
    );
    
  }

  //end ->> delete thought  ->>

  websiteURL: string = '/http://localhost:4200/app-allthought'; // Replace with your website URL
  // websiteURL: string = 'http://localhost'; // Replace with your actual website URL
  // Share the thought on WhatsApp
  shareOnWhatsApp(thought: string) {

    // Construct the message including the thought and website URL

    // const message = `${thought} - ${this.websiteURL}`👉👈;
    const customMessage = `--> \t ${thought} \t <--  \n this energy thought share from the localhost web site. Click here for more positive thoughts: ${this.websiteURL}`;
    const encodedMessage = encodeURIComponent(customMessage); // URL-encode the message
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
    // const whatsappURL = `    // https://web.whatsapp.com/${encodedMessage}`; //this no work

    // Open the URL in a new tab
    // window.open(whatsappURL, '_blank');
    // const whatsappURL = `https://wa.me/?text=${encodeURIComponent(thought)}`;
    window.open(whatsappURL, '_blank');

    // window.open(whatsappURL);
    // '_blank': Opens a new tab, keeping the user on your website.
    //   Without '_blank': The user would be taken away from your site to WhatsApp in the same tab.

  }

}
// ngOnInit(): void {
//   if (isPlatformBrowser(this.platformId)) {
//     // Ensure code runs only in the browser
//     const token = localStorage.getItem('token');
//     console.log('Retrieved token:', token);

//     if (token) {
//       try {
//         const decode_token: any = jwtDecode(token);
//         console.log('Decoded token:', decode_token);

//         this.email_data = decode_token;
//         this.userId = decode_token.userId; // Ensure the key is correct

//         console.log('User ID:', this.userId); // Check if userId is correctly extracted
//       } catch (err) {
//         console.error('Token decoding failed:', err);
//       }
//     } else {
//       console.warn('No token found in localStorage');
//     }
//   } else {
//     console.warn('Running outside of browser environment');
//   }

//   if (this.userId !== null) {
//     this.user_thought(); // Fetch data when userId is set
//   } else {
//     console.warn('User ID is not set, cannot fetch user thoughts.');
//   }
// }
//  info


// typeof localStorage !== 'undefined': This safely checks whether localStorage exists without directly accessing it and avoids potential errors.
// typeof window !== 'undefined': This checks whether the code is running in a browser environment(since window is only available in browsers).