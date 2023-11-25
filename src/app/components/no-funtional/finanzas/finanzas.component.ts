import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationServiceService } from '../../services/reservation-service/reservation-service.service';
import Swal from 'sweetalert2';

import { AuthService } from '../../Util/authService';
@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent {
  username: String = '';


  constructor(
    private route: ActivatedRoute,
    private service: ReservationServiceService,
    private router: Router,
    private authService: AuthService
  ) {


  }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }


  }


}



