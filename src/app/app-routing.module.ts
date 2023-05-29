import { ModifyContactUsComponent } from './components/Pages/modify-by-pages/modify-contact-us/modify-contact-us.component';
import { PublicityViewComponent } from './components/Pages/publicity-view/publicity-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { HomeComponent } from './components/Pages/home-title/home.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { ReservationsListComponent } from './components/Pages/reservations-list/reservations-list.component';
import { ModifyPagesComponent } from './components/Pages/modify-pages/modify-pages.component';
import { ManageRoomsComponent } from './components/Pages/manage-rooms/manage-rooms.component';
import { ManageSeasonComponent } from './components/Pages/manage-season/manage-season.component';
import { TodayHotelComponent } from './components/Pages/today-hotel/today-hotel.component';

import { ModifyRoomComponent } from './components/Pages/modify-room/modify-room.component';

import { ModifyAboutUsPageComponent } from './components/Pages/modify-by-pages/modify-about-us-page/modify-about-us-page.component';
import { ModifyFacilitiesPageComponent } from './components/Pages/modify-by-pages/modify-facilities-page/modify-facilities-page.component';
import { ModifyHomePageComponent } from './components/Pages/modify-by-pages/modify-home-page/modify-home-page.component';
import { ModifyUbicationPageComponent } from './components/Pages/modify-by-pages/modify-ubication-page/modify-ubication-page.component';
import { ConsultRoomsComponent } from './components/Pages/consult-rooms/consult-rooms.component';

import { CreateSeasonComponent } from './components/Pages/create-season/create-season.component';
import { ModifySeasonComponent } from './components/Pages/modify-season/modify-season.component';
import { ManagePromotionsComponent } from './components/Pages/manage-promotions/manage-promotions.component';
import { CreatePromotionComponent } from './components/Pages/create-promotion/create-promotion.component';
import { ModifyPromotionComponent } from './components/Pages/modify-promotion/modify-promotion.component';
import { ModifyFacilityPageComponent } from './components/Pages/modify-by-pages/modify-facility-page/modify-facility-page.component';
import { PublicityCreateComponent } from './components/Pages/publicity-create/publicity-create.component';
import { PublicityModifyComponent } from './components/Pages/publicity-modify/publicity-modify.component';
import { ReservationViewComponent } from './components/Pages/reservation-view/reservation-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'modify-page', component: ModifyPagesComponent },
  { path: 'reservations-list', component: ReservationsListComponent },
  { path: 'manage-rooms', component: ManageRoomsComponent },
  { path: 'manage-season', component: ManageSeasonComponent },
  { path: 'manage-publicity', component: PublicityViewComponent },
  { path: 'manage-promotions', component: ManagePromotionsComponent },
  { path: 'create-promotions', component: CreatePromotionComponent },
  { path: 'create-publicity', component: PublicityCreateComponent },
  { path: 'hotel-today', component: TodayHotelComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'modify-room', component: ModifyRoomComponent },
  { path: 'publicity-view', component: PublicityViewComponent },
  { path: 'modify-publicity', component: PublicityModifyComponent },
  { path: 'reservation-view', component: ReservationViewComponent },
  { path: 'modify-contact-us', component: ModifyContactUsComponent },

  { path: 'create-season', component: CreateSeasonComponent },
  { path: 'modify-season', component: ModifySeasonComponent },
  { path: 'modify-promotion', component: ModifyPromotionComponent },

  { path: 'modify-about-us', component: ModifyAboutUsPageComponent },
  { path: 'modify-facilities', component: ModifyFacilitiesPageComponent },
  { path: 'modify-facility', component: ModifyFacilityPageComponent },
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
