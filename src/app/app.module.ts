import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { YmhtComponent } from './ymht/ymht.component';
import { FormsModule } from '@angular/forms';
import { AddYmhtComponent } from './add-ymht/add-ymht.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';


// import { AddThoughtComponent } from './add-thought/add-thought.component';

import { AddThoughtComponent } from './add-thought/mainadd-thought.component';
import { AllthoughtComponent } from './allthought/allthought.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AlluserComponent } from './admin/alluser/alluser.component';
import { GoalComponent } from './admin/goal/goal.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

// import { AppRoutingModule } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        YmhtComponent,
        NavBarComponent,
        AddYmhtComponent,

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
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ToastrModule.forRoot(),// ToastrModule added
        // AppRoutingModule
        // RouterModule
        RouterModule.forRoot(routes),
        
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
