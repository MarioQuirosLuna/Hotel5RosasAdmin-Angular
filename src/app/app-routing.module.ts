import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { HomeComponent } from './components/Pages/home-title/home.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { ReservationsListComponent } from './components/Pages/reservations-list/reservations-list.component';
import { ModifyPagesComponent } from './components/Pages/modify-pages/modify-pages.component';
import { ManageRoomsComponent } from './components/Pages/manage-rooms/manage-rooms.component';
import { TodayHotelComponent } from './components/Pages/today-hotel/today-hotel.component';

import { ModifyRoomComponent } from './components/Pages/modify-room/modify-room.component';

import { ModifyAboutUsPageComponent } from './components/Pages/modify-by-pages/modify-about-us-page/modify-about-us-page.component';
import { ModifyFacilitiesPageComponent } from './components/Pages/modify-by-pages/modify-facilities-page/modify-facilities-page.component';
import { ModifyHomePageComponent } from './components/Pages/modify-by-pages/modify-home-page/modify-home-page.component';
import { ModifyUbicationPageComponent } from './components/Pages/modify-by-pages/modify-ubication-page/modify-ubication-page.component';
import { ConsultRoomsComponent } from './components/Pages/consult-rooms/consult-rooms.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'modify-page', component: ModifyPagesComponent },
  { path: 'reservations-list', component: ReservationsListComponent },
  { path: 'manage-rooms', component: ManageRoomsComponent },
  { path: 'hotel-today', component: TodayHotelComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'modify-room', component: ModifyRoomComponent },

  { path: 'modify-about-us', component: ModifyAboutUsPageComponent },
  { path: 'modify-facilities', component: ModifyFacilitiesPageComponent },
  { path: 'modify-home', component: ModifyHomePageComponent },
  { path: 'modify-ubication', component: ModifyUbicationPageComponent },
  { path: 'consult-rooms', component: ConsultRoomsComponent },

  { path: '**', redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
