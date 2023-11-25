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
import { ModifyFacilityPageComponent } from './components/Pages/modify-by-pages/modify-facility-page/modify-facility-page.component';
import { ConsultRoomsComponent } from './components/Pages/consult-rooms/consult-rooms.component';
import { ManageSeasonComponent } from './components/Pages/manage-season/manage-season.component';
import { CreateSeasonComponent } from './components/Pages/create-season/create-season.component';
import { ModifySeasonComponent } from './components/Pages/modify-season/modify-season.component';
import { ManagePromotionsComponent } from './components/Pages/manage-promotions/manage-promotions.component';
import { CreatePromotionComponent } from './components/Pages/create-promotion/create-promotion.component';
import { ModifyPromotionComponent } from './components/Pages/modify-promotion/modify-promotion.component';
import { PublicityCreateComponent } from './components/Pages/publicity-create/publicity-create.component';
import { PublicityModifyComponent } from './components/Pages/publicity-modify/publicity-modify.component';
import { PublicityViewComponent } from './components/Pages/publicity-view/publicity-view.component';
import { ReservationViewComponent } from './components/Pages/reservation-view/reservation-view.component';
import { ModifyContactUsComponent } from './components/Pages/modify-by-pages/modify-contact-us/modify-contact-us.component';
import { EditRoomComponent } from './components/Pages/edit-room/edit-room.component';
import { ManageNormalRoomsComponent } from './components/Pages/manage-normal-rooms/manage-normal-rooms.component';
import { CreateNormalRoomComponent } from './components/Pages/create-normal-room/create-normal-room.component';
import { MapComponent } from './components/Util/map/map.component';
import { FacilityCreateComponent } from './components/Pages/facility-create/facility-create.component';
import { FacilityModifyComponent } from './components/Pages/facility-modify/facility-modify.component';
import { CreateTypeRoomComponent } from './components/Pages/create-type-room/create-type-room.component'; 
import { ActivosFijosComponent } from './components/no-funtional/activos-fijos/activos-fijos.component';
import { CalidadComponent } from './components/no-funtional/calidad/calidad.component';
import { FinanzasComponent } from './components/no-funtional/finanzas/finanzas.component';
import { RRHHComponent } from './components/no-funtional/rrhh/rrhh.component';


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
    ModifyRoomComponent,
    ModifyFacilityPageComponent,
    ConsultRoomsComponent,
    ManageSeasonComponent,
    CreateSeasonComponent,
    ModifySeasonComponent,
    ManagePromotionsComponent,
    CreatePromotionComponent,
    ModifyPromotionComponent,
    PublicityCreateComponent,
    PublicityModifyComponent,
    PublicityViewComponent,
    ReservationViewComponent,
    ModifyContactUsComponent,
    EditRoomComponent,
    ManageNormalRoomsComponent,
    CreateNormalRoomComponent,
    MapComponent,
    FacilityCreateComponent,
    FacilityModifyComponent,
    CreateTypeRoomComponent,
    ActivosFijosComponent,
    CalidadComponent,
    FinanzasComponent,
    RRHHComponent
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
