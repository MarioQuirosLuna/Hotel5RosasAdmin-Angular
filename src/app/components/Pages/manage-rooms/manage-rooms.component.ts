import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import { AuthService } from '../../Util/authService';
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

  constructor(private router: Router, private route: ActivatedRoute, private serviceRoom: RoomsTypeServiceService, private authService: AuthService) { }

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
}
