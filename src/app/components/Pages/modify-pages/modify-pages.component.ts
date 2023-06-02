import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Util/authService';
@Component({
  selector: 'app-modify-pages',
  templateUrl: './modify-pages.component.html',
  styleUrls: ['./modify-pages.component.css']
})
export class ModifyPagesComponent {
  username: String = "";

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  routerHome() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-home'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerAboutUs() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-about-us'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerFacility() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-facility'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerUbication() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-ubication'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  routerContactUs() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/modify-contact-us'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

}
