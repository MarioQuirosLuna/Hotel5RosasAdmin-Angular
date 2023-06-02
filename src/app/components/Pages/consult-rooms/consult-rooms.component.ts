import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacilitiesServiceService } from '../../services/facilities-service/facilities-service.service';
import { ActivatedRoute } from '@angular/router';
import { RoomsTypeServiceService } from '../../services/rooms-service/rooms-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../Util/authService';


@Component({
  selector: 'app-consult-rooms',
  templateUrl: './consult-rooms.component.html',
  styleUrls: ['./consult-rooms.component.css']
})
export class ConsultRoomsComponent {

  myForm: FormGroup;

  tablaVisible = false;
  resultText = ''
  roomTypes: any = [];
  rooms: any = [];

  startDate: String = '';
  endDate: String = '';
  roomId: Number = 0;

  username: String = "";

  constructor(private service: FacilitiesServiceService, private router: Router, private route: ActivatedRoute, private serviceRoom: RoomsTypeServiceService, private authService: AuthService) {
    this.myForm = new FormGroup({
      roomType: new FormControl()
    });
    this.service.getRoomsType().subscribe(roomTypes => {
      this.roomTypes = roomTypes;
    });
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  DatesValidation() {

    let originalDate = new Date();

    let year = originalDate.getFullYear();
    let month = ('0' + (originalDate.getMonth() + 1)).slice(-2);
    let day = ('0' + originalDate.getDate()).slice(-2);
    let hours = ('0' + originalDate.getHours()).slice(-2);
    let minutes = ('0' + originalDate.getMinutes()).slice(-2);

    let formatedDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;
    let formatedDateToday = year + '-' + month + '-' + day;

    if (!this.startDate || !this.endDate || !this.roomId) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, no deje campos vacíos'
      });
      return false;
    }
    if (this.startDate < formatedDateToday || this.endDate < formatedDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Las fechas deben ser mayores al día de hoy'
      });
      return false;
    }

    if (this.startDate >= this.endDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'La fecha de llegada debe ser menor a la fecha de salida'
      });

      return false;
    }

    return true;
  }

  showTable() {
    if (this.DatesValidation()) {
      if (this.startDate != '' && this.endDate != '' && this.roomId != 0) {
        this.tablaVisible = true;
        this.resultText = ' - Habitaciones Libres'

        this.serviceRoom.apiRoomGetAvailability(
          this.startDate,
          this.endDate,
          this.roomId,
        ).subscribe(result => {
          this.rooms = result;
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, no deje campos vacíos'
        });
      }
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
  updateId(event: Event) {
    const selectedValue = Number((event.target as HTMLSelectElement).value);
    this.roomId = selectedValue;
  }

}
