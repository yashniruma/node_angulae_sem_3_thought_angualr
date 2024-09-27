import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  data_Array: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  // Create A variable for store the user  data 
  email: string = "";
  password: string = "";
  conpassword: string = "";
  crrentid = "";

  constructor(private http: HttpClient, private router :Router) {
    console.log('login work');
  }

  login() {
    let data = {
      "email": this.email,
      "password": this.password,
    };
    if (this.email == '') {
      alert('All data required')
    }
    else if (this.password == '') {
      alert('All data required')
    }
    else {

      this.http.post("http://localhost:8086/api/user/data", data).subscribe((res_d: any) => {
        console.log(res_d);
        console.log("all done");

        if (res_d.status) {

          // Store the token in localStorage
          localStorage.setItem('token', res_d.token);
          // Login successful, redirect to home page
          this.router.navigate(['app-home']); 
        } else {
          alert('somthing wrong');
          this.router.navigate([''])
        }
        // alert("Login Done")
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
      this.login();
    }
    else {
      // this.UpdateRecords();
    }


  }
}
