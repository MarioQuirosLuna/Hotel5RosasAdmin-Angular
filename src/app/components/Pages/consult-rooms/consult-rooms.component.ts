import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FacilitiesServiceService } from '../../services/facilities-service/facilities-service.service';
import { ActivatedRoute } from '@angular/router';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-consult-rooms',
  templateUrl: './consult-rooms.component.html',
  styleUrls: ['./consult-rooms.component.css']
})
export class ConsultRoomsComponent {
  tablaVisible = false;
  resultText = ''
  roomTypes: any = [];
  rooms: any = [];

  startDate: String = '';
  endDate: String = '';
  roomId: Number = 0;

  username: String = "";

  constructor(private service: FacilitiesServiceService, private router: Router, private route: ActivatedRoute, private serviceRoom: RoomsTypeServiceService) {
    this.service.getRoomsType().subscribe(roomTypes => {
      this.roomTypes = roomTypes;
    });
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  showTable() {
    if (this.startDate != '' && this.endDate != '' && this.roomId != 0) {
      this.tablaVisible = true;
      this.resultText = ' - Resultado'

      this.serviceRoom.apiRoomGetAvailability(
        this.startDate,
        this.endDate,
        this.roomId,
      ).subscribe(result => {
        this.rooms = result;
        console.log(result)
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Faltan datos!'
      });
    }
  }

  cleanDisplay() {
    this.tablaVisible = false;
    this.resultText = ''
  }

  updateDateStart(event: any) {
    this.startDate = event.target.value;
  }
  updateDateEnd(event: any) {
    this.endDate = event.target.value;
  }
  updateId(event: any) {
    this.roomId = event.target.value;
  }

}
