import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule, RouterOutlet } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';


const publicRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    { path: 'login', pathMatch: 'full', component: LoginComponent},
    { path: 'registration', pathMatch: 'full', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(publicRoutes)
    ],
  providers: []
})
export class PublicModule { }
