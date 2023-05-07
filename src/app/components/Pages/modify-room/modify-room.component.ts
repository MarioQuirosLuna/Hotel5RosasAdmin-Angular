import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-room',
  templateUrl: './modify-room.component.html',
  styleUrls: ['./modify-room.component.css']
})
export class ModifyRoomComponent {

  username: string = "";
  rooms: any = [];

  roomType: any = {};

  pk_tipo_habitacion: number = 0;
  imagen: string = "https://via.placeholder.com/300x300?background=gray";
  tarifa: number = 0;
  descripcion: string = "";
  nombre: string = "";

  constructor() { }
  ngOnInit() {
    //Esto hay que obtenerlo de base de datos con el id del tipo de habitacion
    this.roomType = {
      "pK_Tipo_Habitacion": 1,
      "nombre": "Suit Presidencial",
      "descripcion": "Suit con la última tendencia en accesorios de lujo, con acabados impecables que le brindarán una experiencia innolvidable y reconfortante en su estancia en el hotel.",
      "tarifa": 400000
    };

    this.pk_tipo_habitacion = this.roomType.pK_Tipo_Habitacion;
    this.nombre = this.roomType.nombre;
    this.descripcion = this.roomType.descripcion;
    this.tarifa = this.roomType.tarifa;
    //this.imagen = this.roomType.imagen;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      this.imagen = objectUrl;
    }
  }

  saveRoom(): void {
    // Aqui se llamaria un nuevo procedimiento para guardar los cambios en la base de datos
    console.log(this.pk_tipo_habitacion);
    console.log(this.nombre);
    console.log(this.descripcion);
    console.log(this.tarifa);
    console.log(this.imagen);
  }
}
