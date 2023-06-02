import { Component } from '@angular/core';
import { FacilitiesServiceService } from 'src/app/components/services/facilities-service/facilities-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/Util/authService';

@Component({
  selector: 'app-modify-facilities-page',
  templateUrl: './modify-facilities-page.component.html',
  styleUrls: ['./modify-facilities-page.component.css'],
})
export class ModifyFacilitiesPageComponent {
  facilities: any = [];

  username: String = '';


  constructor(
    private service: FacilitiesServiceService,
    private route: Router,
    private router: ActivatedRoute,
    private authService: AuthService
  ) {
    this.service.getHotelFacilities().subscribe((facilities) => {
      this.facilities = facilities;
    });
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.route.navigate(['']);
    }
  }

  deleteFacility() {
    alert('eliminar');
  }

  editFacility(idFacility: number) {
    const navigationExtras = {
      queryParams: { idFacility: idFacility },
    };
    /*
    this.route.navigate(['/reservations-list'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
    //alert('editar')*/
  }
}
