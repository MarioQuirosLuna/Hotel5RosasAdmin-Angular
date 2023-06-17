import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationServiceService } from '../../services/reservation-service/reservation-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';
@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css'],
})
export class ReservationsListComponent implements OnInit {
  username: String = '';

  reservations_list: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: ReservationServiceService,
    private router: Router,
    private authService: AuthService
  ) {
    this.service.getReservations().subscribe((reservations_list) => {
      this.reservations_list = reservations_list;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.service.getReservations().subscribe((reservations_list) => {
      this.reservations_list = reservations_list;
    });
  }

  viewReservation(id: Number) {
    const navigationExtras = {
      queryParams: { username: this.username, id: id },
    };
    this.router.navigate(['/reservation-view'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  deleteReservation(id: Number) {
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
        this.service.deleteReservation(id).subscribe((res) => { });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El registro se eliminó correctamente!',
          showConfirmButton: false,
          timer: 1800,
        });
        this.ngOnInit();
      }
    });
  }
}
