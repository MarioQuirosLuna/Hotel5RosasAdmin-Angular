import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicityServiceService } from '../../services/publicity-service/publicity-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';


@Component({
  selector: 'app-activos-fijos',
  templateUrl: './activos-fijos.component.html',
  styleUrls: ['./activos-fijos.component.css']
})
export class ActivosFijosComponent {
  username: String = '';


  constructor(
    private service: PublicityServiceService,
    private route: Router,
    private router: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.route.navigate(['']);
    }


  }


}
