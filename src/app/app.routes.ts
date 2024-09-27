import { Routes ,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddYmhtComponent } from './add-ymht/add-ymht.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { AddThoughtComponent } from './add-thought/add-thought.component';
import { AddThoughtComponent } from './add-thought/mainadd-thought.component';
import { AllthoughtComponent } from './allthought/allthought.component';

// import { AddFormComponent } from './add-form/add-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AlluserComponent } from './admin/alluser/alluser.component';
import { GoalComponent } from './admin/goal/goal.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
 
const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return token !== null;  // Basic check, replace with actual validation
};


export const routes: Routes = [
    { path: '', redirectTo: '/app-login', pathMatch: 'full' },

    { path: 'app-register', component: RegisterComponent },

    { path: 'app-login', component: LoginComponent },
    
    // {path :'app-home', component :HomeComponent , canActivate: [()=>isAuthenticated() ? true :(window.location.href='app-login') as any]},
    {path :'app-home', component :HomeComponent },
    { path:'app-add-thought', component :AddThoughtComponent },
    { path: 'app-allthought', component: AllthoughtComponent },
    { path:'app-dashboard' , component :DashboardComponent},
    { path:'app-aboutus' , component :AboutusComponent},
    { path:'app-edit-thought/:id',component:EditThoughtComponent},
    { path:'adminlogin',component:AdminloginComponent},
    { path:'adminnavbar',component:AdminnavbarComponent},
    { path:'app-goal',component:GoalComponent},
    { path:'app-forgetpass',component:ForgetpassComponent},
   
    { path: '**', redirectTo: 'login' } , // Redirect to login for unknown paths

    // {
    //     path: 'adminnavbar',
    //     component: AdminnavbarComponent,
    //     children: [
    //         { path: 'alluser', component: AlluserComponent },
    //     ]
    // }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],// Configures the router at the root level
    exports: [RouterModule]// Makes the router directives available for use in the app
})
/*
we can  say  about both line it  use the hide for loop and use if else
 condition like if user click on login so check the module list login module available or not 
 if available then run login.html



    The RouterModule.forRoot(routes) and RouterModule are like a control structure that decides 
    which part of your Angular application to show based on the current route.

    RouterModule.forRoot(routes): 
        This sets up the main route configuration for your application. It's like defining the 
        possible paths a user can take (e.g., /login, /register).

    exports: [RouterModule]: 
        This allows other modules to use the routing configuration you've set up.
        It's like saying, "Hey, other parts of the app, you can use this routing logic to determine 
        what to show."

        So, when a user clicks "Login," the routing system checks if the login route is available
        . If it is, it shows the login page (login.component.html). 
        Similarly, if the user clicks "Register," it checks the route for the register page
         and displays it if available. This way, it manages showing the right component 
         (like login or register) based on user interaction.
    
    */

export class AppRoutingModule { }