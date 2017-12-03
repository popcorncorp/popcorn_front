import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';


const appRoutes: Routes = [
  { path: '', loadChildren: 'app/public/public.module#PublicModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
