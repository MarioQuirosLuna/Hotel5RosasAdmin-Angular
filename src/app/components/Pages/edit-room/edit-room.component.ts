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
  _roomType: String = ''
  _estado: String = ''
  _estadoAux: String = ''

  seasonForm: FormGroup;

  typeRoomId : Number = 0
  estadoString : String = ""
  typeRoomID: Number = 0;

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
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this._id = parseInt(params['id']);
      this._roomType = params['typeRoom'];
      this._estado = params['estado'];
    });
    this.seasonForm = new FormGroup({
      typeHabitacion: new FormControl(''),
      estado: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    /*if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }*/
    this.serviceTypeRoom.getRoomsType().subscribe((roomsTypes) => {
      this.roomsTypes = roomsTypes;
      console.log(roomsTypes)
    });

    this.serviceRoom.getRoomId(this._id).subscribe((room) => {
      this.route.queryParams.subscribe((params) => {
        this.username = params['username'];
        this._id = params['id'];
        this._roomType = params['typeRoom'];
        this._estado = params['estado'];
      });
      this.serviceTypeRoom.getRoomsType().subscribe((roomsTypes) => {
        this.roomsTypes = roomsTypes;
        for (let j = 0; j < this.roomsTypes.length; j++) {
          if (this._roomType == this.roomsTypes[j].nombre) {
            this.typeRoomID = this.roomsTypes[j].pK_Tipo_Habitacion;
            break;
          }
        }
        if(this._estado == 'Utilizable'){
            this._estadoAux = 'Disponible'
        }else{
          this._estadoAux = 'Ocupada'
        }
        this.seasonForm = new FormGroup({
          typeHabitacion: new FormControl(this.typeRoomID),
          estado: new FormControl(this._estadoAux, [Validators.required]),
        });
      });

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

  editRoom() {
    if (this.seasonForm.value.estado == 'Disponible') {
      this.estado = true;
    } else {
      this.estado = false;
    }
    //Call Service to Add Season
    if (/*this.Validation()*/ true) {
      this.route.queryParams.subscribe((params) => {
        this.username = params['username'];
        this._id = parseInt(params['id']);
        this._roomType = params['typeRoom'];
        this._estado = params['estado'];
      });
      this.serviceRoom
        .putRoom({
          pK_Habitacion : this._id,
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
