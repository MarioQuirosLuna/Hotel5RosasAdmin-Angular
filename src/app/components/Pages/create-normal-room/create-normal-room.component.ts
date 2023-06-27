import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionServiceService } from '../../services/promotion-service/promotion-service.service';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import { SeasonsServiceService } from '../../services/seasons-service/seasons-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';
import { RoomServiceService } from '../../services/room-service/room-service.service';
@Component({
  selector: 'app-create-normal-room',
  templateUrl: './create-normal-room.component.html',
  styleUrls: ['./create-normal-room.component.css'],
})
export class CreateNormalRoomComponent {
  username: String = '';

  seasonForm: FormGroup;

  roomsTypes: any = [];
  seasonsList: any = [];

  estado: Boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceRoom: RoomServiceService,
    private serviceTypeRoom: RoomsTypeServiceService,
    private authService: AuthService
  ) {
    this.seasonForm = new FormGroup({
      typeHabitacion: new FormControl(''),
      estado: new FormControl(Boolean, [Validators.required]),
    });
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    this.serviceTypeRoom.getRoomsType().subscribe((roomsTypes) => {
      this.roomsTypes = roomsTypes;
    });
  }

  addSeason() {
    if (this.seasonForm.value.estado == 'true') {
      this.estado = true;
    } else {
      this.estado = false;
    }

    this.serviceRoom
      .insertRoom({
        fK_Tipo_Habitacion: this.seasonForm.value.typeHabitacion,
        estado: this.estado,
      })
      .subscribe(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El registro se creó correctamente!',
            showConfirmButton: false,
            timer: 1800,
          });
          const navigationExtras = {
            queryParams: { username: this.username },
          };
          this.router
            .navigate(['/manage-normal-rooms'], navigationExtras)
            .then(() => {
              window.history.replaceState(
                {},
                document.title,
                this.router.url.split('?')[0]
              );
            });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al crear',
            text: 'Por favor, intenta nuevamente más tarde.',
            showConfirmButton: true,
          });
        }
      );

  }
}
