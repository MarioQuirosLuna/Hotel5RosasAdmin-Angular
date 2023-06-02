import { Component } from '@angular/core';
import { AuthService } from '../../Util/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) { }
  onInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }
}
