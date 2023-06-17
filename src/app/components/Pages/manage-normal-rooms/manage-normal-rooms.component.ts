import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicityServiceService } from '../../services/publicity-service/publicity-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';
import { RoomServiceService } from '../../services/room-service/room-service.service';

@Component({
  selector: 'app-manage-normal-rooms',
  templateUrl: './manage-normal-rooms.component.html',
  styleUrls: ['./manage-normal-rooms.component.css']
})
export class ManageNormalRoomsComponent {

  publicity: any = [];

  username: String = '';

  constructor(
    private service: RoomServiceService,
    private route: Router,
    private router: ActivatedRoute,
    private authService: AuthService
  ) {
    this.service.getRoom().subscribe((publicity) => {
      this.publicity = publicity;
    });
   }

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
    if (!this.authService.isLoggedIn()) {
      this.route.navigate(['']);
    }
    this.service.getRoom().subscribe((publicity) => {
      this.publicity = publicity;
    });
  }

  routerCreatePublicity() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };
    this.route.navigate(['/create-normal-rooms'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
  }

  goDelete(_id: number) {
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

  goEdit(_id: Number, _typeRoom: Number, _estado: String) {
    const navigationExtras = {
      queryParams: { username: this.username, id: _id , typeRoom: _typeRoom, estado: _estado},
    };

    this.route.navigate(['/edit-room'], navigationExtras).then(() => {
      window.history.replaceState(
        {},
        document.title,
        this.route.url.split('?')[0]
      );
    });
  }

}
