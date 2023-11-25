 import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';


@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html',
  styleUrls: ['./calidad.component.css']
})
export class CalidadComponent {
  username: String = '';


  constructor(
    private route: ActivatedRoute,
    private serviceSeason: SeasonsServiceService,
    private router: Router,
    private authService: AuthService
  ) {}


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }


}
