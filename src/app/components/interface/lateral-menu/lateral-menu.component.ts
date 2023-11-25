import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css'],
})
export class LateralMenuComponent {
  @Input() username: String = '';

  constructor(private router: Router) {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
  }

  routerHome() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/home-page'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerModifyPages() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-page'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerReservationList() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/reservations-list'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerManageFacilities() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-facilities'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerManageNormalRooms() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/manage-normal-rooms'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerManageRooms() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/manage-rooms'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerManageSeasons() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/manage-season'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerManagePromotions(){
    const navigationExtras = {
      queryParams: { username : this.username },
    };
    this.router.navigate(['/manage-promotions'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerTodayHotel() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/hotel-today'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerConsultRooms() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/consult-rooms'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerPublicity() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/manage-publicity'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerCalidad() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/calidad'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }routerActivos() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/activos'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }
  routerFinanzas() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/finanzas'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }
  routerRRHH() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/rrhh'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }



}
