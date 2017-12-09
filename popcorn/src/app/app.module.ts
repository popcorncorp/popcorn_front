import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { RestService } from './shared/services';


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
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
