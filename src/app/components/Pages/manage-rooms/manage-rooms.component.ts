import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import { AuthService } from '../../Util/authService';
import Swal from 'sweetalert2';
import { RoomServiceService } from '../../services/room-service/room-service.service';
@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent {

  username: String = "";
  roomsTypes: any = [];
  rooms: any = [];
  imagen: String = ""
  rates: any = [];

  constructor(private router: Router, private route: ActivatedRoute, private serviceRoom: RoomsTypeServiceService, private service: RoomServiceService, private authService: AuthService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    this.serviceRoom.getRoomsType().subscribe(roomTypes => {
      this.roomsTypes = roomTypes;
    })
    this.serviceRoom.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    })
    this.serviceRoom.getRates().subscribe((rates) => {
      this.rates = rates;
      this.roomsTypes.forEach((element: any) => {
        this.rates.forEach((element2: any) => {
          if (element2.nombre == element.nombre) {
            element.caracteristicas = element2.caracteristicas;
          }
        });
      });
    });
  }

  goEdit(_id: Number): void {
    const navigationExtras = {
      queryParams: { username: this.username, id: _id },
    };
    this.router.navigate(['/modify-room'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  goEditRoom(_id: Number): void {
    const navigationExtras = {
      queryParams: { username: this.username, id: _id },
    };
    this.router.navigate(['/edit-room'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.router.url.split('?')[0]
      );
    });
  }

  goDelete(_id: Number) {
    if (!this.verifyTipoRoomHaveRooms(_id)) {
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
          this.serviceRoom.apiRoomDeleteTypeRoom(_id).subscribe((res) => {
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
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se puede eliminar el registro, ya que tiene habitaciones asociadas',
        showConfirmButton: false,
        timer: 2000,
      });
    }
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

  verifyTipoRoomHaveRooms(_id: Number) {
    let rooms = this.rooms.filter((room: any) => room.fK_Tipo_Habitacion == _id);
    if (rooms.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
