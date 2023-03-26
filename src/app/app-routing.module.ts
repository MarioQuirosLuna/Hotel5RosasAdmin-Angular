import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { HomeComponent } from './components/Pages/home2/home.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { ReservationsListComponent } from './components/Pages/reservations-list/reservations-list.component';
import { ModifyPagesComponent } from './components/Pages/modify-pages/modify-pages.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'modify-page', component: ModifyPagesComponent },
  { path: 'reservations-list', component: ReservationsListComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: '**', redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
