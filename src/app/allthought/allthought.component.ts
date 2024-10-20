import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-allthought',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './allthought.component.html',
  styleUrl: './allthought.component.scss'
})
export class AllthoughtComponent implements OnInit{

  data_Array: any[] = [];

  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log('All thought  working done');
    // this.all_thought();
  }
  ngOnInit() {

    this.all_thought();  // Fetch data when component initializes
  }

  all_thought() {
    this.http.post("https://www.freesqldatabase.com/api/all/thought", {}).subscribe((res: any) => {
      console.log(res);

      if (res.status) {
        this.data_Array = res.data;  // Assign data to your array if response is successful

        // Sort thoughts dynamically by the 'likes' count in descending order
        this.data_Array.sort((a: any, b: any) => b.likes - a.likes);


        // localStorage.setItem('thought', JSON.stringify(res.data.thought));  are not work because it Server side run so it s non browser envirnoment
            sessionStorage.setItem('thought', JSON.stringify(res.data));
        
      } else {
        console.error(res.message);  // Log any error messages if status is false
      }      
    });

    function isBrowser(): boolean {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }
  }


  likeThought(thoughtId: number) {

    // Find the thought in the array and increment its like count locally
    const thought = this.data_Array.find(t => t.id === thoughtId);
    if (thought) {
      thought.likes += 1; // Increment like count locally for instant update
    }


    this.http.put(`http://localhost:8086/api/like/${thoughtId}`, {}).subscribe(() => {
      // After liking, refresh the list to show updated like counts

      this.all_thought();
    }, (error) => {
      console.error('Error liking thought:', error);
    });
  }

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
/*
        Save the thought data to localStorage as a string
       // localStorage.setItem('thought', JSON.stringify(res.data.thought));
       // localStorage.setItem('thought', res.data.thought);

       // Check if localStorage is available (only in browser environments)
       // if (typeof localStorage !== 'undefined') {
       //   localStorage.setItem('thought', JSON.stringify(res.data.thought));
       // } else {
       //   console.warn('localStorage is not available in this environment');
       // }
       */

// Only attempt to use localStorage in a browser environment
// if (isBrowser()) {
//   localStorage.setItem('thought', JSON.stringify(res.data.thought));
// } else {
//   console.warn('localStorage is not available. This is likely a non-browser environment.');
// }


// if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
//   // localStorage is available in this environment
//   localStorage.setItem('thought', JSON.stringify(res.data.thought));
// } else {
//   console.warn('localStorage is not available. This is likely a non-browser environment.');
// }

/*

// if (isPlatformBrowser(this.platformId)) {
        //   try {
        //     localStorage.setItem('thought', JSON.stringify(res.data.thought));
        //     sessionStorage.setItem('thought', JSON.stringify(res.data));
        //   } catch (e) {
        //     console.error('Failed to access localStorage:', e);
        //   }
        // } else {
        //   console.warn('localStorage is not available. This is likely a non-browser environment.');
        // }

*/
