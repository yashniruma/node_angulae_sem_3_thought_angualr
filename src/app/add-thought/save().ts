// ...main  code
// save() {

  //   // Only proceed if the user is authenticated
  //   const token = localStorage.getItem('token');
  //   alert("token done");

  //   // if (!token) {

  //   //   // If the user is not authenticated (token is missing), redirect to login
  //   //   alert('You need to be logged in to add a thought.');

  //   //   this.router.navigate(['/app-login']);

  //   //   return; // Stop further execution
  //   // }


  //   // if (this.thought.trim() === '') {
  //   //   alert('Thought is empty, please write your nice thought.');
  //   //   return;// Stop further execution
  //   // }

  //   // // Proceed with adding the thought if the token exists and thought is not empty
  //   // const data = {
  //   //   "thought": this.thought,
  //   // };

  //   // this.http.post("http://localhost:8086/api/add/thought", data).subscribe(
  //   // // this.http.post("http://localhost:8086/api/add/thought", { thought: this.thought } ,{ headers }).subscribe(
  //   //     (res_d: any) => {
  //   //       console.log(res_d);
  //   //       if (res_d.status) {
  //   //         alert('Thought added successfully');
  //   //         this.router.navigate(['/app-home']); // Ensure the route is correct
  //   //       } else {
  //   //         alert('Something went wrong');
  //   //         this.router.navigate(['/']); // Optional: Redirect to a safe route
  //   //       }
  //   //     },
  //   //     (err) => {
  //   //       console.error('Error occurred:', err);
  //   //       alert('Failed to add thought');
  //   //     }
  //   //   );
//   }


// save() {
//   // Only proceed if the user is authenticated
//   let data = {
//     "thought": this.thought,
//   };

//   const token = localStorage.getItem('token');
//   if (token) {
//     // Call API to add a thought, passing the token in the request header
//     // Use HttpClient to send the request (code not shown for brevity)


//     this.http.post("http://localhost:8086/api/add/thought", data).subscribe(
//       (res_d: any) => {
//         console.log(res_d);
//         if (res_d.status) {
//           alert('Thought added successfully');
//           this.router.navigate(['/app-home']); // Ensure the route is correct
//         } else {
//           alert('Something went wrong');
//           this.router.navigate(['/']); // Optional: Redirect to a safe route
//         }
//       },
//       (err) => {
//         console.error('Error occurred:', err);
//         alert('Failed to add thought');
//       }
//     );


//   } else {
//     console.error('User not authenticated');
//   }
// }





/*
old token code 
 save() {

    // Only proceed if the user is authenticated
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
    
    // this.http.post("http://localhost:8086/api/add/thought", data, { headers }).subscribe(
    this.http.post("http://localhost:8086/api/add/thought", { thought: this.thought } ,{ headers }).subscribe(
        (res_d: any) => {
          console.log(res_d);
          if (res_d.status) {
            alert('Thought added successfully');
            this.router.navigate(['/app-home']); // Ensure the route is correct
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



*/