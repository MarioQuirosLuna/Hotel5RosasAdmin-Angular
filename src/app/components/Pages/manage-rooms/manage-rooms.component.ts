import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent {

  username: String = "";
  roomsTypes: any = [];
  rooms: any = [];
  imagen: String = "https://via.placeholder.com/300x300?background=gray"


  constructor(private route: ActivatedRoute, private serviceRoom: RoomsTypeServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
    this.serviceRoom.getRoomsType().subscribe(roomTypes => {
      this.roomsTypes = roomTypes;
      console.log(this.roomsTypes)
    })
    this.serviceRoom.getRooms().subscribe(rooms => {
      this.rooms = rooms;
      console.log(this.rooms)
    })
  }

}
