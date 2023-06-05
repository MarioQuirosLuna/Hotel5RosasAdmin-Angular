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
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent {
  username: String = '';
  _id: Number = 0;

  seasonForm: FormGroup;

  typeRoomId : Number = 0
  estadoString : String = ""

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
      estado: new FormControl('', [Validators.required]),

    });

    this.seasonForm.controls['typeHabitacion'].setValue("aaa", {onlySelf: true});
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = params['id'];
      console.log(params['id'])
    });
    /*if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }*/

    this.serviceTypeRoom.getRoomsType().subscribe((roomsTypes) => {
      this.roomsTypes = roomsTypes;
    });

    this.serviceRoom.getRoomId(this._id).subscribe((roomsTypes) => {
      this.typeRoomId = this.roomsTypes.fK_Tipo_Habitacion
      console.log(this.typeRoomId)
      console.log(roomsTypes);
      this.seasonForm = new FormGroup({
        typeHabitacion: new FormControl(this.typeRoomId),
        estado: new FormControl(this.roomsTypes.estado_Del_Dia, [Validators.required]),
      });

      console.log(this.typeRoomId)
    });
  }

  Validation() {
    if (
      !this.seasonForm.value.nameSeason ||
      !this.seasonForm.value.typeHabitacion ||
      !this.seasonForm.value.promotion
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, no deje campos vacíos',
      });

      return false;
    }

    if (
      this.seasonForm.value.promotion > 100 ||
      this.seasonForm.value.promotion < 0
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'La promocion debe ser entre 0 y 100 porciento',
      });

      return false;
    }

    return true;
  }

  addSeason() {
    if (this.seasonForm.value.estado == 'true') {
      this.estado = true;
    } else {
      this.estado = false;
    }
    //Call Service to Add Season
    if (/*this.Validation()*/ true) {
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
}
