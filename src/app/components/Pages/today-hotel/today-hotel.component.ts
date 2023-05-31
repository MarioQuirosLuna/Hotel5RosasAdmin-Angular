import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../../services/home-service/home-service.service';

import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

interface jsPDFWithPlugin extends jspdf.jsPDF {
  autoTable: (options: UserOptions) => jspdf.jsPDF;
}

@Component({
  selector: 'app-today-hotel',
  templateUrl: './today-hotel.component.html',
  styleUrls: ['./today-hotel.component.css']
})
export class TodayHotelComponent {

  rooms: any = []

  username: String = "";

  constructor(private route: ActivatedRoute, private service: HomeServiceService) {
    this.service.getHotelToday().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  myDate = new Date();

  exportToPDF() {
    const doc = new jspdf.jsPDF('portrait', 'px', 'a4') as jsPDFWithPlugin;

    doc.autoTable({
      didDrawPage: function (data: any) {
        doc.setFontSize(14);
        doc.setTextColor(40);
        doc.text('Estado de habitaciones del dia de hoy del Hotel 5 Rosas', data.settings.margin.left, 20);
      },
      head: [['Room Number', 'Room Type', 'Room Status']],
      body: this.rooms.map((row: { numero_Habitacion: any; nombre: any; estado_Del_Dia: any; }) => [row.numero_Habitacion, row.nombre, row.estado_Del_Dia]),
    });
    doc.save('HotelToday.pdf');
  }


}
