import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Util/authService';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  username: String = "";

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

}
