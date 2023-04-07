import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';//API CONNECTION

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/interface/footer/footer.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { LateralMenuComponent } from './components/interface/lateral-menu/lateral-menu.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { HomeComponent } from './components/Pages/home-title/home.component';
import { ModifyPagesComponent } from './components/Pages/modify-pages/modify-pages.component';
import { HeaderHomeComponent } from './components/interface/header-home/header-home.component';
import { ReservationsListComponent } from './components/Pages/reservations-list/reservations-list.component';
import { AreaPublicityComponent } from './components/interface/area-publicity/area-publicity.component';
import { ManageRoomsComponent } from './components/Pages/manage-rooms/manage-rooms.component';
import { TodayHotelComponent } from './components/Pages/today-hotel/today-hotel.component';
import { ModifyHomePageComponent } from './components/Pages/modify-by-pages/modify-home-page/modify-home-page.component';
import { ModifyAboutUsPageComponent } from './components/Pages/modify-by-pages/modify-about-us-page/modify-about-us-page.component';
import { ModifyFacilitiesPageComponent } from './components/Pages/modify-by-pages/modify-facilities-page/modify-facilities-page.component';
import { ModifyUbicationPageComponent } from './components/Pages/modify-by-pages/modify-ubication-page/modify-ubication-page.component';
import { ModifyRoomComponent } from './components/Pages/modify-room/modify-room.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LateralMenuComponent,
    HomePageComponent,
    HomeComponent,
    ModifyPagesComponent,
    HeaderHomeComponent,
    ReservationsListComponent,
    AreaPublicityComponent,
    ManageRoomsComponent,
    TodayHotelComponent,
    ModifyHomePageComponent,
    ModifyAboutUsPageComponent,
    ModifyFacilitiesPageComponent,
    ModifyUbicationPageComponent,
    ModifyRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
