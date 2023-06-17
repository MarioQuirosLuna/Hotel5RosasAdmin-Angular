import { Component } from '@angular/core';
import { FacilitiesServiceService } from 'src/app/components/services/facilities-service/facilities-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/Util/authService';
import Swal from 'sweetalert2';

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
  }

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.route.navigate(['']);
    }
    this.service.getHotelFacilities().subscribe((facilities) => {
      this.facilities = facilities;
    });
  }

  deleteFacility(idFacility: number) {
    Swal.fire({
      title: 'Quieres eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteFacility(idFacility).subscribe((res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El registro se eliminó correctamente!',
            showConfirmButton: false,
            timer: 1800,
          });
          this.ngOnInit();
        });
      }
    });
  }

  routerFacilityCreate() {
    const navigationExtras = {
      queryParams: {
        username: this.username,
      },
    };
    this.route.navigate(['/create-facility'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
  }

  editFacility(idFacility: number) {
    const navigationExtras = {
      queryParams: { username: this.username, idFacility: idFacility },
    };
    this.route.navigate(['/modify-facility'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
  }
}
