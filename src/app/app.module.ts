import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule} from '@angular/router';
import {MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './pages/signin/signin.component'
import { PasswordComponent } from './pages/password/password.component';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordComponent,
    ClientComponent,
    NotfoundComponent,
    SigninComponent,
    NavbarComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
