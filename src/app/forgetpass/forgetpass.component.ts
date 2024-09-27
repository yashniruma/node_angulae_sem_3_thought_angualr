import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.scss'
})
export class ForgetpassComponent {

  data_Array: any[] = [];
  email: string = "";
  password: string = "";
  crrentid = "";

  constructor(private http: HttpClient, private router: Router) {
    console.log('login work');
  }

  forgotpass() {
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

      this.http.post("http://localhost:8086/api/user/check", data).subscribe((res_d: any) => {
        console.log(res_d);
        console.log("all done");

      
        if (res_d.status) {
          alert(' Password Reset Successfully');
          this.router.navigate(['']);
        } else {
          alert('User Not Found');
          // this.router.navigate([''])
        }
        // alert("Login Done")
      }
     ,
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
      this.forgotpass();
    }
    else {
      // this.UpdateRecords();
    }


  }
}
