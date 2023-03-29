import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent {

  rooms = [
    {
      key: 'facility1',
      name: 'Standard',
      habitaciones: [
        {number : 1 , state : 1},
        {number : 2 , state : 0},
        {number : 3 , state : 1}
      ]
    },
    {
      key: 'facility1',
      name: 'Junior',
      habitaciones: [
        {number : 1 , state : 1},
        {number : 2 , state : 0},
        {number : 3 , state : 0},
        {number : 4 , state : 1}
      ]
    },
    {
      key: 'facility1',
      name: 'Suite',
      habitaciones: [
        {number : 1 , state : 1},
        {number : 2 , state : 0},
        {number : 3 , state : 0},
        {number : 4 , state : 1}
      ]
    },

    {
      key: 'facility1',
      name: 'Balcony',
      habitaciones: [
        {number : 1 , state : 1},
        {number : 2 , state : 0},
        {number : 3 , state : 0},
        {number : 4 , state : 1}
      ]
    },
  ];

}
