import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationServiceService } from '../../services/reservation-service/reservation-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.component.html',
  styleUrls: ['./reservation-view.component.css'],
})
export class ReservationViewComponent {
  username: String = '';
  _id: Number = 0;

  objectPage: any = {
    pK_Reserva: '',
    tipo_Habitacion: '',
    nombre_Cliente: '',
    apellidos_Cliente: '',
    numero_Tarjeta: '',
    correo: '',
    fecha_Transaccion: '',
    fecha_Inicio: '',
    fecha_Fin: '',
    tarifa_Total: '',
  };

  OnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
    });
  }

  constructor(
    private service: ReservationServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
    });
    this.service.getIdReservation(this._id).subscribe((publicity) => {
      console.log(publicity);
      this._id = publicity.pK_Publicidad;
      this.objectPage.pK_Reserva = publicity.pK_Reserva;
      this.objectPage.tipo_Habitacion = publicity.tipo_Habitacion;
      this.objectPage.nombre_Cliente = publicity.nombre_Cliente;
      this.objectPage.apellidos_Cliente = publicity.apellidos_Cliente;
      this.objectPage.numero_Tarjeta = publicity.numero_Tarjeta;
      this.objectPage.correo = publicity.correo;
      this.objectPage.fecha_Transaccion = publicity.fecha_Transaccion;
      this.objectPage.fecha_Inicio = publicity.fecha_Inicio;
      this.objectPage.fecha_Fin = publicity.fecha_Fin;
      this.objectPage.tarifa_Total = publicity.tarifa_Total;
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

  downloadReservation(id: Number) {}
}
