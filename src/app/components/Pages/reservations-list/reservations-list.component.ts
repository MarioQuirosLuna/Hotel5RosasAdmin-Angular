import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationServiceService } from '../../services/reservation-service/reservation-service.service';
import Swal from 'sweetalert2';
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
    private router: Router
  ) {
    this.service.getReservations().subscribe((reservations_list) => {
      this.reservations_list = reservations_list;
      console.log(reservations_list);
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    this.service.getReservations().subscribe((reservations_list) => {
      this.reservations_list = reservations_list;
      console.log(reservations_list);
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
        this.service.deleteReservation(id).subscribe((res) => {});
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El registro se eliminó correctamente!',
          showConfirmButton: false,
          timer: 1800,
        });
        const navigationExtras = {
          queryParams: { username: this.username },
        };
        this.router
          .navigate(['/reservations-list'], navigationExtras)
          .then(() => {
            window.history.replaceState(
              {},
              document.title,
              this.router.url.split('?')[0]
            );
          });
      }
    });
  }
}
