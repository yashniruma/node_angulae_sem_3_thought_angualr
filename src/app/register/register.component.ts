
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, Input, Provider } from '@angular/core';
import { Router } from '@angular/router';

// import { provideToastr } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';
import { error } from 'console';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',

  //  providers: [provideToastr()]
})
export class RegisterComponent {
  data_Array: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  // Create A variable for store the user  data 
  email: string = "";
  password: string = "";
  conpassword: string = "";
  crrentid = "";

  constructor(private http: HttpClient, private router: Router, ) {
    console.log("Done");
    //private toastr:Provider
  }

  register() {
    let data = {
      "email": this.email,
      "password": this.password,
      "conpassword": this.conpassword,
    };
   
    if (this.email == '') {
      alert('All data required') 
    }
    else if (this.password == '') {
      alert('All data required') 
    }
    else if (this.conpassword == '') {
      alert('All data required') 
    }
    else if (this.password != this.conpassword) {
      alert('Conform Password Does Note Match ');
     }
    else {
      
      this.http.post("http://localhost:8086/api/user/add", data).subscribe((res_d: any) => {
        console.log(res_d);
        alert("Register Done")
     
        /*
        // On successful registration, redirect to login and show success toast
        // this.toastr.success('Registration successful!', 'Success');
  
        // On success, clear form data
        // this.register.reset();
  
        // On success, navigate to the login page 
         */
     
        this.router.navigate(['']);

      },
        (error) => {
          if (error.status === 409) {
            // If user is already registered, show error toast
            // this.toastr.error('User already registered', 'Registration Error');

            alert("User already registered")
          } else {
            // Handle other errors
            // this.toastr.error('Registration failed', 'Error');
            alert("Registration failed")
          }
        }
      );
    }
    
    
    
  }

  save() {
    if (this.crrentid == '') {
      this.register();
    }
    else {
      // this.UpdateRecords();
    }

  }
}
