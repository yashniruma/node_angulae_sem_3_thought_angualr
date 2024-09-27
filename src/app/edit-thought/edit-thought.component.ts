import { Component,NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-thought',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.scss'
})
export class EditThoughtComponent {
  
  // thought_Array: any[] = [];  here no need show last comment for details
  
  thought: string = ''; // Create a string variable to hold the thought

  thoughtID: number | null = null; // Assuming you get this value from the URL or session
  
  constructor(private http: HttpClient, private router: Router, private route :ActivatedRoute) {
    console.log('Edit thought  working done');

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.thoughtID = +id;// Convert the string to a number
      }
    });

    
    console.log('thought id :-->>>', this.thoughtID);
    this.get_thought_by_thoughtID()
    
  }
  get_thought_by_thoughtID(): void {

    console.log('user_thought_method call');
    console.log(this.thoughtID);

    if (this.thoughtID !== null) {

      this.http.get(`http://localhost:8086/api/edit/thought/${this.thoughtID}`).subscribe((res: any) => {
        console.log(res);

        if (res.status) {
          console.log('Fetched thought:', res); // Debugging: log the thought value
          
          // if(this  is not work){
            // this.thought = res.data.thought; // Store the thought string, not an   array
          
            // this.thought = res.data.thought; // Store the thought string, not an array
          
            // this.thought = res; // Store the thought string, not an array
          // }

          if (res.data && res.data.length > 0) {
            this.thought = res.data[0].thought; // Access the thought from the first element of the data array
          } else {
            console.warn('No thought found in the response data.');
          }

          // this.thought = res.thought || res.data?.thought || ''; // Assign the correct value
        } else {
          console.error('Error :-',res.message);
        }

      });
    } else {
      alert('You need to be logged in .');
      console.warn('User ID is not set, cannot fetch user thoughts.');

    }
  }

  
  
  save() {
    
    if (this.thoughtID !== null && this.thought !== '') {
      
      const update_thought = {

        id: this.thoughtID,
        thought: this.thought
      };

      // Send the updated thought to the backend
      this.http.put(`http://localhost:8086/api/update/thought/${this.thoughtID}`, update_thought).subscribe((res: any) => {
        
        if (res.status) {
          console.log('Update Done :- ', res);
          alert('Thought Updated');

          this.router.navigate(['/app-dashboard']);
        } else {
          console.error('Error updating thought:', res.message);
        }
      });
    }
    else {
      alert('Please enter a valid thought.');
    }

  }

  
}

//  why aaray  not work 
/**
 The issue you're facing is because this.thought_Array is being assigned an array (res.data.thought), but in your HTML, you're trying to bind it to an input field, which expects a string or a single value, not an array.

If res.data.thought contains the actual thought text, you should bind that to a variable that holds a string, not an array.
 */


/*

Ensure thought is a string in your component.
Bind directly to thought in the template, not thought.thought.
Check the backend response to ensure you're accessing the correct field (either res.thought or res.data.thought).


*/