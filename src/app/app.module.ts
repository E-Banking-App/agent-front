import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule} from '@angular/router';
import {MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './pages/signin/signin.component'
import { PasswordComponent } from './pages/password/password.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { ClientsComponent } from './pages/clients/clients.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'password', component: PasswordComponent,canActivate: [AuthGuardGuard] },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuardGuard] },
  { path: 'create-client', component: CreateClientComponent,canActivate: [AuthGuardGuard] },
  { path: 'clients', component: ClientsComponent,canActivate: [AuthGuardGuard] },
  { path: '**', component: NotfoundComponent,canActivate: [AuthGuardGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordComponent,
    NotfoundComponent,
    SigninComponent,
    NavbarComponent,
    DialogComponent,
    CreateClientComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
