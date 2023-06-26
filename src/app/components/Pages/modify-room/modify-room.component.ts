import { Component, Input } from '@angular/core';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';
import { RoomServiceService } from '../../services/room-service/room-service.service';

@Component({
  selector: 'app-modify-room',
  templateUrl: './modify-room.component.html',
  styleUrls: ['./modify-room.component.css']
})
export class ModifyRoomComponent {

  @Input() username: String = "";
  @Input() _id: Number = 0;

  rooms: any = [];

  roomType: any = {};

  pk_tipo_habitacion: number = 0;
  imagen: string = "";
  tarifa: number = 0;
  descripcion: string = "";
  nombre: string = "";

  constructor(private router: Router, private route: ActivatedRoute, private serviceRoom: RoomsTypeServiceService, private authService: AuthService, private service: RoomServiceService) {
    const navigationExtras = {
      queryParams: { username: this.username, id: this._id },
    };
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this._id = params['id'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    //Esto hay que obtenerlo de base de datos con el id del tipo de habitacion
    this.serviceRoom.getRoomTypeById(this._id).subscribe(roomType => {
      this.roomType = roomType;
      this.pk_tipo_habitacion = roomType.pK_Tipo_Habitacion;
      this.nombre = roomType.nombre;
      this.descripcion = roomType.descripcion;
      this.tarifa = roomType.tarifa;
      this.imagen = roomType.imagen;
    })
    this.serviceRoom.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    })
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    this.toBase64(file).then((value: any) => {
      this.imagen = value;
    });


  }

  toBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


  actualizarNombre(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.nombre = String((nuevoValor.target as HTMLInputElement).value);
    }
  }
  actualizarDescripcion(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.descripcion = String((nuevoValor.target as HTMLInputElement).value);
    }
  }

  actualizarTarifa(nuevoValor: Event) {
    if (nuevoValor.target) {
      this.tarifa = Number((nuevoValor.target as HTMLInputElement).value);
    }
  }

  saveRoom(): void {
    this.serviceRoom.apiRoomTypeUpdate({
      pK_Tipo_Habitacion: this.pk_tipo_habitacion,
      nombre: this.nombre,
      descripcion: this.descripcion,
      tarifa: this.tarifa,
      imagen: this.imagen
    }).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El registro se modificó correctamente!',
        showConfirmButton: false,
        timer: 1800,
      });
      const navigationExtras = {
        queryParams: { username: this.username },
      };
      this.router.navigate(['/manage-rooms'], navigationExtras).then(() => {
        window.history.replaceState(
          {},
          document.title,
          this.router.url.split('?')[0]
        );
      });
    }, (error) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al modificar',
        text: 'Por favor, intenta nuevamente más tarde.',
        showConfirmButton: true,
      });
    })
  }

  backManageRooms() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.router.navigate(['/manage-rooms'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  goDeleteRoom(_id: Number) {
    Swal.fire({
      title: 'Quieres eliminar la habitación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteRoom(_id).subscribe((res) => {
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

  addRoom(_id: Number) {
    this.service
      .insertRoom({
        fK_Tipo_Habitacion: _id,
        estado: true,
      })
      .subscribe(
        () => {
          this.serviceRoom.getRooms().subscribe(rooms => {
            this.rooms = rooms;
          })
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El registro se creó correctamente!',
            showConfirmButton: false,
            timer: 1800,
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
