import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/interface/footer/footer.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { LateralMenuComponent } from './components/interface/lateral-menu/lateral-menu.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { HomeComponent } from './components/Pages/home2/home.component';
import { ModifyPagesComponent } from './components/Pages/modify-pages/modify-pages.component';
import { HeaderHomeComponent } from './components/interface/header-home/header-home.component';
import { ReservationsListComponent } from './components/Pages/reservations-list/reservations-list.component';
import { AreaPublicityComponent } from './components/interface/area-publicity/area-publicity.component';

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
    AreaPublicityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
