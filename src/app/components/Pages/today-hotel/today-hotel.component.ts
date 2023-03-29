import { Component } from '@angular/core';

@Component({
  selector: 'app-today-hotel',
  templateUrl: './today-hotel.component.html',
  styleUrls: ['./today-hotel.component.css']
})
export class TodayHotelComponent {

  myDate = new Date();

  rooms = [
    {
      key: 'facility1',
      number: 1,
      name: 'Standard',
      state : 'D'
    },
    {
      key: 'facility1',
      number: 2,
      name: 'Standard',
      state : 'D'
    },
    {
      key: 'facility1',
      number: 3,
      name: 'Standard',
      state : 'D'
    },
    {
      key: 'facility1',
      number: 4,
      name: 'Junior',
      state : 'D'
    },
    {
      key: 'facility1',
      number: 5,
      name: 'Junior',
      state : 'O'
    },
    {
      key: 'facility1',
      number: 6,
      name: 'Junior',
      state : 'R'
    }
  ];

}
