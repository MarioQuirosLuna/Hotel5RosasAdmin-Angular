import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../../Util/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {

  @Input() username: String = "";

  hotelName = 'Hotel 5 Rosas';

  constructor(private authService: AuthService, private router: Router) {

  }

  OnInit() {

  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['login'])
  }

}
