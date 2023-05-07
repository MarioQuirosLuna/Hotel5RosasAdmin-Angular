import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../../services/home-service/home-service.service';

@Component({
  selector: 'app-today-hotel',
  templateUrl: './today-hotel.component.html',
  styleUrls: ['./today-hotel.component.css']
})
export class TodayHotelComponent {

  rooms: any = []

  username: String = "";

  constructor(private route: ActivatedRoute,private service: HomeServiceService) {
    this.service.getHotelToday().subscribe(rooms =>{
      this.rooms = rooms;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  myDate = new Date();



}
